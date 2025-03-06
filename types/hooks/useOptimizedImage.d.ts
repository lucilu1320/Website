interface UseOptimizedImageProps {
    src: string;
    quality?: number;
}
export declare function useOptimizedImage({ src, quality }: UseOptimizedImageProps): {
    optimizedSrc: string;
    isLoading: boolean;
    error: string;
};
export {};
