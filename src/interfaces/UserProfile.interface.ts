export interface UserProfileProps {
    name: string;
    email: string;
    togglePopup: () => void;
    showPopup: boolean;
    popupRef: React.RefObject<HTMLDivElement | null>;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
}