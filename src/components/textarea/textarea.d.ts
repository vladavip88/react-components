import { InputHTMLAttributes } from 'react';

// Component Props
export interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
    error: boolean;
    success: boolean;
    warning: boolean;
    resizable: boolean;
}

// Component Theme
export interface Textarea {
    borderColor: string;
    borderColorError: string;
    borderColorFocus: string;
    borderColorSuccess: string;
    borderColorWarning: string;
    borderRadius: string;
    color: string;
    colorPlaceholder: string;
    minHeight: string;
    paddingHorizontal: string;
    paddingVertical: string;
}
