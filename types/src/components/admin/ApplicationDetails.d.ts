interface ApplicationDetailsProps {
    application: any;
    onClose: () => void;
    onStatusChange: (id: string, status: string) => void;
}
export declare function ApplicationDetails({ application, onClose, onStatusChange }: ApplicationDetailsProps): import("react/jsx-runtime").JSX.Element;
export {};
