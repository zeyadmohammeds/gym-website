'use client';

import { ArrowUpRight, Check } from 'lucide-react';
import { membershipTiers } from '@/data/membership';
import { Eyebrow, Reveal } from './Reveal';
import { Container } from './ui';
import { cn } from '@/lib/utils';

export default function Membership() {
  return (
    <section id="membership" aria-label="Membership pricing" className="border-t border-line bg-ink py-20 sm:py-24 md:py-36">
      <Container>
        <Eyebrow>08 / MEMBERSHIP</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.9] text-paper">
              CHOOSE YOUR
              <br />
              <span className="text-stroke">PACE.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Demo/example prices in EGP. No contracts on Open. Cancel anytime. Talk to us and we&apos;ll match the plan to your goals.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-3 lg:gap-px lg:bg-line">
          {membershipTiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07} className={cn(t.featured ? 'bg-volt' : 'bg-surface')}>
              <article className={cn('flex h-full flex-col p-6 sm:p-8 md:p-10', t.featured ? 'text-ink' : 'text-paper')}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-3xl tracking-wide">{t.name}</h3>
                    <p className={cn('mt-1 text-[11px] font-bold tracking-[0.22em]', t.featured ? 'text-ink/70' : 'text-muted')}>
                      {t.tagline.toUpperCase()}
                    </p>
                  </div>
                  {t.featured && (
                    <span className="shrink-0 bg-ink px-3 py-1 text-[10px] font-extrabold tracking-[0.24em] text-volt">
                      MOST POPULAR
                    </span>
                  )}
                </div>
                <p className="mt-6 flex flex-wrap items-baseline gap-2">
                  <span className="font-display text-5xl sm:text-6xl">{t.price.split(' ')[0]}</span>
                  <span className={cn('text-xs font-bold tracking-[0.2em]', t.featured ? 'text-ink/70' : 'text-muted')}>
                    {t.price.split(' ')[1]} {t.per}
                  </span>
                </p>
                <ul className={cn('mt-8 space-y-3 border-t pt-6', t.featured ? 'border-ink/15' : 'border-line')}>
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-semibold">
                      <Check className={cn('h-4 w-4 shrink-0', t.featured ? 'text-ink' : 'text-volt')} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={cn(
                    'mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 px-6 py-4 text-[12px] font-extrabold tracking-[0.2em] transition-all hover:-translate-y-0.5',
                    t.featured ? 'bg-ink text-volt' : 'bg-paper text-ink hover:bg-volt'
                  )}
                >
                  CHOOSE {t.name} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-[11px] tracking-[0.18em] text-muted">ALL PRICES ARE DEMO EXAMPLES FOR DESIGN PURPOSES ONLY.</p>
      </Container>
    </section>
  );
}
