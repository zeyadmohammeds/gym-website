'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eyebrow } from './Reveal';

gsap.registerPlugin(ScrollTrigger);

function AthleteFigure({ variant, className = '' }: { variant: 'A' | 'B'; className?: string }) {
  const slim = variant === 'A';
  return (
    <svg viewBox="0 0 200 340" className={className} role="img" aria-label={slim ? 'Illustrated athlete starting slim' : 'Illustrated athlete starting larger'}>
      {/* motion lines */}
      <g data-lines opacity={0} stroke="#C7FF3D" strokeWidth={2}>
        <line x1={18} y1={120} x2={44} y2={120} />
        <line x1={12} y1={160} x2={44} y2={160} />
        <line x1={18} y1={200} x2={44} y2={200} />
        <line x1={156} y1={120} x2={182} y2={120} />
        <line x1={156} y1={160} x2={188} y2={160} />
        <line x1={156} y1={200} x2={182} y2={200} />
      </g>
      {/* body */}
      <g data-body fill="none" stroke="#F5F5F5" strokeWidth={5} strokeLinecap="round">
        <circle data-head cx={100} cy={52} r={26} />
        <path data-torso d={slim ? 'M100 82 L100 200' : 'M100 82 C 84 120, 116 160, 100 200'} />
        <path data-arm-l d="M100 110 L66 170" />
        <path data-arm-r d="M100 110 L134 170" />
        <path data-leg-l d="M100 200 L78 300" />
        <path data-leg-r d="M100 200 L122 300" />
      </g>
      {/* power ring */}
      <circle data-ring cx={100} cy={170} r={86} fill="none" stroke="#C7FF3D" strokeWidth={2} strokeDasharray="6 10" opacity={0} />
      {/* torso width cue */}
      <ellipse data-core cx={100} cy={150} rx={slim ? 16 : 34} ry={44} fill="none" stroke="#8A8A8A" strokeWidth={1.5} strokeDasharray="4 6" />
    </svg>
  );
}

const stages = ['START', 'TRAIN', 'ADAPT', 'PROGRESS'];

export default function FitnessTransformation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-transform-pin]',
          start: 'top top',
          end: '+=260%',
          pin: true,
          scrub: 1,
        },
      });
      // Stage text
      stages.forEach((_, i) => {
        tl.fromTo(`[data-stage="${i}"]`, { opacity: 0.15, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.6 }, i);
        if (i > 0) tl.to(`[data-stage="${i - 1}"]`, { opacity: 0.25, duration: 0.4 }, i);
      });
      // Figures energize
      tl.to('[data-lines]', { opacity: 1, duration: 0.8 }, 0.8);
      tl.to('[data-ring]', { opacity: 0.9, rotation: 90, transformOrigin: 'center', duration: 1.2 }, 1.4);
      tl.to('[data-body]', { stroke: '#C7FF3D', duration: 0.8 }, 2);
      tl.fromTo('[data-metric]', { opacity: 0, y: 14 }, { opacity: 1, y: 0, stagger: 0.25, duration: 0.6 }, 2.2);
      tl.fromTo('[data-progress-bar]', { scaleX: 0 }, { scaleX: 1, duration: 3, ease: 'none' }, 0);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="transformation" aria-label="Interactive transformation timeline" className="border-t border-line bg-surface">
      <div data-transform-pin className="flex min-h-[100svh] flex-col justify-center overflow-hidden py-20">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
          <Eyebrow>04 / METHOD</Eyebrow>
          <h2 className="font-display text-6xl leading-[0.9] md:text-8xl">
            START <span className="text-stroke">ANYWHERE.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Two illustrated athletes. Different starting points — neither better, neither worse. Scroll to move both through the same proven process.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="border border-line bg-ink p-6 text-center">
              <p className="text-[11px] font-bold tracking-[0.3em] text-muted">PERSON A — SLIM START</p>
              <AthleteFigure variant="A" className="mx-auto mt-4 h-64 md:h-80" />
              <p className="mt-2 text-[11px] tracking-[0.2em] text-muted">EVERY BODY STARTS SOMEWHERE</p>
            </div>

            <ol className="flex flex-row justify-center gap-2 md:flex-col" aria-label="Training stages">
              {stages.map((s, i) => (
                <li
                  key={s}
                  data-stage={i}
                  className="border border-line bg-ink px-4 py-3 text-center font-display text-lg tracking-widest text-paper md:w-40"
                >
                  {s}
                  <span className="block text-[10px] tracking-[0.3em] text-volt">0{i + 1}</span>
                </li>
              ))}
            </ol>

            <div className="border border-line bg-ink p-6 text-center">
              <p className="text-[11px] font-bold tracking-[0.3em] text-muted">PERSON B — LARGER START</p>
              <AthleteFigure variant="B" className="mx-auto mt-4 h-64 md:h-80" />
              <p className="mt-2 text-[11px] tracking-[0.2em] text-muted">SAME PROCESS, PERSONAL PATH</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="h-[3px] w-full bg-line" aria-hidden="true">
              <div data-progress-bar className="h-full w-full origin-left bg-volt" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
              {['STRENGTH', 'ENDURANCE', 'MOBILITY', 'CONSISTENCY'].map((m) => (
                <div key={m} data-metric className="bg-ink px-4 py-3 text-center text-[11px] font-bold tracking-[0.28em] text-paper">
                  <span className="text-volt">+ </span>{m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
