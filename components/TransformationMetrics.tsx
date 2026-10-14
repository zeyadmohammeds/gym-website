'use client';

import { motion } from 'framer-motion';
import type { TransformationMetric } from '@/data/transformationStories';
import { cn } from '@/lib/utils';

/** Animated metric grid for the active transformation story. */
export default function TransformationMetrics({
  metrics,
  className,
}: {
  metrics: TransformationMetric[];
  className?: string;
}) {
  return (
    <dl className={cn('grid grid-cols-2 gap-px bg-line', className)}>
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
          className="bg-ink p-3 sm:p-4"
        >
          <dt className="text-[10px] font-bold tracking-[0.22em] text-muted">{m.label}</dt>
          <dd className="mt-1 font-display text-xl text-volt sm:text-2xl">{m.value}</dd>
        </motion.div>
      ))}
    </dl>
  );
}
