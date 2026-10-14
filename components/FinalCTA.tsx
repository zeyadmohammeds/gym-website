'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FINAL_IMAGE } from '@/data/content';
import { Reveal } from './Reveal';

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 1.18, 1]);

  return (
    <section ref={ref} aria-label="Join Volt" className="grain relative overflow-hidden border-t border-line">
      <motion.div style={{ scale }} className="absolute inset-0" aria-hidden="true">
        <Image src={FINAL_IMAGE} alt="" fill className="object-cover" sizes="100vw" loading="lazy" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1400px] flex-col items-start justify-center px-5 py-28 md:px-10">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] text-paper/70">
            <span className="inline-block h-[1px] w-12 bg-volt" aria-hidden="true" />
            10 / YOUR TURN
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display leading-[0.88] text-paper">
            <span className="block text-[14vw] md:text-[8.5rem]">YOUR STRONGER</span>
            <span className="block text-[14vw] text-volt md:text-[8.5rem]">SELF STARTS HERE.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="group inline-flex items-center gap-3 bg-volt px-8 py-4 text-[13px] font-extrabold tracking-[0.18em] text-ink hover:-translate-y-0.5">
              JOIN VOLT
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#transform" className="inline-flex items-center border border-paper/30 px-8 py-4 text-[13px] font-extrabold tracking-[0.18em] text-paper hover:border-volt hover:text-volt">
              REVISIT STORIES
            </a>
          </div>
        </Reveal>
        <p className="mt-8 text-[11px] tracking-[0.24em] text-paper/60">FIRST WEEK COACHED — NO EXPERIENCE NEEDED.</p>
      </div>
    </section>
  );
}
