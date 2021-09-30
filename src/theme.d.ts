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
export interface Alert {
    borderRadius: string;
    fontSize: string;
    colorSuccess: string;
    colorInfo: string;
    colorWarning: string;
    colorDanger: string;
};
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

export interface Icon {
    fill: string;
    size: number;
}

export interface Text {
    fontSize: {
        sm: string;
        md: string;
        lg: string;
    };
}

// Theme
export interface Theme {
    breakPoints: BreakPoints;
    alert: Alert;
    button: Button;
    colors: Colors;
    grid: Grid;
    icon: Icon;
    text: Text;
}