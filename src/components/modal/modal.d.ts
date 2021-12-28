import { HTMLAttributes } from 'react';

// Component Props
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    closeOnClickOutside?: boolean;
    closeOnEsc?: boolean;
    show: boolean;
    transitionTime: number;
    onClose: () => void;
}

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
}

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
    onConfirm?: () => void;
}

// Component Theme
export interface ModalTheme {
    borderRadius: string;
    maxWidth: string;
    minWidth: string;
}

// Component UI Props
export interface ModalBackdropUiProps extends HTMLAttributes<HTMLDivElement> {
    $show: boolean;
    $transitionTime: number;
}

export interface ModalContainerUiProps extends HTMLAttributes<HTMLDivElement> {
    $show: boolean;
    $transitionTime: number;
}
