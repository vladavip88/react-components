import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLSpanElement> {
    outlined?: boolean;
    type?: 'danger' | 'success' | 'warning' | 'info'
}
