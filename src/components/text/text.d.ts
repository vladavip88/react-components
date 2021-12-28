import { HTMLAttributes } from 'react';

type TEXT_SIZE = 'sm' | 'md' | 'lg';

// Component Props
export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    size?: TEXT_SIZE;
}

// Component Theme
export interface TextTheme {
    fontSize: {
        sm: string;
        md: string;
        lg: string;
    };
    color: string;
}

// Component Ui Props
export interface TextUiProps extends HTMLAttributes<HTMLParagraphElement> {
    $size?: TEXT_SIZE;
}
