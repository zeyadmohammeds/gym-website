'use client';

import { Dumbbell, Flame, HeartPulse, Users } from 'lucide-react';
import { Eyebrow, Reveal } from './Reveal';

const journeys = [
  {
    side: 'STARTING POINT A',
    icon: Dumbbell,
    points: ['2 sessions / week', 'Coach-guided strength base', 'Mobility + walking habit'],
  },
  {
    side: 'STARTING POINT B',
    icon: Flame,
    points: ['3 sessions / week', 'Low-impact engine building', 'Nutrition + sleep coaching'],
  },
];

export default function Journey() {
  return (
    <section aria-label="Two journeys, one destination" className="border-t border-line bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Eyebrow>04 / TWO JOURNEYS</Eyebrow>
        <Reveal>
          <h2 className="max-w-4xl font-display text-6xl leading-[0.9] md:text-8xl">
            DIFFERENT PATHS.
            <br />
            <span className="text-volt">STRONGER TOGETHER.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {journeys.map((j) => (
            <Reveal key={j.side} className="bg-surface">
              <article className="flex h-full flex-col p-8 md:p-12">
                <j.icon className="h-8 w-8 text-volt" aria-hidden="true" />
                <h3 className="mt-6 font-display text-4xl text-paper">{j.side}</h3>
                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {j.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm text-muted">
                      <span className="h-1.5 w-1.5 bg-volt" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-2 text-[11px] font-bold tracking-[0.28em] text-paper/60">
                  <HeartPulse className="h-4 w-4 text-volt" aria-hidden="true" />
                  PROGRESS LOOKS DIFFERENT — AND THAT&apos;S THE POINT
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-px flex flex-col items-center gap-4 bg-volt px-8 py-10 text-center text-ink md:py-14">
            <Users className="h-8 w-8" aria-hidden="true" />
            <p className="font-display text-5xl leading-none md:text-7xl">STRONGER TOGETHER.</p>
            <p className="max-w-xl text-sm font-bold leading-relaxed">
              Both paths converge in the same community — coached, measured, and celebrated together.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
