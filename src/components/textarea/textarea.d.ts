import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLTextAreaElement> {
    error: boolean;
    success: boolean;
    warning: boolean;
    resizable: boolean;
}