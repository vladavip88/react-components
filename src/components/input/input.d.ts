import { InputHTMLAttributes } from 'react';

// Component Props
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error: boolean;
    success: boolean;
    warning: boolean;
}

// Component Theme
export interface Input {
    borderColor: string;
    borderColorFocus: string;
    borderColorError: string;
    borderColorWarning: string;
    borderColorSuccess: string;
    borderRadius: string;
    color: string;
    colorPlaceholder: string;
    paddingVertical: string
    paddingHorizontal: string
}
