'use client';

import { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { transformationStories } from '@/data/transformationStories';
import TransformationSlider from './TransformationSlider';
import MemberSelector from './MemberSelector';
import TransformationMetrics from './TransformationMetrics';
import { Eyebrow } from './Reveal';
import { Container } from './ui';

export default function TransformationSection() {
  const [activeId, setActiveId] = useState(transformationStories[0].id);
  const activeIndex = transformationStories.findIndex((s) => s.id === activeId);
  const story = transformationStories[activeIndex];

  const [emblaRef] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });

  const go = useCallback(
    (dir: 1 | -1) => {
      const next = (activeIndex + dir + transformationStories.length) % transformationStories.length;
      setActiveId(transformationStories[next].id);
    },
    [activeIndex]
  );

  return (
    <section id="transform" aria-label="Member transformation stories" className="border-t border-line bg-ink py-20 sm:py-24 md:py-36">
      <Container>
        <Eyebrow>03 / TRANSFORMATIONS</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.9] text-paper">
            PROGRESS
            <br />
            IS NOT <span className="text-volt">ONE-SIZE-FITS-ALL.</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Every journey starts somewhere. The goal isn&apos;t to become someone else — it&apos;s to become more
            capable than you were before. Drag the divider to compare. Fictional demo stories.
          </p>
        </div>

        {/* Desktop editorial layout */}
        <div className="mt-10 hidden gap-10 md:mt-12 lg:grid lg:grid-cols-[300px_1fr]">
          <nav aria-label="Member stories" className="sticky top-24 self-start">
            <MemberSelector stories={transformationStories} activeId={activeId} onSelect={setActiveId} />
            <div className="mt-6 flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous story"
                className="grid h-12 w-12 place-items-center border border-line text-paper transition-colors hover:border-volt hover:text-volt"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next story"
                className="grid h-12 flex-1 place-items-center gap-2 bg-paper font-bold tracking-[0.2em] text-ink transition-colors hover:bg-volt"
              >
                <span className="inline-flex items-center gap-2 text-[12px]">
                  NEXT STORY <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed tracking-wide text-muted">
              {String(activeIndex + 1).padStart(2, '0')} / {String(transformationStories.length).padStart(2, '0')} — DEMO METRICS FOR ILLUSTRATION ONLY.
            </p>
          </nav>

          <div>
            <AnimatePresence mode="wait">
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <TransformationSlider
                  key={story.id}
                  beforeImage={story.beforeImage}
                  afterImage={story.afterImage}
                  memberName={story.name}
                  beforeAlt={`${story.name} at the start of training`}
                  afterAlt={`${story.name} after ${story.duration} of consistent training`}
                />
                <div className="mt-6 grid gap-6 border border-line bg-surface p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.3em] text-volt">
                      {story.index} — {story.program.toUpperCase()} / {story.duration.toUpperCase()}
                    </p>
                    <h3 className="mt-2 font-display text-5xl text-paper">{story.name}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">“{story.quote}”</p>
                  </div>
                  <TransformationMetrics metrics={story.metrics} className="md:w-[380px]" />
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile / tablet carousel */}
        <div className="mt-8 sm:mt-10 lg:hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container gap-4">
              {transformationStories.map((s) => (
                <article
                  key={s.id}
                  className="embla__slide w-[86vw] max-w-[420px] shrink-0 border border-line bg-surface sm:w-[60vw]"
                  aria-label={`${s.name} story`}
                >
                  <div className="p-4">
                    <p className="text-[10px] font-bold tracking-[0.28em] text-volt">
                      {s.index} — {s.program.toUpperCase()}
                    </p>
                    <h3 className="font-display text-3xl text-paper">
                      {s.name} <span className="text-sm text-muted">/ {s.duration}</span>
                    </h3>
                  </div>
                  <TransformationSlider
                    beforeImage={s.beforeImage}
                    afterImage={s.afterImage}
                    memberName={s.name}
                    className="aspect-[4/5] sm:aspect-square"
                  />
                  <TransformationMetrics metrics={s.metrics} />
                  <p className="p-4 text-xs leading-relaxed text-muted">“{s.quote}”</p>
                </article>
              ))}
            </div>
          </div>
          <p className="mt-4 text-[11px] tracking-[0.2em] text-muted">SWIPE FOR MORE STORIES — DRAG EACH DIVIDER TO COMPARE.</p>
        </div>
      </Container>
    </section>
  );
}
