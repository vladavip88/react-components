import { AlertTheme } from './components/alert';
import { BadgeTheme } from './components/badge';
import { ButtonTheme } from './components/button';
import { GridTheme } from './components/grid';
import { HeadingTheme } from './components/heading';
import { IconTheme } from './components/icon';
import { IconButtonTheme } from './components/iconButton';
import { InputTheme } from './components/input';
import { ModalTheme } from './components/modal';
import { TextTheme } from './components/text';
import { TextareaTheme } from './components/textarea';

// Constants
export interface BreakPoints {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
}

export interface Colors {
    primary: {
        [key as string]: string;
    }
    secondary: {
        [key as string]: string;
    },
    success: string;
    danger: string;
    warning: string;
    info: string;
    white: string;
    text: string;
}

// Theme
export interface Theme {
    breakPoints: BreakPoints;
    alert: AlertTheme;
    badge: BadgeTheme;
    button: ButtonTheme;
    colors: Colors;
    grid: GridTheme;
    heading: HeadingTheme;
    icon: IconTheme;
    iconButton: IconButtonTheme;
    input: InputTheme;
    modal: ModalTheme;
    text: TextTheme;
    textarea: TextareaTheme;
}
