import { RefObject } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export function useParallaxTransform(
  ref: RefObject<HTMLElement>,
  range: [number, number] = [0, 300]
) {
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], range);

  return y;
}
