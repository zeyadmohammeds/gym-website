'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { navLinks } from '@/data/navigation';

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 top-16 z-40 overflow-y-auto bg-ink/98 backdrop-blur-md md:top-[72px] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: reduce ? 0 : 0.06 } } }}
            className="space-y-1 px-5 py-6 sm:px-6"
          >
            {navLinks.map((l) => (
              <motion.li
                key={l.href}
                variants={{
                  hidden: { opacity: 0, y: reduce ? 0 : 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <a
                  href={l.href}
                  onClick={onClose}
                  className="block border-b border-line py-3 font-display text-[clamp(2rem,9vw,3rem)] leading-none tracking-wide text-paper transition-colors hover:text-volt"
                >
                  {l.label}
                </a>
              </motion.li>
            ))}
            <motion.li
              variants={{
                hidden: { opacity: 0, y: reduce ? 0 : 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="pt-5"
            >
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex min-h-[48px] items-center gap-2 bg-volt px-7 py-3.5 text-sm font-extrabold tracking-[0.18em] text-ink"
              >
                START TRAINING <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
