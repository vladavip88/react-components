import { HTMLAttributes } from 'react';

// Component Props
export interface Props extends HTMLAttributes<HTMLParagraphElement> {
    size?: 'sm' | 'md' | 'lg';
}

// Component Theme
export interface Text {
    fontSize: {
        sm: string;
        md: string;
        lg: string;
    };
    color: string;
}
