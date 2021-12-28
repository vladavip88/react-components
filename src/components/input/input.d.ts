import { InputHTMLAttributes } from 'react';

type INPUT_STATUS = 'error' | 'success' | 'warning' | '';

// Component Props
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    status?: INPUT_STATUS;
}

// Component Theme
export interface InputTheme {
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

// Component Ui Props
export interface InputUiProps extends InputHTMLAttributes<HTMLInputElement> {
    $status?: INPUT_STATUS;
}
