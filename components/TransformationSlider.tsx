'use client';

import { useCallback, useEffect, useId, useState } from 'react';
import dynamic from 'next/dynamic';
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';
import 'react-before-after-slider-component/dist/build.css';

// Library is client-only; load dynamically to stay SSR-safe.
const ReactBeforeSlider = dynamic(
  () => import('react-before-after-slider-component'),
  { ssr: false, loading: () => <div className="grid h-full w-full animate-pulse place-items-center bg-surface text-muted">Loading comparison…</div> }
);

type Props = {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPercent?: number;
  memberName?: string;
  className?: string;
  onPercentChange?: (pct: number) => void;
};

/**
 * Reusable wrapper around `react-before-after-slider-component`.
 * The rest of the site depends only on this component's props.
 */
export default function TransformationSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before training',
  afterAlt = 'After training',
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  initialPercent = 50,
  memberName = 'Member',
  className = '',
  onPercentChange,
}: Props) {
  const [percent, setPercent] = useState(initialPercent);
  const sliderId = useId();
  const rangeId = `${sliderId}-range`;

  // Reset when story changes.
  useEffect(() => {
    setPercent(initialPercent);
  }, [beforeImage, afterImage, initialPercent]);

  const handleChange = useCallback(
    (next: number) => {
      const clamped = Math.min(100, Math.max(0, Math.round(next)));
      setPercent(clamped);
      onPercentChange?.(clamped);
    },
    [onPercentChange]
  );

  const nudge = (delta: number) => handleChange(percent + delta);

  return (
    <figure
      className={`volt-compare group relative aspect-[4/5] w-full select-none sm:aspect-[16/10] lg:aspect-[16/9] ${className}`}
      aria-label={`${memberName} before and after comparison. Use the slider to compare.`}
    >
      <ReactBeforeSlider
        firstImage={{ imageUrl: beforeImage, alt: beforeAlt }}
        secondImage={{ imageUrl: afterImage, alt: afterAlt }}
        currentPercentPosition={percent}
        onChangePercentPosition={handleChange}
        delimiterColor="#C7FF3D"
      />

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 z-10 bg-ink/85 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.24em] text-paper">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 z-10 bg-volt px-3 py-1.5 text-[10px] font-extrabold tracking-[0.24em] text-ink">
        {afterLabel}
      </span>

      {/* Progress + keyboard controls */}
      <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-3 bg-gradient-to-t from-ink/95 to-transparent p-3 pt-8 sm:p-4 sm:pt-10">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => nudge(-10)}
            aria-label="Show more of before image"
            className="grid h-9 w-9 place-items-center border border-paper/25 bg-ink/70 text-paper transition-colors hover:border-volt hover:text-volt"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => nudge(10)}
            aria-label="Show more of after image"
            className="grid h-9 w-9 place-items-center border border-paper/25 bg-ink/70 text-paper transition-colors hover:border-volt hover:text-volt"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <span className="ml-1 hidden items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-paper/70 sm:flex" aria-hidden="true">
            <MoveHorizontal className="h-4 w-4 text-volt" /> DRAG
          </span>
        </div>

        <span className="bg-ink/70 px-3 py-1.5 font-display text-sm tracking-widest text-volt" role="status" aria-live="polite">
          {percent}% AFTER
        </span>
      </figcaption>

      {/* Accessible range control (visually integrated, keyboard usable) */}
      <label htmlFor={rangeId} className="sr-only">
        Reveal after image for {memberName}, {percent} percent
      </label>
      <input
        id={rangeId}
        type="range"
        min={0}
        max={100}
        value={percent}
        onChange={(e) => handleChange(Number(e.target.value))}
        className="absolute inset-x-3 bottom-16 z-20 h-1 w-[calc(100%-1.5rem)] cursor-ew-resize appearance-none bg-transparent opacity-0 transition-opacity focus:opacity-100 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-volt"
      />
    </figure>
  );
}
