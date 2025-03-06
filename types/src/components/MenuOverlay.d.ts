interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (page: string) => void;
    onApplyNow: () => void;
}
export declare function MenuOverlay({ isOpen, onClose, onNavigate, onApplyNow }: MenuOverlayProps): import("react/jsx-runtime").JSX.Element;
export {};
