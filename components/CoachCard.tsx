'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Coach } from '@/data/coaches';

export default function CoachCard({ coach }: { coach: Coach }) {
  return (
    <article className="group flex h-full flex-col border border-line bg-ink">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={coach.image}
          alt={`Portrait of coach ${coach.name}`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 72vw, 300px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <span className="absolute right-4 top-4 bg-volt px-2 py-1 text-[10px] font-extrabold tracking-[0.2em] text-ink opacity-0 transition-opacity group-hover:opacity-100">
          {coach.experience}
        </span>
      </div>
      <div className="flex flex-1 items-start justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-2xl tracking-wide text-paper transition-transform duration-300 group-hover:translate-x-1">
            {coach.name}
          </h3>
          <p className="mt-1 text-[11px] font-bold tracking-[0.22em] text-volt">{coach.specialty.toUpperCase()}</p>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">{coach.bio}</p>
        </div>
        <span
          aria-hidden="true"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-muted transition-all group-hover:border-volt group-hover:bg-volt group-hover:text-ink"
        >
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
