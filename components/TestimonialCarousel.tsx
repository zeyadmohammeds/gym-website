'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

/** Editorial testimonial carousel with prev/next + progress. */
export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(testimonials.length);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      <div className="embla" ref={emblaRef} role="region" aria-roledescription="carousel" aria-label="Member testimonials">
        <div className="embla__container gap-4 sm:gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${t.name}, ${t.program}`}
              className="embla__slide flex w-[86vw] max-w-[560px] shrink-0 flex-col justify-between border border-line bg-ink p-6 sm:w-[70vw] sm:p-8 lg:w-[46%]"
            >
              <div>
                <Quote className="h-7 w-7 text-volt" aria-hidden="true" />
                <blockquote className="mt-5 font-display text-[clamp(1.4rem,3.5vw,2rem)] leading-[1.05] tracking-wide text-paper">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center justify-between border-t border-line pt-5">
                <div>
                  <p className="font-display text-xl tracking-wide text-paper">{t.name}</p>
                  <p className="mt-1 text-[11px] font-bold tracking-[0.24em] text-muted">
                    {t.program.toUpperCase()} — {t.duration}
                  </p>
                </div>
                <span aria-hidden="true" className="grid h-10 w-10 place-items-center bg-volt font-display text-lg text-ink">
                  {t.name.charAt(0)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={scrollPrev}
          aria-label="Previous testimonial"
          className="grid h-12 w-12 shrink-0 place-items-center border border-line text-paper transition-colors hover:border-volt hover:text-volt"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next testimonial"
          className="grid h-12 w-12 shrink-0 place-items-center border border-line text-paper transition-colors hover:border-volt hover:text-volt"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
        <div className="h-[3px] flex-1 bg-line" role="progressbar" aria-valuenow={index + 1} aria-valuemin={1} aria-valuemax={count} aria-label="Testimonial progress">
          <div className="h-full bg-volt transition-all duration-300" style={{ width: `${((index + 1) / count) * 100}%` }} />
        </div>
        <span className="shrink-0 font-display text-sm tracking-widest text-muted">
          {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
