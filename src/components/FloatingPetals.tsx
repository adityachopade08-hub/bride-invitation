import React, { useEffect, useRef } from 'react';

/**
 * Realistic Rose Petal Falling Canvas Animation
 * Renders authentic velvety red, crimson, blush pink, and soft rose petals
 * with natural 3D tumble, breeze drift, organic petal curves, and continuous flow.
 * Always enabled, optimized for mobile & desktop.
 */

interface RosePetal {
  x: number;
  y: number;
  size: number;
  aspectRatio: number;
  speedY: number;
  baseSpeedX: number;
  swaySpeed: number;
  swayOffset: number;
  swayRadius: number;
  rotation: number;
  rotationSpeed: number;
  flipAngle: number;
  flipSpeed: number;
  curl: number;
  colorType: 'deepRed' | 'crimson' | 'rose' | 'blush' | 'maroon';
  opacity: number;
}

export const FloatingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
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
    window.addEventListener('resize', handleResize, { passive: true });

    // Organic color palettes for realistic multi-layered rose petals
    const petalPalette: Record<
      RosePetal['colorType'],
      { base: string; tip: string; highlight: string }
    > = {
      deepRed: {
        base: '#6B0000',
        tip: '#A00000',
        highlight: '#D91B24'
      },
      crimson: {
        base: '#8B0014',
        tip: '#B81424',
        highlight: '#E63946'
      },
      rose: {
        base: '#A4133C',
        tip: '#C9184A',
        highlight: '#FF4D6D'
      },
      blush: {
        base: '#C75D74',
        tip: '#E88B9E',
        highlight: '#FFCCD5'
      },
      maroon: {
        base: '#580816',
        tip: '#7F1325',
        highlight: '#A31D36'
      }
    };

    const colorKeys: RosePetal['colorType'][] = [
      'deepRed',
      'crimson',
      'crimson',
      'rose',
      'rose',
      'blush',
      'maroon'
    ];

    const petalCount = window.innerWidth < 768 ? 24 : 42;
    const petals: RosePetal[] = [];

    const createPetal = (startY?: number): RosePetal => ({
      x: Math.random() * width,
      y: startY !== undefined ? startY : Math.random() * height - height,
      size: Math.random() * 9 + 11, // 11px to 20px
      aspectRatio: Math.random() * 0.35 + 0.85,
      speedY: Math.random() * 1.1 + 0.7, // gentle descent
      baseSpeedX: (Math.random() - 0.5) * 0.4,
      swaySpeed: Math.random() * 0.025 + 0.012,
      swayOffset: Math.random() * Math.PI * 2,
      swayRadius: Math.random() * 1.6 + 0.8,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      flipAngle: Math.random() * Math.PI * 2,
      flipSpeed: Math.random() * 0.03 + 0.015,
      curl: (Math.random() - 0.5) * 0.25,
      colorType: colorKeys[Math.floor(Math.random() * colorKeys.length)],
      opacity: Math.random() * 0.25 + 0.72
    });

    for (let i = 0; i < petalCount; i++) {
      // Distribute initially throughout screen height
      petals.push(createPetal(Math.random() * height));
    }

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      // Subtle ambient wind breeze wave
      const breeze = Math.sin(tick * 0.008) * 0.5;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // Update physics
        p.y += p.speedY;
        p.x += Math.sin(tick * p.swaySpeed + p.swayOffset) * p.swayRadius + p.baseSpeedX + breeze;
        p.rotation += p.rotationSpeed;
        p.flipAngle += p.flipSpeed;

        // Reset if moved past bottom or edges
        if (p.y > height + 30) {
          petals[i] = createPetal(-25);
          continue;
        }
        if (p.x < -40) p.x = width + 20;
        else if (p.x > width + 40) p.x = -20;

        // 3D tumble projections
        const scaleX = Math.cos(p.flipAngle);
        const scaleY = Math.sin(p.flipAngle * 0.7 + p.swayOffset) * 0.3 + 0.85;

        // Skip near-edge-on rendering
        if (Math.abs(scaleX) < 0.1) continue;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(scaleX * p.aspectRatio, scaleY);

        const palette = petalPalette[p.colorType];
        const s = p.size;

        // Create linear gradient along the petal length for velvety depth
        const grad = ctx.createLinearGradient(0, s * 0.9, 0, -s * 0.9);
        grad.addColorStop(0, palette.base);
        grad.addColorStop(0.55, palette.tip);
        grad.addColorStop(1, palette.highlight);

        ctx.fillStyle = grad;
        ctx.globalAlpha = p.opacity;

        // Draw realistic curved rose petal path
        ctx.beginPath();
        // Pointed stem attachment at bottom
        ctx.moveTo(0, s * 0.85);
        // Left petal belly
        ctx.bezierCurveTo(
          -s * 0.85, s * 0.35,
          -s * 0.9 + p.curl * s, -s * 0.5,
          -s * 0.2, -s * 0.9
        );
        // Top gentle notched curve
        ctx.bezierCurveTo(
          -s * 0.05, -s * 0.82,
          s * 0.05, -s * 0.82,
          s * 0.2, -s * 0.9
        );
        // Right petal belly
        ctx.bezierCurveTo(
          s * 0.9 - p.curl * s, -s * 0.5,
          s * 0.85, s * 0.35,
          0, s * 0.85
        );
        ctx.closePath();
        ctx.fill();

        // Subtle velvety center vein highlight
        ctx.beginPath();
        ctx.moveTo(0, s * 0.7);
        ctx.quadraticCurveTo(p.curl * s * 0.5, 0, 0, -s * 0.65);
        ctx.strokeStyle = palette.highlight;
        ctx.globalAlpha = p.opacity * 0.45;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 w-full h-full"
      style={{ mixBlendMode: 'multiply' }}
      aria-hidden="true"
    />
  );
};
