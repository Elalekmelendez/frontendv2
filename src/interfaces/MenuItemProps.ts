export interface MenuItemProps {
    href: string;
    text?: string;
    children?: React.ReactNode;
    className?: string;
    hasSubmenu?: boolean;
}