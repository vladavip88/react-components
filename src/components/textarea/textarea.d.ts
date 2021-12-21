import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
    error: boolean;
    success: boolean;
    warning: boolean;
    resizable: boolean;
}
