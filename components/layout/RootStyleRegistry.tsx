'use client';

import useStyledComponents from 'hooks/useStyledComponents';
import { useServerInsertedHTML } from 'next/navigation';

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] = useStyledComponents();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
