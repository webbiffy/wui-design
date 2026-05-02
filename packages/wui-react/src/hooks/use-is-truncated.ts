import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

/**
 * Hook to detect if an element's content is truncated (showing ellipsis).
 * Useful for conditionally rendering tooltips when text overflows.
 */
export const useIsTruncated = <T extends HTMLElement>(
  ref: RefObject<T>,
  dependencies: unknown[] = []
): boolean => {
  const [isTruncated, setIsTruncated] = useState(false);
  const depsRef = useRef(dependencies);

  // Keep a ref of the latest dependencies so the callback can read them
  depsRef.current = dependencies;

  const checkTruncation = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const truncated = element.scrollHeight > element.clientHeight;

    setIsTruncated((prev) => (prev !== truncated ? truncated : prev));
  }, [ref]);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    checkTruncation();

    const handleResize = () => {
      checkTruncation();
    };

    window.addEventListener("resize", handleResize);

    let resizeObserver: ResizeObserver | undefined;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(checkTruncation);
      resizeObserver.observe(element);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkTruncation, ...dependencies]);

  return isTruncated;
};

