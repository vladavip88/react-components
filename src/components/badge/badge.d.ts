import { HTMLAttributes } from 'react';

type BADGE_TYPE = 'danger' | 'success' | 'warning' | 'info';

// Component Props
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    outlined?: boolean;
    type?: BADGE_TYPE;
}

// Component Theme
export interface BadgeTheme {
    colorDanger: string;
    colorInfo: string;
    colorSuccess: string;
    colorWarning: string;
    fontSize: string;
    height: string;
    paddingVertical: string;
}

// Component Ui
export interface BadgeUiProps {
    $outlined?: boolean;
    $type?: BADGE_TYPE;
}
