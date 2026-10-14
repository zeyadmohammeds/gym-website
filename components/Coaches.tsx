'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { coaches } from '@/data/coaches';
import CoachCard from './CoachCard';
import { Eyebrow, Reveal } from './Reveal';
import { Container } from './ui';

export default function Coaches() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });

  return (
    <section id="coaches" aria-label="Coaches" className="overflow-hidden border-t border-line bg-surface py-20 sm:py-24 md:py-36">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>06 / COACHES</Eyebrow>
            <Reveal>
              <h2 className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.9] text-paper">
                MEET THE TEAM
                <br />
                BEHIND <span className="text-volt">THE BAR.</span>
              </h2>
            </Reveal>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Scroll coaches left"
              className="grid h-12 w-12 place-items-center border border-line text-paper transition-colors hover:border-volt hover:text-volt"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Scroll coaches right"
              className="grid h-12 w-12 place-items-center border border-line text-paper transition-colors hover:border-volt hover:text-volt"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      <div className="embla mt-10 md:mt-12" ref={emblaRef}>
        <div className="embla__container gap-4 px-4 sm:gap-5 sm:px-6 lg:px-10">
          {coaches.map((c) => (
            <div key={c.name} className="embla__slide w-[74vw] max-w-[320px] shrink-0 sm:w-[42vw] md:w-[300px]">
              <CoachCard coach={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
