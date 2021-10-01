import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLInputElement> {
    error: boolean;
    success: boolean;
    warning: boolean;
}
