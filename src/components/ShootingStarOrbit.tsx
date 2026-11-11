import React, { useEffect, useRef } from 'react';

interface ShootingStarOrbitProps {
  active: boolean;
  onOrbitComplete: () => void;
}

interface TrailPoint {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

interface BlastParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export const ShootingStarOrbit: React.FC<ShootingStarOrbitProps> = ({
  active,
  onOrbitComplete
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeRef = useRef<boolean>(active);
  activeRef.current = active;

  const onCompleteRef = useRef<() => void>(onOrbitComplete);
  onCompleteRef.current = onOrbitComplete;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 360;
    canvas.width = size;
    canvas.height = size;
    const centerX = size / 2;
    const centerY = size / 2;

    let animId: number;
    let startTime: number | null = null;
    const trail: TrailPoint[] = [];
    const shedSparks: { x: number; y: number; vx: number; vy: number; alpha: number; size: number }[] = [];
    const blastParticles: BlastParticle[] = [];

    // Duration of shooting star revolution: 850ms
    const REVOLUTION_DURATION = 850;
    // Duration of central blast: 800ms
    const BLAST_DURATION = 800;

    let completedTriggered = false;
    let blastStarted = false;

    const render = (now: number) => {
      ctx.clearRect(0, 0, size, size);

      if (!activeRef.current) {
        animId = requestAnimationFrame(render);
        return;
      }

      if (startTime === null) {
        startTime = now;
      }

      const elapsed = now - startTime;

      // -------------------------------------------------------------
      // STAGE 1: Single Shooting Star Revolving Around P&P (0 to 850ms)
      // -------------------------------------------------------------
      if (elapsed <= REVOLUTION_DURATION) {
        // Eased progress (accelerating slightly through the orbit)
        const t = Math.min(1, elapsed / REVOLUTION_DURATION);
        const easeT = t * t * 0.3 + t * 0.7; // slight acceleration

        // 1 full revolution (360 degrees = 2 * PI), starting from top (-PI/2)
        const totalAngle = Math.PI * 2 * 1.05;
        const currentAngle = -Math.PI / 2 + easeT * totalAngle;

        // Radius: orbits around the 110px wax medallion (radius ~68px to 72px)
        // Towards the end (t > 0.82), it spirals inwards into the center of P&P
        let currentRadius = 72;
        if (t > 0.82) {
          const diveProgress = (t - 0.82) / 0.18;
          currentRadius = 72 * (1 - diveProgress);
        }

        const headX = centerX + Math.cos(currentAngle) * currentRadius;
        const headY = centerY + Math.sin(currentAngle) * (currentRadius * 0.95);

        // Add to tail history
        trail.push({ x: headX, y: headY, alpha: 1, size: 4.5 });

        // Shed sparks along the trail
        if (Math.random() < 0.65) {
          shedSparks.push({
            x: headX + (Math.random() * 6 - 3),
            y: headY + (Math.random() * 6 - 3),
            vx: -Math.cos(currentAngle) * (0.8 + Math.random() * 1.5),
            vy: -Math.sin(currentAngle) * (0.8 + Math.random() * 1.5),
            alpha: 0.9,
            size: 1.2 + Math.random() * 1.6
          });
        }

        // Keep trail length to ~22 points for a long, glowing comet tail
        if (trail.length > 24) {
          trail.shift();
        }

        // Draw the luminous comet tail
        if (trail.length > 2) {
          for (let i = 1; i < trail.length; i++) {
            const p0 = trail[i - 1];
            const p1 = trail[i];
            const tailRatio = i / trail.length; // 0 (tail tip) to 1 (head)
            const strokeAlpha = tailRatio * tailRatio * 0.9;
            const strokeWidth = 1 + tailRatio * 3.8;

            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.strokeStyle = `rgba(230, 196, 119, ${strokeAlpha})`;
            ctx.lineWidth = strokeWidth;
            ctx.lineCap = 'round';
            ctx.stroke();

            // Inner intense white-gold core of tail
            if (tailRatio > 0.4) {
              ctx.beginPath();
              ctx.moveTo(p0.x, p0.y);
              ctx.lineTo(p1.x, p1.y);
              ctx.strokeStyle = `rgba(255, 252, 230, ${strokeAlpha * 0.85})`;
              ctx.lineWidth = strokeWidth * 0.45;
              ctx.stroke();
            }
          }
        }

        // Draw shedding sparks from comet tail
        for (let i = shedSparks.length - 1; i >= 0; i--) {
          const spark = shedSparks[i];
          spark.x += spark.vx;
          spark.y += spark.vy;
          spark.alpha *= 0.88;

          if (spark.alpha < 0.05) {
            shedSparks.splice(i, 1);
            continue;
          }

          ctx.fillStyle = `rgba(255, 230, 140, ${spark.alpha})`;
          ctx.beginPath();
          ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw the radiant Shooting Star Head
        ctx.save();
        ctx.translate(headX, headY);

        // Radiant golden halo
        const haloRadius = 14;
        const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, haloRadius);
        glowGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        glowGrad.addColorStop(0.3, 'rgba(255, 235, 160, 0.9)');
        glowGrad.addColorStop(0.7, 'rgba(212, 175, 55, 0.4)');
        glowGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(0, 0, haloRadius, 0, Math.PI * 2);
        ctx.fill();

        // 4-point Diamond Starburst
        const starSize = 7.5;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.moveTo(0, -starSize);
        ctx.quadraticCurveTo(0, 0, starSize, 0);
        ctx.quadraticCurveTo(0, 0, 0, starSize);
        ctx.quadraticCurveTo(0, 0, -starSize, 0);
        ctx.quadraticCurveTo(0, 0, 0, -starSize);
        ctx.fill();

        // Cross rays
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(0, -starSize * 1.5);
        ctx.lineTo(0, starSize * 1.5);
        ctx.moveTo(-starSize * 1.5, 0);
        ctx.lineTo(starSize * 1.5, 0);
        ctx.stroke();

        ctx.restore();
      }

      // -------------------------------------------------------------
      // STAGE 2: Central Blow-Up Explosion (starts right at 850ms)
      // -------------------------------------------------------------
      if (elapsed > REVOLUTION_DURATION) {
        if (!completedTriggered) {
          completedTriggered = true;
          onCompleteRef.current(); // Triggers the flap blow-up in parent!
        }

        const blastElapsed = elapsed - REVOLUTION_DURATION;
        const blastProgress = Math.min(1, blastElapsed / BLAST_DURATION);

        // Initialize blast particles once on impact
        if (!blastStarted) {
          blastStarted = true;
          const particleCount = 42;
          for (let i = 0; i < particleCount; i++) {
            const angle = (i / particleCount) * Math.PI * 2 + Math.random() * 0.3;
            const speed = 4.5 + Math.random() * 9.5;
            blastParticles.push({
              x: centerX,
              y: centerY,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              size: 2.2 + Math.random() * 3.5,
              alpha: 1,
              color: i % 2 === 0 ? '#FFF6D1' : '#E6C477'
            });
          }
        }

        // Draw central explosion light flash
        const flashAlpha = Math.max(0, 1 - blastProgress * 1.4);
        if (flashAlpha > 0) {
          const flashRadius = 30 + blastProgress * 140;
          const flashGrad = ctx.createRadialGradient(
            centerX,
            centerY,
            0,
            centerX,
            centerY,
            flashRadius
          );
          flashGrad.addColorStop(0, `rgba(255, 255, 255, ${0.95 * flashAlpha})`);
          flashGrad.addColorStop(0.3, `rgba(255, 235, 170, ${0.8 * flashAlpha})`);
          flashGrad.addColorStop(0.65, `rgba(212, 175, 55, ${0.45 * flashAlpha})`);
          flashGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');

          ctx.fillStyle = flashGrad;
          ctx.beginPath();
          ctx.arc(centerX, centerY, flashRadius, 0, Math.PI * 2);
          ctx.fill();

          // Expanding golden shockwave ring
          ctx.beginPath();
          ctx.arc(centerX, centerY, 20 + blastProgress * 150, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(230, 196, 119, ${flashAlpha * 0.7})`;
          ctx.lineWidth = Math.max(0.5, 3 * (1 - blastProgress));
          ctx.stroke();
        }

        // Render blast flying particles
        blastParticles.forEach((bp) => {
          bp.x += bp.vx;
          bp.y += bp.vy;
          bp.vx *= 0.95; // air friction
          bp.vy *= 0.95;
          bp.alpha = Math.max(0, 1 - blastProgress * 1.15);

          if (bp.alpha > 0.02) {
            ctx.save();
            ctx.translate(bp.x, bp.y);
            ctx.globalAlpha = bp.alpha;
            ctx.fillStyle = bp.color;

            // Small diamond star particle
            ctx.beginPath();
            const s = bp.size;
            ctx.moveTo(0, -s);
            ctx.lineTo(s, 0);
            ctx.lineTo(0, s);
            ctx.lineTo(-s, 0);
            ctx.closePath();
            ctx.fill();

            ctx.restore();
          }
        });
      }

      if (elapsed < REVOLUTION_DURATION + BLAST_DURATION + 200) {
        animId = requestAnimationFrame(render);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-35 pointer-events-none w-[360px] h-[360px]">
      <canvas
        ref={canvasRef}
        width={360}
        height={360}
        className="w-full h-full"
      />
    </div>
  );
};
