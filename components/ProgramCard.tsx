'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Program } from '@/data/programs';
import { cn } from '@/lib/utils';

type Props = {
  program: Program;
  active: boolean;
  onActivate: (id: string) => void;
};

/** Single interactive program row — usable without hover (tap/click + focus). */
export default function ProgramCard({ program: p, active, onActivate }: Props) {
  return (
    <button
      onMouseEnter={() => onActivate(p.id)}
      onFocus={() => onActivate(p.id)}
      onClick={() => onActivate(p.id)}
      aria-expanded={active}
      className="group flex w-full items-center gap-4 py-5 text-left sm:gap-5 md:gap-8 md:py-7"
    >
      <span className={cn('font-display text-sm tracking-widest', active ? 'text-volt' : 'text-muted')}>{p.index}</span>
      <span className="relative h-14 w-14 shrink-0 overflow-hidden border border-line sm:h-16 sm:w-20">
        <Image src={p.image} alt="" fill sizes="80px" loading="lazy" className="object-cover" />
      </span>
      <span className="min-w-0 flex-1">
        <span
          className={cn(
            'block truncate font-display text-[clamp(1.6rem,6vw,3.75rem)] tracking-wide transition-all duration-300',
            active ? 'translate-x-1 text-paper sm:translate-x-2' : 'text-paper/70 group-hover:text-paper'
          )}
        >
          {p.title}
        </span>
        <span
          className={cn(
            'grid transition-all duration-300',
            active ? 'mt-2 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          )}
        >
          <span className="overflow-hidden">
            <span className="block max-w-md text-sm leading-relaxed text-muted">
              <span className="mb-1 block text-[11px] font-bold tracking-[0.28em] text-volt">{p.category.toUpperCase()}</span>
              {p.description}
            </span>
          </span>
        </span>
      </span>
      <span
        className={cn(
          'grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 sm:h-11 sm:w-11',
          active ? 'border-volt bg-volt text-ink' : 'border-line text-muted'
        )}
      >
        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
      </span>
    </button>
  );
}
