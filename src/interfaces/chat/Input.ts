export interface InputProps {
    inputRef: React.RefObject<HTMLInputElement|null>;
    input: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    isLoading: boolean;
}