import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
    level?: '1' | '2' | '3' | '4' | '5' | '6';
}
