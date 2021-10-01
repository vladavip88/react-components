import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
    size?: 'sm' | 'md' | 'lg';
}
