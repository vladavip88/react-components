import { HTMLAttributes } from 'react';

// Component Props
export interface Props extends HTMLAttributes<HTMLDivElement> {
    type?: 'success' | 'info' | 'warning' | 'danger';
    solid?: boolean;
    closable?: boolean;
    onClose?: () => void;
}

// Component Theme
export interface AlertType {
    backgroundColorSuccess: string;
    backgroundColorInfo: string;
    backgroundColorWarning: string;
    backgroundColorDanger: string;
    colorSuccess: string;
    colorInfo: string;
    colorWarning: string;
    colorDanger: string;
}
export interface Alert {
    borderRadius: string;
    fontSize: string;
    default: AlertType;
    solid: AlertType;
}
