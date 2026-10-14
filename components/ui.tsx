import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Eyebrow } from './Reveal';

/** Reusable responsive container: mobile-first, capped for ultrawide. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16', className)}>
      {children}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'volt' | 'paper' | 'outline' | 'dark';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  ariaLabel?: string;
};

const buttonStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  volt: 'bg-volt text-ink hover:-translate-y-0.5',
  paper: 'bg-paper text-ink hover:bg-volt hover:-translate-y-0.5',
  outline: 'border border-paper/30 text-paper hover:border-volt hover:text-volt',
  dark: 'bg-ink text-volt hover:-translate-y-0.5',
};

/** Shared button with consistent touch target + micro-interaction. */
export function VoltButton({ children, href, variant = 'volt', className, onClick, type = 'button', ariaLabel }: ButtonProps) {
  const cls = cn(
    'inline-flex min-h-[48px] items-center justify-center gap-2 px-6 py-3.5 text-[12px] font-extrabold tracking-[0.18em] transition-all sm:px-7 sm:py-4',
    buttonStyles[variant],
    className
  );
  if (href) {
    return (
      <a href={href} onClick={onClick} aria-label={ariaLabel} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={cls}>
      {children}
    </button>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  description,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  description?: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <Eyebrow>
          {index} / {eyebrow}
        </Eyebrow>
        <h2 className="font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.9] text-paper">
          {title}
          {accent ? (
            <>
              <br />
              {accent}
            </>
          ) : null}
        </h2>
      </div>
      {description ? <p className="max-w-sm text-sm leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}
