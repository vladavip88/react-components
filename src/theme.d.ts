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
    text: string;
}

// Components
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
};
export interface ButtonType {
    backgroundColor: string;
    backgroundColorHover: string;
    backgroundColorActive: string;
    color: string;
}

export interface Button {
    borderRadius: string;
    paddingVertical: string
    paddingHorizontal: string
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

export interface InputGeneral {
    borderColor: string;
    borderColorFocus: string;
    borderColorError: string;
    borderColorWarning: string;
    borderColorSuccess: string;
    borderRadius: string;
    color: string;
    colorPlaceholder: string;
}

export interface Input extends InputGeneral {
    paddingVertical: string
    paddingHorizontal: string
}


export interface Text {
    fontSize: {
        sm: string;
        md: string;
        lg: string;
    };
    color: string;
}


export interface Textarea extends InputGeneral {
    paddingVertical: string;
    paddingHorizontal: string;
    minHeight: string;
}

// Theme
export interface Theme {
    breakPoints: BreakPoints;
    alert: Alert;
    button: Button;
    colors: Colors;
    grid: Grid;
    icon: Icon;
    input: Input;
    text: Text;
    textarea: Textarea;
}