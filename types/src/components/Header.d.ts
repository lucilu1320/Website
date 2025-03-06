interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    onNavigateHome: () => void;
    onApplyNow: () => void;
    onNavigate: (page: string) => void;
}
export declare function Header({ isMenuOpen, setIsMenuOpen, onNavigateHome, onApplyNow, onNavigate }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
