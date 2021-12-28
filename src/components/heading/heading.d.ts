import { HTMLAttributes } from 'react';

type HEADING_LEVEL = '1' | '2' | '3' | '4' | '5' | '6';

// Component Props
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: HEADING_LEVEL;
}

// Component Theme
export interface HeadingTheme {
    fontSize: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
    color: string;
    lineHeight: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
}

// Component Ui Props
export interface HeadingUiProps extends HTMLAttributes<HTMLHeadingElement> {
    $level?: HEADING_LEVEL;
}
