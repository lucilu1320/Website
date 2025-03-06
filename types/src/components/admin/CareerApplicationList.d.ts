interface CareerApplicationListProps {
    applications: any[];
    onViewDetails: (application: any) => void;
    onStatusChange: (id: string, status: string) => void;
    loading: boolean;
}
export declare function CareerApplicationList({ applications, onViewDetails, onStatusChange, loading }: CareerApplicationListProps): import("react/jsx-runtime").JSX.Element;
export {};
