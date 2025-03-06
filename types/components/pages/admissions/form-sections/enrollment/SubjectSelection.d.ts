interface SubjectSelectionProps {
    stream: string | null;
    selectedSubjects: string[];
    onChange: (subjects: string[]) => void;
    error: string | null;
}
export declare function SubjectSelection({ stream, selectedSubjects, onChange, error }: SubjectSelectionProps): import("react/jsx-runtime").JSX.Element;
export {};
