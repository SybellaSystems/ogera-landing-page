"use client";

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
  pulseSpeed: number;
  pulseOffset: number;
}

interface ParticleCanvasProps {
  particleCount?: number;
  maxDistance?: number;
  speed?: number;
}

export default function ParticleCanvas({
  particleCount = 180,
  maxDistance = 120,
  speed = 0.3,
}: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  // Multiple colors for particles
  const colors = [
    'rgba(127, 86, 217,',   // Primary purple
    'rgba(167, 139, 219,',  // Light purple
    'rgba(105, 65, 176,',   // Dark purple
    'rgba(183, 148, 244,',  // Lavender
    'rgba(99, 102, 241,',   // Indigo
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: Math.random() * 2.5 + 1,
          opacity: Math.random() * 0.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawParticle = (particle: Particle, time: number) => {
      if (!ctx) return;

      // Pulsing effect
      const pulse = Math.sin(time * particle.pulseSpeed + particle.pulseOffset) * 0.3 + 0.7;
      const currentRadius = particle.radius * pulse;
      const currentOpacity = particle.opacity * pulse;

      // Glow effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, currentRadius * 3
      );
      gradient.addColorStop(0, `${particle.color} ${currentOpacity})`);
      gradient.addColorStop(0.5, `${particle.color} ${currentOpacity * 0.3})`);
      gradient.addColorStop(1, `${particle.color} 0)`);

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentRadius * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = `${particle.color} ${currentOpacity})`;
      ctx.fill();
    };

    const drawLine = (p1: Particle, p2: Particle, distance: number) => {
      if (!ctx) return;
      const opacity = (1 - distance / maxDistance) * 0.4;

      // Gradient line
      const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      gradient.addColorStop(0, `${p1.color} ${opacity})`);
      gradient.addColorStop(1, `${p2.color} ${opacity})`);

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    };

    const updateParticle = (particle: Particle) => {
      // Mouse interaction - ATTRACT particles
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxMouseDistance = 200;

      if (distance < maxMouseDistance && distance > 0) {
        const force = (maxMouseDistance - distance) / maxMouseDistance;
        particle.vx += (dx / distance) * force * 0.25;
        particle.vy += (dy / distance) * force * 0.25;
      }

      // Apply velocity with damping
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.98;
      particle.vy *= 0.98;

      // Continuous random movement (more visible drift)
      particle.vx += (Math.random() - 0.5) * 0.2;
      particle.vy += (Math.random() - 0.5) * 0.2;

      // Limit velocity
      const maxVel = 2.5;
      particle.vx = Math.max(-maxVel, Math.min(maxVel, particle.vx));
      particle.vy = Math.max(-maxVel, Math.min(maxVel, particle.vy));

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      timeRef.current += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Update and draw particles
      particles.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle, timeRef.current);
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            drawLine(particles[i], particles[j], distance);
          }
        }

        // Draw lines to mouse
        const mouseDx = particles[i].x - mouseRef.current.x;
        const mouseDy = particles[i].y - mouseRef.current.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDistance < maxDistance * 2) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          const opacity = (1 - mouseDistance / (maxDistance * 2)) * 0.6;
          ctx.strokeStyle = `${particles[i].color} ${opacity})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      // Draw mouse glow
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        const mouseGlow = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 80
        );
        mouseGlow.addColorStop(0, 'rgba(127, 86, 217, 0.15)');
        mouseGlow.addColorStop(0.5, 'rgba(127, 86, 217, 0.05)');
        mouseGlow.addColorStop(1, 'rgba(127, 86, 217, 0)');

        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 80, 0, Math.PI * 2);
        ctx.fillStyle = mouseGlow;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= -100 && x <= canvas.width + 100 && y >= -100 && y <= canvas.height + 100) {
        mouseRef.current.x = x;
        mouseRef.current.y = y;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    resizeCanvas();
    initParticles();

    // Draw first frame immediately (no delay)
    const particles = particlesRef.current;
    particles.forEach((particle) => {
      drawParticle(particle, 0);
    });

    // Then start animation loop
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    document.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement?.parentElement?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      canvas.parentElement?.parentElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [particleCount, maxDistance, speed, colors]);

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
      }}
    />
  );
}
