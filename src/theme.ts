import { lighten, darken } from 'polished';
import {
    Alert,
    Button,
    Colors,
    Icon,
    Input,
    InputGeneral,
    Text,
    Textarea,
    Theme,
} from './theme.d';

// General
export const colors: Colors = {
    danger: '#ef5350',
    info: '#03a8f4',
    primary: {
        100: '#009CB8',
        200: '#008BA3',
        300: '#00798F',
        400: '#00687A',
        500: '#005867',
        600: '#004552',
        700: '#00343D',
        800: '#002329',
        900: '#001114',
    },
    secondary: {
        100: '#FFD085',
        200: '#FFC870',
        300: '#FFC05C',
        400: '#FFB947',
        500: '#FFB335',
        600: '#FFA91F',
        700: '#FFA10A',
        800: '#F59700',
        900: '#E08A00',
    },
    success: '#4caf4f',
    text: '#212529',
    warning: '#ff9900',
    white: '#FFFFFF',
};

// Components
export const alert: Alert = {
    borderRadius: '5px',
    default: {
        backgroundColorDanger: lighten(0.3, colors.danger),
        backgroundColorInfo: lighten(0.425, colors.info),
        backgroundColorSuccess: lighten(0.425, colors.success),
        backgroundColorWarning: lighten(0.425, colors.warning),
        colorDanger: darken(0.1, colors.danger),
        colorInfo: darken(0.1, colors.info),
        colorSuccess: darken(0.1, colors.success),
        colorWarning: darken(0.1, colors.warning),
    },
    fontSize: '0.875rem',
    solid: {
        backgroundColorDanger: colors.danger,
        backgroundColorInfo: colors.info,
        backgroundColorSuccess: colors.success,
        backgroundColorWarning: colors.warning,
        colorDanger: colors.white,
        colorInfo: colors.white,
        colorSuccess: colors.white,
        colorWarning: colors.white,
    },
};

export const button: Button = {
    borderRadius: '5px',
    paddingHorizontal: '12px',
    paddingVertical: '30px',
    primary: {
        backgroundColor: colors.primary['500' as keyof {}],
        backgroundColorActive: colors.primary['700' as keyof {}],
        backgroundColorHover: colors.primary['600' as keyof {}],
        color: colors.white,
    },
    secondary: {
        backgroundColor: colors.secondary['500' as keyof {}],
        backgroundColorActive: colors.secondary['700' as keyof {}],
        backgroundColorHover: colors.secondary['600' as keyof {}],
        color: colors.white,
    },
};

export const icon: Icon = {
    fill: colors.text,
    size: 20,
};

export const inputGeneral: InputGeneral = {
    borderColor: '#CED4DA',
    borderColorError: colors.danger,
    borderColorFocus: colors.info,
    borderColorSuccess: colors.success,
    borderColorWarning: colors.warning,
    borderRadius: '5px',
    color: colors.text,
    colorPlaceholder: '#6C757D',
};

export const input: Input = {
    ...inputGeneral,
    paddingHorizontal: '12px',
    paddingVertical: '16px',
};

export const text: Text = {
    color: colors.text,
    fontSize: {
        lg: '1.125rem',
        md: '1rem',
        sm: '0.875rem',
    },
};

export const textarea: Textarea = {
    ...inputGeneral,
    minHeight: '120px',
    paddingHorizontal: '12px',
    paddingVertical: '16px',
};

// Theme
const theme: Theme = {
    alert,
    breakPoints: {
        xs: '480px', // Extra small screen / phone - TODO: Should I remove this
        // eslint-disable-next-line sort-keys
        sm: '576px', // Small screen / tablet
        // eslint-disable-next-line sort-keys
        md: '768px', // Medium screen / desktop
        // eslint-disable-next-line sort-keys
        lg: '992px', // Large screen / wide desktop
        xl: '1200px', // Extra large screen / full hd
        xxl: '1600px', // Extra extra large screen / large desktop
    },
    button,
    colors,
    grid: {
        columns: 24,
    },
    icon,
    input,
    text,
    textarea,
};

export default theme;
