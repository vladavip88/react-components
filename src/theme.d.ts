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
}

export interface Badge {
    colorDanger: string;
    colorInfo: string;
    colorSuccess: string;
    colorWarning: string;
    fontSize: string;
    height: string;
    paddingVertical: string;
}
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

export interface Heading {
    fontSize: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
    color: string;
    lineHeight: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
}

export interface Icon {
    fill: string;
    size: number;
}

export interface IconButtonType {
    backgroundColor: string;
    backgroundColorHover: string;
    backgroundColorActive: string;
    color: string;
}

export interface IconButton {
    borderRadius: string;
    paddingVertical: string
    paddingHorizontal: string
    primary: IconButtonType;
    secondary: IconButtonType;
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
    badge: Badge;
    button: Button;
    colors: Colors;
    grid: Grid;
    heading: Heading;
    icon: Icon;
    iconButton: IconButton;
    input: Input;
    text: Text;
    textarea: Textarea;
}
