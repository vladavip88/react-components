import { HTMLAttributes } from 'react';

type BUTTON_TYPE = 'primary' | 'secondary';

// Component Props
export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
    buttonType?: BUTTON_TYPE;
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

export interface IconButtonTheme {
    borderRadius: string;
    paddingVertical: string
    paddingHorizontal: string
    primary: IconButtonType;
    secondary: IconButtonType;
}

// Component Ui Props
export interface IconButtonUiProps extends HTMLAttributes<HTMLButtonElement> {
    $buttonType?: BUTTON_TYPE;
    $ghost?: boolean;
    $rounded?: boolean;
}
