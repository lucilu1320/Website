interface ApplicationListProps {
    applications: any[];
    onViewDetails: (application: any) => void;
    onStatusChange: (id: string, status: string) => void;
    loading: boolean;
}
export declare function ApplicationList({ applications, onViewDetails, onStatusChange, loading }: ApplicationListProps): import("react/jsx-runtime").JSX.Element;
export {};
