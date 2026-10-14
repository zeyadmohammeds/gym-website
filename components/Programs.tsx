'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { programs } from '@/data/programs';
import ProgramCard from './ProgramCard';
import { Eyebrow, Reveal } from './Reveal';
import { Container } from './ui';

export default function Programs() {
  const [active, setActive] = useState(programs[0].id);
  const current = programs.find((p) => p.id === active) ?? programs[0];

  return (
    <section id="programs" aria-label="Training programs" className="bg-ink py-20 sm:py-24 md:py-36">
      <Container>
        <Eyebrow>01 / PROGRAMS</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.9] text-paper">
              TRAIN WITH
              <br />
              <span className="text-stroke">PURPOSE.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Five disciplines. One system. Select a track to preview — built for beginners and competitors alike.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-2 lg:gap-0">
          <ul className="divide-y divide-line border-y border-line" role="list">
            {programs.map((p) => (
              <li key={p.id}>
                <ProgramCard program={p} active={p.id === active} onActivate={setActive} />
              </li>
            ))}
          </ul>

          {/* Desktop preview */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="sticky top-24 ml-10 h-[560px] overflow-hidden border border-line bg-surface">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image src={current.image} alt="" fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-7">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.3em] text-volt">
                    {current.index} / {current.category.toUpperCase()}
                  </p>
                  <p className="mt-1 font-display text-4xl text-paper">{current.title}</p>
                </div>
                <span className="grid h-12 w-12 place-items-center bg-volt text-ink">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <div
                className="absolute left-0 top-0 h-1 bg-volt transition-all"
                style={{ width: `${((programs.indexOf(current) + 1) / programs.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Mobile / tablet cards */}
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 lg:hidden" role="list" aria-label="Program previews">
          {programs.map((p) => (
            <article key={p.id} className="relative h-72 w-60 shrink-0 overflow-hidden border border-line sm:w-64" role="listitem">
              <Image src={p.image} alt={p.title} fill className="object-cover" sizes="260px" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <p className="text-[10px] font-bold tracking-[0.28em] text-volt">
                  {p.index} — {p.category.toUpperCase()}
                </p>
                <h3 className="font-display text-2xl text-paper">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
