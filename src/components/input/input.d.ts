import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error: boolean;
    success: boolean;
    warning: boolean;
}
