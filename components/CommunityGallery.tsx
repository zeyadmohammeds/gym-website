'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { communityImages } from '@/data/content';
import { Eyebrow } from './Reveal';

gsap.registerPlugin(ScrollTrigger);

export default function CommunityGallery() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.to('[data-wall-track]', {
        xPercent: -22,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-wall]',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} aria-label="Community gallery" className="overflow-hidden border-t border-line bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Eyebrow>09 / COMMUNITY</Eyebrow>
        <h2 className="font-display text-6xl leading-[0.9] md:text-8xl">
          BUILT BY <span className="text-volt">PEOPLE.</span>
        </h2>
      </div>
      <div data-wall className="mt-12">
        <div data-wall-track className="flex w-max gap-4 px-5 md:px-10">
          {communityImages.map((src, i) => (
            <div
              key={src + i}
              className={`relative shrink-0 overflow-hidden border border-line ${
                i % 3 === 0 ? 'h-64 w-80 md:h-80 md:w-[480px]' : i % 3 === 1 ? 'h-64 w-56 md:h-80 md:w-72' : 'h-64 w-72 md:h-80 md:w-96'
              }`}
            >
              <Image src={src} alt={`Volt Athletics community training ${i + 1}`} fill loading="lazy" sizes="400px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-[1400px] px-5 text-[11px] tracking-[0.24em] text-muted md:px-10">
        TRAINING — BOXING — GROUP CLASSES — COACHES — 2,500 STRONG
      </p>
    </section>
  );
}
