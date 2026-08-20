import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ParticleMatrix4D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { is4DActive } = useLanguage();

  useEffect(() => {
    if (!is4DActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates in 4D space
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isMoving: false,
      radius: 180
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 4D Particles (x, y, z, t)
    const particleCount = Math.min(Math.floor(width / 18), 70);
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      color: string;
      phase: number;
    }> = [];

    const colors = [
      'rgba(0, 240, 255, ', // Cyan
      'rgba(59, 130, 246, ', // Sapphire
      'rgba(139, 92, 246, ', // Violet
      'rgba(16, 185, 129, ', // Emerald
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 400 + 100, // 3D Depth
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2.2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2, // 4th dimension (temporal wave)
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015; // Time-dimension progression

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Update & Draw 4D Nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 4D Temporal oscillation
        const timeOffset = Math.sin(time + p.phase) * 1.5;
        p.x += p.vx + timeOffset * 0.2;
        p.y += p.vy + Math.cos(time + p.phase) * 0.2;
        p.z += p.vz;

        // Boundaries wrap in 3D
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        if (p.z < 50) p.z = 500;
        if (p.z > 500) p.z = 50;

        // Spatial 3D Perspective Projection
        const fov = 350;
        const scale = fov / (fov + p.z);
        const projX = (p.x - width / 2) * scale + width / 2;
        const projY = (p.y - height / 2) * scale + height / 2;
        const projRadius = Math.max(p.radius * scale * 1.6, 0.6);

        // Interactive Cursor Magnetic Pull
        const dx = mouse.x - projX;
        const dy = mouse.y - projY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x += (dx / dist) * force * 1.8;
          p.y += (dy / dist) * force * 1.8;
        }

        // Draw Node with 4D Alpha Pulse
        const alpha = Math.min(Math.max((1 - p.z / 500) * 0.6 + Math.sin(time + p.phase) * 0.2, 0.1), 0.85);
        ctx.beginPath();
        ctx.arc(projX, projY, projRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#00F0FF';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw Interconnected Constellation Lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const scale2 = fov / (fov + p2.z);
          const projX2 = (p2.x - width / 2) * scale2 + width / 2;
          const projY2 = (p2.y - height / 2) * scale2 + height / 2;

          const lineDx = projX - projX2;
          const lineDy = projY - projY2;
          const lineDist = Math.sqrt(lineDx * lineDx + lineDy * lineDy);

          if (lineDist < 130) {
            const lineAlpha = (1 - lineDist / 130) * 0.18 * alpha;
            ctx.beginPath();
            ctx.moveTo(projX, projY);
            ctx.lineTo(projX2, projY2);
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.75 * scale;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [is4DActive]);

  if (!is4DActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-700"
    />
  );
};
