import { ArrowUp, Instagram, Youtube } from 'lucide-react';
import { navLinks, contactInfo } from '@/data/navigation';
import { Container } from './ui';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink" aria-label="Footer">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr] lg:grid-cols-[1fr_2fr_auto]">
          <div>
            <p className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center bg-volt font-display text-xl text-ink">V</span>
              <span className="font-display text-2xl">VOLT ATHLETICS</span>
            </p>
            <p className="mt-2 text-[11px] font-bold tracking-[0.3em] text-volt">THE DIGITAL ATHLETIC CLUB</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Strength, conditioning, boxing, and community — coached with intent.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
                { label: 'TikTok', href: 'https://tiktok.com', Icon: ArrowUp },
                { label: 'YouTube', href: 'https://youtube.com', Icon: Youtube },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Volt Athletics on ${label}`}
                  className="grid h-11 w-11 place-items-center border border-line text-[10px] font-extrabold tracking-widest text-paper transition-colors hover:border-volt hover:text-volt"
                >
                  {label === 'TikTok' ? 'TT' : <Icon className="h-4 w-4" aria-hidden="true" />}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className="mb-4 text-[11px] font-bold tracking-[0.28em] text-muted">EXPLORE</p>
              <ul className="space-y-2.5 text-paper/80">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="transition-colors hover:text-volt">
                      {l.label.charAt(0) + l.label.slice(1).toLowerCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[11px] font-bold tracking-[0.28em] text-muted">CONTACT</p>
              <ul className="space-y-2.5 text-paper/80">
                <li>
                  <a href={`mailto:${contactInfo.email}`} className="break-all transition-colors hover:text-volt">
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-volt">
                    {contactInfo.phone}
                  </a>
                </li>
                <li>{contactInfo.address}</li>
                <li>{contactInfo.hours}</li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[11px] font-bold tracking-[0.28em] text-muted">CLUB</p>
              <ul className="space-y-2.5 text-paper/80">
                <li>Strength / Boxing</li>
                <li>Functional / Engine</li>
                <li>Personal Coaching</li>
                <li className="pt-1 text-[11px] tracking-[0.18em] text-muted">DEMO SITE — ALL PEOPLE, METRICS & PRICES FICTIONAL.</li>
              </ul>
            </div>
          </nav>

          <a
            href="#home"
            className="group inline-flex items-center gap-3 self-start border border-line px-5 py-4 text-[12px] font-extrabold tracking-[0.22em] text-paper transition-colors hover:border-volt hover:text-volt md:justify-self-end"
            aria-label="Back to top"
          >
            BACK TO TOP
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" aria-hidden="true" />
          </a>
        </div>

        <p aria-hidden="true" className="mt-12 select-none overflow-hidden whitespace-nowrap font-display text-[13.5vw] leading-none text-paper/[0.06]">
          VOLT ATHLETICS
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[11px] tracking-[0.22em] text-muted">
          <span>© 2026 VOLT ATHLETICS — DEMO</span>
          <span>PRECISION. MOVEMENT. PROGRESS.</span>
        </div>
      </Container>
    </footer>
  );
}
