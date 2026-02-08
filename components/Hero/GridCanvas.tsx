"use client";

import { useEffect, useRef } from 'react';

export default function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cellSize = 40;
    const expandRadius = 150;
    const expandStrength = 18;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    const drawGrid = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const cols = Math.ceil(canvas.width / cellSize) + 1;
      const rows = Math.ceil(canvas.height / cellSize) + 1;

      // Calculate displaced grid points
      const getDisplacedPoint = (gx: number, gy: number) => {
        const dx = gx - mx;
        const dy = gy - my;
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

      // Visibility: right side full + top-left quarter
      const getOpacity = (gx: number, gy: number) => {
        const w = canvas.width;
        const h = canvas.height;
        const nx = gx / w; // 0 to 1
        const ny = gy / h; // 0 to 1

        // Right side (x > 0.45): radial fade from center-right
        const rcx = 0.6, rcy = 0.4;
        const rd = Math.sqrt((nx - rcx) ** 2 + (ny - rcy) ** 2);
        const rightAlpha = Math.max(0, 1 - rd / 0.55);

        // Top-left (x < 0.5, y < 0.5): fade down
        const leftAlpha = nx < 0.5 ? Math.max(0, 1 - ny / 0.5) * (1 - nx / 0.6) : 0;

        return Math.min(1, Math.max(rightAlpha, leftAlpha)) * 0.04;
      };

      ctx.lineWidth = 1;

      // Draw line segments with per-cell opacity
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
          ctx.strokeStyle = `rgba(200, 190, 255, ${midAlpha})`;
          ctx.stroke();
        }
      }

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
          ctx.strokeStyle = `rgba(200, 190, 255, ${midAlpha})`;
          ctx.stroke();
        }
      }

      // Draw brighter lines near cursor
      if (mx > 0 && my > 0) {
        for (let row = 0; row <= rows; row++) {
          for (let col = 0; col < cols; col++) {
            const gx1 = col * cellSize;
            const gx2 = (col + 1) * cellSize;
            const gy = row * cellSize;

            const midX = (gx1 + gx2) / 2;
            const dist = Math.sqrt((midX - mx) ** 2 + (gy - my) ** 2);

            if (dist < expandRadius) {
              const p1 = getDisplacedPoint(gx1, gy);
              const p2 = getDisplacedPoint(gx2, gy);
              const brightness = ((expandRadius - dist) / expandRadius) * 0.15;

              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(127, 86, 217, ${brightness})`;
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
            const dist = Math.sqrt((gx - mx) ** 2 + (midY - my) ** 2);

            if (dist < expandRadius) {
              const p1 = getDisplacedPoint(gx, gy1);
              const p2 = getDisplacedPoint(gx, gy2);
              const brightness = ((expandRadius - dist) / expandRadius) * 0.15;

              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(127, 86, 217, ${brightness})`;
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

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
