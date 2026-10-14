'use client';

import Image from 'next/image';
import { BrainCircuit, Dumbbell, Trophy, Users } from 'lucide-react';
import { Eyebrow, Reveal } from './Reveal';

const blocks = [
  {
    n: '01',
    title: 'EXPERT COACHES',
    text: 'Certified coaches who program, cue, and correct — in person and in the app.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    n: '02',
    title: 'SMART TRAINING',
    text: 'Periodized plans that adapt to recovery, travel, and real life.',
    icon: BrainCircuit,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
  },
  {
    n: '03',
    title: 'PREMIUM EQUIPMENT',
    text: 'Eleiko bars, calibrated plates, boxing bags, sled track, and recovery zone.',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
  },
  {
    n: '04',
    title: 'REAL COMMUNITY',
    text: 'Engine club Saturdays, fight nights, and 2,500 members who know your name.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function WhyVolt() {
  return (
    <section aria-label="Why Volt" className="border-t border-line bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Eyebrow>05 / WHY VOLT</Eyebrow>
        <Reveal>
          <h2 className="font-display text-7xl leading-[0.88] md:text-[9rem]">
            MORE THAN
            <br />
            A <span className="text-stroke">GYM.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal key={b.n} delay={i * 0.06} className="bg-ink">
              <article className="group relative overflow-hidden">
                <div className="relative h-64 overflow-hidden md:h-80">
                  <Image
                    src={b.image}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/45 transition-colors group-hover:bg-ink/25" />
                  <span className="absolute left-5 top-5 bg-ink/80 px-3 py-1 font-display text-sm tracking-widest text-volt">{b.n}</span>
                </div>
                <div className="flex items-start gap-4 p-6 md:p-8">
                  <b.icon className="mt-1 h-6 w-6 shrink-0 text-volt" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-3xl tracking-wide text-paper transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
                      {b.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{b.text}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
