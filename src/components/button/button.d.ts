import { HTMLAttributes, ReactComponentElement } from 'react';

// Component Props
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    buttonType?: 'primary' | 'secondary';
    ghost?: boolean;
    rounded?: boolean;
    icon?: ReactComponentElement;
    iconPosition?: 'left' | 'right';
    link?: boolean;
}

// Component Theme
export interface ButtonType {
    backgroundColor: string;
    backgroundColorHover: string;
    backgroundColorActive: string;
    color: string;
}

export interface Button {
    borderRadius: string;
    paddingVertical: string
    paddingHorizontal: string
    primary: ButtonType;
    secondary: ButtonType;
}

// Component UI Props
export interface ButtonUiProps extends HTMLAttributes<HTMLButtonElement> {
    $buttonType?: 'primary' | 'secondary';
    $ghost?: boolean;
    $rounded?: boolean;
    $icon?: ReactComponentElement;
    $iconPosition?: 'left' | 'right';
    $link: boolean;
}
