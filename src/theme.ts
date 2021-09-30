import { Theme, Button, Colors, Text, Alert, Icon } from './theme.d';

// General
export const colors: Colors = {
    primary: {
        '100': '#009CB8',
        '200': '#008BA3',
        '300': '#00798F',
        '400': '#00687A',
        '500': '#005867',
        '600': '#004552',
        '700': '#00343D',
        '800': '#002329',
        '900': '#001114',
    },
    secondary: {
        '100': '#FFD085',
        '200': '#FFC870',
        '300': '#FFC05C',
        '400': '#FFB947',
        '500': '#FFB335',
        '600': '#FFA91F',
        '700': '#FFA10A',
        '800': '#F59700',
        '900': '#E08A00',
    },
    success: '#4caf4f',
    danger: '#ef5350',
    warning: '#ff9900',
    info: '#03a8f4',
    white: '#FFFFFF',
}

// Components
export const alert: Alert = {
    borderRadius: '5px',
    colorSuccess: colors.success,
    colorInfo: colors.info,
    colorWarning: colors.warning,
    colorDanger: colors.danger,
    fontSize: '0.875rem',
};

export const button: Button = {
    borderRadius: '5px',
    primary: {
        backgroundColor: colors.primary['500' as keyof {}],
        backgroundColorHover: colors.primary['600' as keyof {}],
        backgroundColorActive: colors.primary['700' as keyof {}],
        color: colors.white,
    },
    secondary: {
        backgroundColor: colors.secondary['500' as keyof {}],
        backgroundColorHover: colors.secondary['600' as keyof {}],
        backgroundColorActive: colors.secondary['700' as keyof {}],
        color: colors.white,
    }
}

export const icon: Icon = {
    size: 20,
    fill: '#333333',
};

export const text: Text = {
    fontSize: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
    },
};

// Theme
const theme: Theme = {
    breakPoints: {
        xs: '480px', // Extra small screen / phone - TODO: Should I remove this
        sm: '576px', // Small screen / tablet
        md: '768px', // Medium screen / desktop
        lg: '992px', // Large screen / wide desktop
        xl: '1200px', // Extra large screen / full hd
        xxl: '1600px' // Extra extra large screen / large desktop
    },
    alert,
    button,
    colors,
    grid: {
        columns: 24,
    },
    icon,
    text,
}

export default theme;