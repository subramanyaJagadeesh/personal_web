import { useEffect, useMemo, useRef, useState } from 'react';

export type SkillCategoryDef = {
  category: string;
  skills: readonly string[];
};

type SkillsWordCloudProps = {
  categories: SkillCategoryDef[];
};

const ALL_KEY = 'all';

export default function SkillsWordCloud({ categories }: SkillsWordCloudProps) {
  const [filter, setFilter] = useState<string>(ALL_KEY);
  const skillsListRef = useRef<HTMLDivElement>(null);
  const skipFilterScrollOnMount = useRef(true);

  /** On narrow viewports, scroll the skills panel into view after changing filter (not on first paint). */
  useEffect(() => {
    if (skipFilterScrollOnMount.current) {
      skipFilterScrollOnMount.current = false;
      return;
    }
    if (typeof window === 'undefined' || !window.matchMedia('(max-width: 767px)').matches) return;
    const el = skillsListRef.current;
    if (!el) return;
    const raf = window.requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const fullyVisible = rect.top >= 0 && rect.bottom <= vh;
      if (fullyVisible) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => window.cancelAnimationFrame(raf);
  }, [filter]);

  /**
   * Full deduped list in category order (as in `categories`), then order within each category.
   * If a skill appears in more than one category, the first category wins placement.
   */
  const allSkills = useMemo(() => {
    const ordered: string[] = [];
    const seen = new Set<string>();
    for (const cat of categories) {
      for (const raw of cat.skills) {
        const w = raw.trim();
        if (!w || seen.has(w)) continue;
        seen.add(w);
        ordered.push(w);
      }
    }
    return ordered;
  }, [categories]);

  const highlightedSkillSet = useMemo(() => {
    if (filter === ALL_KEY) return null;
    const cat = categories.find((c) => c.category === filter);
    if (!cat) return new Set<string>();
    return new Set(cat.skills.map((w) => w.trim()).filter(Boolean));
  }, [categories, filter]);

  return (
    <div className="space-y-4">
      <div
        className="z-20 flex flex-wrap items-center justify-center gap-2 max-md:sticky max-md:top-16 max-md:-mx-1 max-md:rounded-xl max-md:border max-md:border-dark-200/80 max-md:bg-white/95 max-md:px-3 max-md:py-3 max-md:shadow-sm max-md:backdrop-blur-md max-md:dark:border-dark-700/70 max-md:dark:bg-dark-900/95 md:static md:mx-0 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none"
        role="group"
        aria-label="Filter skills by category"
      >
        <button
          type="button"
          onClick={() => setFilter(ALL_KEY)}
          aria-pressed={filter === ALL_KEY}
          className={`touch-manipulation rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors min-h-[44px] md:min-h-0 md:py-1.5 ${
            filter === ALL_KEY
              ? 'border-primary-500 bg-primary-500/15 text-primary-700 dark:border-primary-400 dark:bg-primary-400/15 dark:text-primary-300'
              : 'border-dark-200/90 text-dark-600 hover:border-primary-400/60 hover:text-primary-600 dark:border-dark-600 dark:text-dark-400 dark:hover:border-primary-500/50 dark:hover:text-primary-400'
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.category}
            type="button"
            onClick={() => setFilter(c.category)}
            aria-pressed={filter === c.category}
            className={`touch-manipulation rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors min-h-[44px] md:min-h-0 md:py-1.5 ${
              filter === c.category
                ? 'border-primary-500 bg-primary-500/15 text-primary-700 dark:border-primary-400 dark:bg-primary-400/15 dark:text-primary-300'
                : 'border-dark-200/90 text-dark-600 hover:border-primary-400/60 hover:text-primary-600 dark:border-dark-600 dark:text-dark-400 dark:hover:border-primary-500/50 dark:hover:text-primary-400'
            }`}
          >
            {c.category}
          </button>
        ))}
      </div>

      {allSkills.length > 0 ? (
        <div
          ref={skillsListRef}
          role="list"
          aria-label="Skills list"
          className="max-md:scroll-mt-24 w-full scroll-mt-0 rounded-2xl border border-dark-200/80 bg-white/30 p-4 shadow-sm backdrop-blur-sm dark:border-dark-700/70 dark:bg-dark-900/35 dark:shadow-none"
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-4 md:gap-x-8 md:gap-y-4">
            {allSkills.map((w) => {
              const inCategory =
                filter !== ALL_KEY && highlightedSkillSet !== null && highlightedSkillSet.has(w);
              const className =
                filter === ALL_KEY
                  ? 'text-center text-sm font-semibold leading-snug text-dark-900 dark:text-white md:text-base'
                  : inCategory
                    ? 'text-center text-sm font-semibold leading-snug text-primary-600 dark:text-primary-400 md:text-base'
                    : 'text-center text-sm font-semibold leading-snug text-dark-500 dark:text-dark-500 md:text-base';
              return (
                <span key={w} role="listitem" className={className}>
                  {w}
                </span>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
