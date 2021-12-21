import { HTMLAttributes, ReactComponentElement } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    buttonType?: 'primary' | 'secondary';
    ghost?: boolean;
    rounded?: boolean;
    icon?: ReactComponentElement;
    iconPosition?: 'left' | 'right';
}
