'use client';

import { useEffect } from 'react';

type Props = {
  targetId: string;
};

export function LuxuryThemeObserver({ targetId }: Props) {
  useEffect(() => {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const root = document.documentElement;
    const observer = new IntersectionObserver(
      ([entry]) => {
        root.setAttribute('data-theme', entry.isIntersecting ? 'luxury' : 'default');
      },
      {
        threshold: 0.35
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      root.setAttribute('data-theme', 'default');
    };
  }, [targetId]);

  return null;
}
