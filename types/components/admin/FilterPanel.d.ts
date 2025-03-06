interface FilterPanelProps {
    filters: {
        status: string;
        class: string;
        dateRange: string;
    };
    setFilters: (filters: any) => void;
}
export declare function FilterPanel({ filters, setFilters }: FilterPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
