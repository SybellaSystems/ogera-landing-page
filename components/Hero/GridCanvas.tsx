"use client";

import { useEffect, useRef } from "react";

export default function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cellSize = 40;
    const expandRadius = 150;
    const expandStrength = 18;

    const colors = {
      base: "200, 190, 255", // soft purple
      highlight: "127, 86, 217", // deep purple
      gridAlpha: 0.04,
      cursorAlpha: 0.15,
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    const getDisplacedPoint = (gx: number, gy: number) => {
      const dx = gx - mouseRef.current.x;
      const dy = gy - mouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < expandRadius && distance > 0) {
        const force = (expandRadius - distance) / expandRadius;
        const push = force * force * expandStrength;
        return {
          x: gx + (dx / distance) * push,
          y: gy + (dy / distance) * push,
        };
      }
      return { x: gx, y: gy };
    };

    const getOpacity = (gx: number, gy: number) => {
      const w = canvas.width;
      const h = canvas.height;
      const nx = gx / w;
      const ny = gy / h;

      const rcx = 0.6,
        rcy = 0.4;
      const rd = Math.sqrt((nx - rcx) ** 2 + (ny - rcy) ** 2);
      const rightAlpha = Math.max(0, 1 - rd / 0.55);

      const leftAlpha =
        nx < 0.5 ? Math.max(0, 1 - ny / 0.5) * (1 - nx / 0.6) : 0;

      return Math.min(1, Math.max(rightAlpha, leftAlpha)) * colors.gridAlpha;
    };

    const drawGrid = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / cellSize) + 1;
      const rows = Math.ceil(canvas.height / cellSize) + 1;

      // Draw horizontal lines
      for (let row = 0; row <= rows; row++) {
        for (let col = 0; col < cols; col++) {
          const gx1 = col * cellSize;
          const gx2 = (col + 1) * cellSize;
          const gy = row * cellSize;

          const midAlpha = getOpacity((gx1 + gx2) / 2, gy);
          if (midAlpha < 0.002) continue;

          const p1 = getDisplacedPoint(gx1, gy);
          const p2 = getDisplacedPoint(gx2, gy);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${colors.base}, ${midAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw vertical lines
      for (let col = 0; col <= cols; col++) {
        for (let row = 0; row < rows; row++) {
          const gx = col * cellSize;
          const gy1 = row * cellSize;
          const gy2 = (row + 1) * cellSize;

          const midAlpha = getOpacity(gx, (gy1 + gy2) / 2);
          if (midAlpha < 0.002) continue;

          const p1 = getDisplacedPoint(gx, gy1);
          const p2 = getDisplacedPoint(gx, gy2);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${colors.base}, ${midAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw cursor highlight lines
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        for (let row = 0; row <= rows; row++) {
          for (let col = 0; col < cols; col++) {
            const gx1 = col * cellSize;
            const gx2 = (col + 1) * cellSize;
            const gy = row * cellSize;

            const midX = (gx1 + gx2) / 2;
            const dist = Math.hypot(midX - mouseRef.current.x, gy - mouseRef.current.y);

            if (dist < expandRadius) {
              const p1 = getDisplacedPoint(gx1, gy);
              const p2 = getDisplacedPoint(gx2, gy);
              const alpha = ((expandRadius - dist) / expandRadius) * colors.cursorAlpha;

              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${colors.highlight}, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        for (let col = 0; col <= cols; col++) {
          for (let row = 0; row < rows; row++) {
            const gx = col * cellSize;
            const gy1 = row * cellSize;
            const gy2 = (row + 1) * cellSize;

            const midY = (gy1 + gy2) / 2;
            const dist = Math.hypot(gx - mouseRef.current.x, midY - mouseRef.current.y);

            if (dist < expandRadius) {
              const p1 = getDisplacedPoint(gx, gy1);
              const p2 = getDisplacedPoint(gx, gy2);
              const alpha = ((expandRadius - dist) / expandRadius) * colors.cursorAlpha;

              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${colors.highlight}, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }
    };

    const animate = () => {
      drawGrid();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    resizeCanvas();
    drawGrid();
    animate();

    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        background: "linear-gradient(135deg, #1e3a8a, #4f46e5)", // updated gradient background
      }}
    />
  );
}