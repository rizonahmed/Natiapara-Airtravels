import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  rotation: number;
  rotationSpeed: number;
  type: 'circle' | 'emoji' | 'star';
  value?: string;
  gravity?: number;
}

const PALETTE = [
  '#3b82f6', // blue-500
  '#f59e0b', // amber-500
  '#10b981', // emerald-500
  '#ec4899', // pink-500
  '#8b5cf6', // purple-500
  '#ef4444', // red-500
  '#06b6d4', // cyan-500
];

const TRAVEL_EMOJIS = ['✈️', '🌍', '✨', '⭐', '🎈'];
const RELIGIOUS_EMOJIS = ['🕌', '🕋', '🌙', '⭐', '✨'];
const SOCIAL_EMOJIS = ['💬', '❤️', '🌟', '👍', '🔥'];

export const CoolMode: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas in high-definition
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Render loop
    let animationId: number;
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.gravity !== undefined) {
          p.vy += p.gravity;
        }
        p.vx *= 0.96; // air friction
        p.vy *= 0.96;
        p.alpha -= p.decay;
        p.rotation += p.rotationSpeed;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'emoji' && p.value) {
          ctx.font = `${p.size}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(p.value, 0, 0);
        } else if (p.type === 'star') {
          // Draw standard custom pixel star
          ctx.fillStyle = p.color;
          ctx.beginPath();
          for (let s = 0; s < 5; s++) {
            ctx.lineTo(Math.cos(((18 + s * 72) * Math.PI) / 180) * p.size,
                       Math.sin(((18 + s * 72) * Math.PI) / 180) * p.size);
            ctx.lineTo(Math.cos(((54 + s * 72) * Math.PI) / 180) * (p.size / 2),
                       Math.sin(((54 + s * 72) * Math.PI) / 180) * (p.size / 2));
          }
          ctx.closePath();
          ctx.fill();
        } else {
          // Circle particle
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    // Global document click interpreter to intercept interaction triggers
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Determine if clicked item is a button, link, toggle, or has cursor-pointer
      const clickableEl =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('select') ||
        target.closest('.cursor-pointer') ||
        (target.classList.contains('cursor-pointer') ? target : null) ||
        target.closest('[role="button"]');

      if (!clickableEl) return;

      const clickable = clickableEl as HTMLElement;

      // Classify the nature of the button to style the particles contextually
      const textContent = (clickable.textContent || '').toLowerCase();
      const idStr = (clickable.id || '').toLowerCase();
      const outerHtml = (clickable.outerHTML || '').toLowerCase();

      let themeType: 'social' | 'umrah' | 'travel' | 'general' = 'general';
      if (idStr.includes('whatsapp') || textContent.includes('whatsapp') || outerHtml.includes('whatsapp')) {
        themeType = 'social';
      } else if (
        idStr.includes('umrah') ||
        idStr.includes('hajj') ||
        textContent.includes('umrah') ||
        textContent.includes('harame') ||
        textContent.includes('হজ') ||
        textContent.includes('ওমরাহ') ||
        textContent.includes('ধর্মীয়')
      ) {
        themeType = 'umrah';
      } else if (
        idStr.includes('ticket') ||
        idStr.includes('flight') ||
        idStr.includes('heli') ||
        textContent.includes('ticket') ||
        textContent.includes('flight') ||
        textContent.includes('প্লেন') ||
        textContent.includes('টিকিট') ||
        textContent.includes('হেলিকপ্টার')
      ) {
        themeType = 'travel';
      }

      // Spawn burst of beautiful particles near coordinates
      const clickX = e.clientX;
      const clickY = e.clientY;
      const particleCount = typeof window !== 'undefined' && window.innerWidth < 640 ? 12 : 20;

      for (let j = 0; j < particleCount; j++) {
        const angle = Math.random() * Math.PI * 2;
        // Shoot particles outwards at random speed
        const speed = 2 + Math.random() * 7;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed - (1 + Math.random() * 2.5); // general slight upward trajectory boost
        
        const size = themeType === 'general' ? 4 + Math.random() * 7 : 14 + Math.random() * 12;
        const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        const decay = 0.015 + Math.random() * 0.02; // lifetime speed
        const rotation = Math.random() * Math.PI * 2;
        const rotationSpeed = (Math.random() - 0.5) * 0.15;
        
        let particleType: 'circle' | 'emoji' | 'star' = 'circle';
        let emojiValue = '';

        if (themeType === 'social') {
          particleType = 'emoji';
          emojiValue = SOCIAL_EMOJIS[Math.floor(Math.random() * SOCIAL_EMOJIS.length)];
        } else if (themeType === 'umrah') {
          particleType = 'emoji';
          emojiValue = RELIGIOUS_EMOJIS[Math.floor(Math.random() * RELIGIOUS_EMOJIS.length)];
        } else if (themeType === 'travel') {
          particleType = Math.random() > 0.45 ? 'emoji' : 'circle';
          emojiValue = TRAVEL_EMOJIS[Math.floor(Math.random() * TRAVEL_EMOJIS.length)];
        } else {
          // Standard burst mixes circles & fancy stars
          particleType = Math.random() > 0.75 ? 'star' : 'circle';
        }

        particlesRef.current.push({
          x: clickX,
          y: clickY,
          vx,
          vy,
          size,
          color,
          alpha: 1,
          decay,
          rotation,
          rotationSpeed,
          type: particleType,
          value: emojiValue,
          gravity: 0.08, // add subtle pleasant downward gravity for arching effect
        });
      }
    };

    document.addEventListener('mousedown', handleGlobalClick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousedown', handleGlobalClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[99999] w-full h-full"
      aria-hidden="true"
    />
  );
};

export default CoolMode;
