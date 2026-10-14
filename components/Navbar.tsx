'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracking (subtle accent treatment).
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open ]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
          scrolled || open ? 'border-line bg-ink/90 backdrop-blur-md' : 'border-transparent bg-transparent'
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            'mx-auto flex max-w-[1600px] items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-10',
            scrolled ? 'h-14 md:h-16' : 'h-16 md:h-[72px]'
          )}
        >
          <a href="#home" className="flex items-center gap-3" aria-label="Volt Athletics home">
            <span className="grid h-8 w-8 place-items-center bg-volt font-display text-lg text-ink">V</span>
            <span className="font-display text-xl tracking-wide">
              VOLT <span className="text-muted">ATHLETICS</span>
            </span>
          </a>

          <ul className="hidden items-center gap-6 text-[11px] font-bold tracking-[0.2em] xl:flex xl:gap-8 xl:text-[12px]">
            {navLinks.slice(1).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={cn(
                    'relative py-2 transition-colors hover:text-paper',
                    active === l.id ? 'text-volt' : 'text-muted'
                  )}
                >
                  {l.label}
                  {active === l.id && (
                    <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-volt" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group hidden min-h-[44px] items-center gap-2 bg-paper px-5 py-2.5 text-[12px] font-extrabold tracking-[0.18em] text-ink transition-colors hover:bg-volt sm:inline-flex"
            >
              START TRAINING
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              className="grid h-11 w-11 place-items-center border border-line text-paper xl:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
