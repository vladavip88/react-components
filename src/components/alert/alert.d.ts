import { HTMLAttributes } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    type?: 'success' | 'info' | 'warning' | 'danger';
    solid?: boolean;
    closable?: boolean;
    onClose?: () => void;
}