import { HTMLAttributes } from 'react';

type ALERT_TYPE = 'success' | 'info' | 'warning' | 'danger';

// Component Props
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    type?: ALERT_TYPE;
    solid?: boolean;
    closable?: boolean;
    onClose?: () => void;
}

// Component Theme
export interface AlertType {
    backgroundColor: string;
    backgroundColorSolid: string;
    color: string;
    colorSolid: string;
}
export interface AlertTheme {
    borderRadius: string;
    success: AlertType;
    warning: AlertType;
    danger: AlertType;
    info: AlertType;
    text: {
        fontSize: string;
    },
    title: {
        fontSize: string;
        fontWeight: number;
    }
}

// Component UI Props
export interface AlertUiProps extends HTMLAttributes<HTMLDivElement> {
    $type: ALERT_TYPE;
    $solid: boolean;
}

export interface AlertContentWrapperUiProps extends HTMLAttributes<HTMLDivElement> {}

export interface AlertTitleUiProps extends AlertUiProps {}

export interface AlertTextUiProps extends AlertUiProps {}

export interface AlertIconUiProps extends AlertUiProps {}
