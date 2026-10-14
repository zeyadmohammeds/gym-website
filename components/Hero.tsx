'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HERO_IMAGE } from '@/data/content';

const lines = ['TRAIN', 'WITHOUT', 'LIMITS.'];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="home" aria-label="Hero" className="grain relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0" aria-hidden="true">
        <motion.div
          initial={{ scale: reduce ? 1 : 1.15, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        </motion.div>
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-10 pt-28 md:px-10 md:pb-14">
        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] text-paper/80"
        >
          <span className="inline-block h-[1px] w-12 bg-volt" aria-hidden="true" />
          VOLT ATHLETICS / 2026
        </motion.p>

        <h1 className="font-display leading-[0.86] tracking-tight">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block text-[19vw] sm:text-[15vw] lg:text-[10.5rem] xl:text-[12rem] ${
                  i === 2 ? 'text-volt' : 'text-paper'
                }`}
                initial={{ y: reduce ? 0 : '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay: 0.65 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="max-w-md text-base leading-relaxed text-paper/75 md:col-span-5 md:text-lg"
          >
            A modern athletic club built for people who want to move better, get stronger, and become more capable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.35 }}
            className="flex flex-wrap gap-3 md:col-span-7 md:justify-end"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-volt px-7 py-4 text-[13px] font-extrabold tracking-[0.18em] text-ink transition-transform hover:-translate-y-0.5"
            >
              START TRAINING
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-3 border border-paper/30 px-7 py-4 text-[13px] font-extrabold tracking-[0.18em] text-paper transition-colors hover:border-volt hover:text-volt"
            >
              EXPLORE PROGRAMS
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-10 flex items-center justify-between border-t border-paper/15 pt-5 text-[11px] font-bold tracking-[0.24em] text-paper/60"
        >
          <span className="hidden sm:inline">CAIRO — LONDON — DUBAI</span>
          <span className="hidden md:inline">SCROLL-DRIVEN STORY / 12 CHAPTERS</span>
          <span className="flex items-center gap-3">
            SCROLL
            <span className="relative grid h-10 w-6 place-items-start justify-center overflow-hidden rounded-full border border-paper/30 p-1.5" aria-hidden="true">
              <span className="animate-scroll-dot h-2 w-2 rounded-full bg-volt" />
            </span>
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
