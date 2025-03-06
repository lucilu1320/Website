interface UseIntersectionObserverProps {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
}
export declare function useIntersectionObserver({ threshold, root, rootMargin }?: UseIntersectionObserverProps): readonly [import("react").MutableRefObject<HTMLDivElement>, boolean];
export {};
