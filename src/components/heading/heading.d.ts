import { HTMLAttributes } from 'react';

// Component Props
export interface Props extends HTMLAttributes<HTMLHeadingElement> {
    level?: '1' | '2' | '3' | '4' | '5' | '6';
}

// Component Theme
export interface Heading {
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
