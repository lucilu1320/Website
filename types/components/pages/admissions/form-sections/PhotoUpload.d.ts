interface PhotoUploadProps {
    onPhotoChange: (file: File | null) => void;
    photoPreview: string | null;
}
export declare function PhotoUpload({ onPhotoChange, photoPreview }: PhotoUploadProps): import("react/jsx-runtime").JSX.Element;
export {};
