'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TransformationIntro() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-pin-intro]',
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 1,
        },
      });
      tl.fromTo('[data-intro-line="1"]', { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 })
        .fromTo('[data-intro-line="2"]', { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 }, '-=0.6')
        .fromTo('[data-intro-line="3"]', { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 }, '-=0.6')
        .fromTo('[data-intro-sub]', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} aria-label="Transformation philosophy" className="relative bg-surface">
      <div data-pin-intro className="flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 py-24 md:px-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="mb-6 text-[11px] font-bold tracking-[0.32em] text-muted">02 / PROGRESS</p>
          <h2 className="font-display leading-[0.88]">
            <span className="block overflow-hidden"><span data-intro-line="1" className="block text-[15vw] text-paper md:text-[9rem]">PROGRESS</span></span>
            <span className="block overflow-hidden"><span data-intro-line="2" className="block text-[15vw] text-stroke md:text-[9rem]">IS NOT</span></span>
            <span className="block overflow-hidden"><span data-intro-line="3" className="block text-[15vw] text-volt md:text-[9rem]">ONE-SIZE-FITS-ALL.</span></span>
          </h2>
          <p data-intro-sub className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Different starting points. Different journeys. One goal: becoming stronger.
            <span className="mt-3 block text-[11px] tracking-[0.2em]">ILLUSTRATIVE DEMO STORIES — PROGRESS CELEBRATES CONSISTENCY, NOT APPEARANCE.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
