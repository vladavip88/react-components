import { Colors, BreakPoints } from './theme.d';

export const COLORS: Colors = {
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

export const BREAK_POINTS: BreakPoints = {
    xs: '480px', // Extra small screen / phone - TODO: Should I remove this
    // eslint-disable-next-line sort-keys
    sm: '576px', // Small screen / tablet
    // eslint-disable-next-line sort-keys
    md: '768px', // Medium screen / desktop
    // eslint-disable-next-line sort-keys
    lg: '992px', // Large screen / wide desktop
    xl: '1200px', // Extra large screen / full hd
    xxl: '1600px', // Extra extra large screen / large desktop
};
