import React, { useEffect, useRef } from 'react';

export type ParticleAnimationPhase = 'idle' | 'accelerating' | 'bursting' | 'complete';

interface GoldenOrbitParticlesProps {
  phase: ParticleAnimationPhase;
  onBurstStart?: () => void;
}

interface Particle {
  angle: number;
  speed: number;
  radiusX: number;
  radiusY: number;
  orbitIndex: number;
  tilt: number;
  size: number;
  type: 'star' | 'diamond' | 'dot' | 'dust' | 'burst';
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  // Trail history
  trail: { x: number; y: number; alpha: number }[];
  // Burst physics
  burstVelocityX?: number;
  burstVelocityY?: number;
  burstX?: number;
  burstY?: number;
}

export const GoldenOrbitParticles: React.FC<GoldenOrbitParticlesProps> = ({
  phase,
  onBurstStart
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const phaseRef = useRef<ParticleAnimationPhase>(phase);
  phaseRef.current = phase;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas size (centered over the 110px wax seal medallion)
    const size = 320;
    canvas.width = size;
    canvas.height = size;
    const centerX = size / 2;
    const centerY = size / 2;

    // Create 48 golden particles across 3 distinct orbits
    const particleCount = 48;
    const particles: Particle[] = [];

    const types: Particle['type'][] = [
      'star',
      'dot',
      'diamond',
      'dust',
      'star',
      'dot',
      'dust',
      'diamond'
    ];

    for (let i = 0; i < particleCount; i++) {
      const orbitIndex = i % 3;
      // Orbit 0: Inner tight orbit (radius ~ 64px - 72px)
      // Orbit 1: Middle orbit (radius ~ 76px - 88px)
      // Orbit 2: Outer elliptical orbit (radius ~ 92px - 108px)
      let radiusX = 66 + orbitIndex * 16 + (Math.random() * 8 - 4);
      let radiusY = radiusX * (0.82 + (orbitIndex % 2) * 0.12);
      let tilt = -0.32 + orbitIndex * 0.22;

      const pType = types[i % types.length];
      const pSize =
        pType === 'star'
          ? 4.5 + Math.random() * 2.2
          : pType === 'diamond'
          ? 3.2 + Math.random() * 1.8
          : pType === 'dot'
          ? 2.2 + Math.random() * 1.6
          : 1.2 + Math.random() * 1.0;

      particles.push({
        angle: (i / particleCount) * Math.PI * 2 + Math.random() * 0.3,
        // Alternate clockwise and subtle counter velocities
        speed: (0.016 + (i % 4) * 0.005) * (i % 5 === 0 ? -0.85 : 1),
        radiusX,
        radiusY,
        orbitIndex,
        tilt,
        size: pSize,
        type: pType,
        baseOpacity: 0.65 + Math.random() * 0.35,
        twinkleSpeed: 0.045 + Math.random() * 0.065,
        twinkleOffset: Math.random() * Math.PI * 2,
        trail: []
      });
    }

    let animId: number;
    let tick = 0;
    let burstProgress = 0;
    let burstTriggered = false;

    const render = () => {
      ctx.clearRect(0, 0, size, size);
      tick++;

      const currentPhase = phaseRef.current;

      // Draw faint luminous golden orbital guidelines in idle state
      if (currentPhase === 'idle') {
        ctx.save();
        ctx.translate(centerX, centerY);

        // Ring 1 (Inner golden aura)
        ctx.save();
        ctx.rotate(-0.25);
        ctx.beginPath();
        ctx.ellipse(0, 0, 72, 60, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(230, 196, 119, 0.20)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();

        // Ring 2 (Outer subtle dashed golden path)
        ctx.save();
        ctx.rotate(0.18);
        ctx.beginPath();
        ctx.ellipse(0, 0, 94, 80, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.16)';
        ctx.lineWidth = 0.8;
        ctx.setLineDash([3, 6]);
        ctx.stroke();
        ctx.restore();

        ctx.restore();
      }

      // Handle Acceleration & Burst states
      if (currentPhase === 'accelerating' || currentPhase === 'bursting') {
        if (!burstTriggered && currentPhase === 'bursting') {
          burstTriggered = true;
          if (onBurstStart) onBurstStart();
        }

        if (currentPhase === 'bursting') {
          burstProgress = Math.min(1, burstProgress + 0.035);

          // Central golden radiant flash
          const flashAlpha = Math.max(0, 1 - burstProgress * 1.3);
          if (flashAlpha > 0) {
            const flashGrad = ctx.createRadialGradient(
              centerX,
              centerY,
              0,
              centerX,
              centerY,
              120 * (1 + burstProgress)
            );
            flashGrad.addColorStop(0, `rgba(255, 250, 220, ${0.9 * flashAlpha})`);
            flashGrad.addColorStop(0.3, `rgba(230, 196, 119, ${0.7 * flashAlpha})`);
            flashGrad.addColorStop(0.7, `rgba(212, 175, 55, ${0.35 * flashAlpha})`);
            flashGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');

            ctx.fillStyle = flashGrad;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 120 * (1 + burstProgress), 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Render each particle
      particles.forEach((p) => {
        let posX = 0;
        let posY = 0;
        let alpha = 1;

        if (currentPhase === 'idle') {
          p.angle += p.speed;

          const cosA = Math.cos(p.angle);
          const sinA = Math.sin(p.angle);
          const rawX = cosA * p.radiusX;
          const rawY = sinA * p.radiusY;

          const cosT = Math.cos(p.tilt);
          const sinT = Math.sin(p.tilt);
          posX = rawX * cosT - rawY * sinT + centerX;
          posY = rawX * sinT + rawY * cosT + centerY;

          const twinkle =
            Math.sin(tick * p.twinkleSpeed + p.twinkleOffset) * 0.35 + 0.65;
          alpha = p.baseOpacity * twinkle;
        } else if (currentPhase === 'accelerating') {
          // Speed up 4x and pull slightly inward (pre-burst suction effect)
          p.angle += p.speed * 4.2;
          const shrinkFactor = 0.92;

          const cosA = Math.cos(p.angle);
          const sinA = Math.sin(p.angle);
          const rawX = cosA * p.radiusX * shrinkFactor;
          const rawY = sinA * p.radiusY * shrinkFactor;

          const cosT = Math.cos(p.tilt);
          const sinT = Math.sin(p.tilt);
          posX = rawX * cosT - rawY * sinT + centerX;
          posY = rawX * sinT + rawY * cosT + centerY;

          alpha = Math.min(1, p.baseOpacity * 1.3);
        } else if (currentPhase === 'bursting') {
          // Initialize burst vector once
          if (p.burstVelocityX === undefined) {
            const angleFromCenter = Math.atan2(
              posY ? posY - centerY : Math.sin(p.angle),
              posX ? posX - centerX : Math.cos(p.angle)
            );
            const speed = 4 + Math.random() * 8;
            p.burstVelocityX = Math.cos(angleFromCenter) * speed;
            p.burstVelocityY = Math.sin(angleFromCenter) * speed;
            p.burstX = posX || centerX + Math.cos(p.angle) * p.radiusX;
            p.burstY = posY || centerY + Math.sin(p.angle) * p.radiusY;
          }

          p.burstX = (p.burstX || centerX) + (p.burstVelocityX || 0);
          p.burstY = (p.burstY || centerY) + (p.burstVelocityY || 0);
          posX = p.burstX;
          posY = p.burstY;

          alpha = Math.max(0, (1 - burstProgress * 1.2) * p.baseOpacity);
        }

        if (alpha <= 0.02) return;

        // Trail recording
        p.trail.push({ x: posX, y: posY, alpha });
        if (p.trail.length > 5) p.trail.shift();

        // Draw light trails for fast particles
        if (p.trail.length > 2 && (currentPhase === 'accelerating' || currentPhase === 'bursting' || p.type === 'star')) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let t = 1; t < p.trail.length; t++) {
            ctx.lineTo(p.trail[t].x, p.trail[t].y);
          }
          ctx.strokeStyle = `rgba(230, 196, 119, ${alpha * 0.45})`;
          ctx.lineWidth = p.size * 0.45;
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        // Particle Glow Halo
        ctx.save();
        ctx.translate(posX, posY);
        ctx.globalAlpha = alpha;

        const haloRadius = p.size * 2.6;
        const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, haloRadius);
        glowGrad.addColorStop(0, 'rgba(255, 245, 200, 0.95)');
        glowGrad.addColorStop(0.35, 'rgba(230, 196, 119, 0.65)');
        glowGrad.addColorStop(0.75, 'rgba(212, 175, 55, 0.25)');
        glowGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(0, 0, haloRadius, 0, Math.PI * 2);
        ctx.fill();

        // Particle shape drawing
        if (p.type === 'star') {
          // 4-point sparkling diamond star
          ctx.fillStyle = '#FFFDF0';
          ctx.beginPath();
          const s = p.size;
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.fill();

          // Small cross glare
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(0, -s * 1.3);
          ctx.lineTo(0, s * 1.3);
          ctx.moveTo(-s * 1.3, 0);
          ctx.lineTo(s * 1.3, 0);
          ctx.stroke();
        } else if (p.type === 'diamond') {
          // Luminous golden diamond
          ctx.fillStyle = '#FFE28A';
          ctx.beginPath();
          const d = p.size * 0.85;
          ctx.moveTo(0, -d);
          ctx.lineTo(d, 0);
          ctx.lineTo(0, d);
          ctx.lineTo(-d, 0);
          ctx.closePath();
          ctx.fill();
        } else {
          // Bright gold round pearl dot
          ctx.fillStyle = '#FFEB9C';
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.65, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      if (burstProgress < 1 || currentPhase !== 'complete') {
        animId = requestAnimationFrame(render);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [onBurstStart]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-25 pointer-events-none w-[320px] h-[320px]">
      <canvas
        ref={canvasRef}
        width={320}
        height={320}
        className="w-full h-full"
      />
    </div>
  );
};
