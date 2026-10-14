'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const stats = [
  { value: 2500, suffix: '+', label: 'MEMBERS' },
  { value: 15, suffix: '+', label: 'COACHES' },
  { value: 24, suffix: '/7', label: 'ACCESS' },
  { value: 8, suffix: '', label: 'YEARS' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600 });

  useEffect(() => {
    if (inView) mv.set(reduce ? value : value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    if (reduce) {
      if (ref.current) ref.current.textContent = `${value.toLocaleString()}${suffix}`;
      return;
    }
    const unsub = spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v).toLocaleString()}${suffix}`;
    });
    if (inView) mv.set(value);
    else mv.set(0);
    return unsub;
  }, [spring, value, suffix, inView, mv, reduce]);

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Club statistics" className="border-y border-line bg-ink">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-line px-5 sm:px-10 lg:grid-cols-4 lg:divide-x">
        {stats.map((s) => (
          <div key={s.label} className="border-line py-10 pr-6 md:py-14 lg:px-10">
            <p className="font-display text-6xl text-paper md:text-7xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] text-muted">
              <span className="h-[2px] w-6 bg-volt" aria-hidden="true" />
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <div className="overflow-hidden border-t border-line py-3" aria-hidden="true">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-display text-sm tracking-[0.3em] text-muted">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i}>STRENGTH • CONDITIONING • BOXING • MOBILITY • COMMUNITY •&nbsp;</span>
          ))}
        </div>
      </div>
    </section>
  );
}
