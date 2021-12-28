import { InputHTMLAttributes } from 'react';

type TEXTAREA_STATUS = 'error' | 'success' | 'warning' | '';

// Component Props
export interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    status: TEXTAREA_STATUS;
    resizable: boolean;
}

// Component Theme
export interface TextareaTheme {
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

// Component UI Props
export interface TextareaUiProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    $status: TEXTAREA_STATUS;
    $resizable: boolean;
}
