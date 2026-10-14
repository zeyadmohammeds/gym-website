import type { TransformationStory } from '@/data/transformationStories';
import { cn } from '@/lib/utils';

type Props = {
  stories: TransformationStory[];
  activeId: string;
  onSelect: (id: string) => void;
};

/** Desktop editorial member selector. */
export default function MemberSelector({ stories, activeId, onSelect }: Props) {
  return (
    <ol className="divide-y divide-line border-y border-line">
      {stories.map((s) => {
        const isActive = s.id === activeId;
        return (
          <li key={s.id}>
            <button
              onClick={() => onSelect(s.id)}
              aria-current={isActive ? 'true' : undefined}
              className={cn(
                'group flex min-h-[64px] w-full items-center gap-4 py-4 text-left transition-colors md:py-5',
                isActive ? 'text-paper' : 'text-muted hover:text-paper'
              )}
            >
              <span className={cn('font-display text-sm', isActive && 'text-volt')}>{s.index}</span>
              <span className="flex-1">
                <span
                  className={cn(
                    'block font-display text-2xl tracking-wide transition-transform md:text-3xl',
                    isActive && 'translate-x-1'
                  )}
                >
                  {s.name}
                </span>
                <span className="mt-1 block text-[11px] font-bold tracking-[0.22em]">
                  {s.program.toUpperCase()} — {s.duration.toUpperCase()}
                </span>
              </span>
              <span
                aria-hidden="true"
                className={cn('h-8 w-[3px]', isActive ? 'bg-volt' : 'bg-line group-hover:bg-muted')}
              />
            </button>
          </li>
        );
      })}
    </ol>
  );
}
