import { HTMLAttributes } from 'react';

// Component Props
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    buttonType?: 'primary' | 'secondary';
    ghost?: boolean;
    rounded?: boolean;
}

// Component Theme
export interface IconButtonType {
    backgroundColor: string;
    backgroundColorHover: string;
    backgroundColorActive: string;
    color: string;
}

export interface IconButton {
    borderRadius: string;
    paddingVertical: string
    paddingHorizontal: string
    primary: IconButtonType;
    secondary: IconButtonType;
}
