// General
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
}

// Components
export interface ButtonType {
    backgroundColor: string;
    backgroundColorHover: string;
    backgroundColorActive: string;
    color: string;
}

export interface Button {
    borderRadius: string;
    primary: ButtonType;
    secondary: ButtonType;
}

export interface Grid {
    columns: number;
}

// Theme
export interface Theme {
    breakPoints: BreakPoints;
    button: Button;
    colors: Colors;
    grid: Grid;
}