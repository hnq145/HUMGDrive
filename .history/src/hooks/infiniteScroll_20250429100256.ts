import { useCallback, useEffect, useRef, useState } from "react";

// TODO: Fix anys
export const useInfiniteScroll = () => {
  const [reachedIntersect, setReachedIntersect] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef();

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setReachedIntersect(true);
      } else if (reachedIntersect) {
        setReachedIntersect(false);
      }
    },
    [reachedIntersect]
  );

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: undefined,
      threshold: 0.1,
    });
    const currentSentinel = sentinelRef.current;
    if (currentSentinel) {
      observer.current.observe(currentSentinel);
    }

    return () => {
      if (currentSentinel) {
        observer.current?.unobserve(currentSentinel);
      }
      observer.current?.disconnect();
    };
  }, [handleObserver]);

  return { reachedIntersect, sentinelRef, observer };
};
