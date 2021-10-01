import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
    buttonType?: 'primary' | 'secondary';
    ghost?: boolean;
    rounded?: boolean;
};