import TestimonialCarousel from './TestimonialCarousel';
import { Eyebrow, Reveal } from './Reveal';
import { Container } from './ui';

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="Member testimonials" className="border-t border-line bg-ink py-20 sm:py-24 md:py-36">
      <Container>
        <Eyebrow>07 / TESTIMONIALS</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.9] text-paper">
              REAL PEOPLE.
              <br />
              <span className="text-volt">REAL PROGRESS.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Fictional demo testimonials. Swipe through — consistency stories from across the club.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="mt-10 md:mt-12">
          <TestimonialCarousel />
        </Reveal>
      </Container>
    </section>
  );
}
