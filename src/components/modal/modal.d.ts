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

// Component UI Props
interface ModalBackdropProps extends HTMLAttributes<HTMLDivElement> {
    $show: boolean;
    $transitionTime: number;
}

interface ModalContainerProps extends HTMLAttributes<HTMLDivElement> {
    $show: boolean;
    $transitionTime: number;
}
