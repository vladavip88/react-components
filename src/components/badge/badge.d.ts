import { HTMLAttributes } from 'react';

// Component Props
export interface Props extends HTMLAttributes<HTMLSpanElement> {
    outlined?: boolean;
    type?: 'danger' | 'success' | 'warning' | 'info'
}

// Component Theme
export interface Badge {
    colorDanger: string;
    colorInfo: string;
    colorSuccess: string;
    colorWarning: string;
    fontSize: string;
    height: string;
    paddingVertical: string;
}
