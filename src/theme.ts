import { Theme, Button, Colors } from './theme.d';

// General
export const colors: Colors = {
    primary: {
        '100': '#88B4FC',
        '200': '#74A8FB',
        '300': '#609BFB',
        '400': '#4C8FFA',
        '500': '#357FFA',
        '600': '#2476F9',
        '700': '#1069F9',
        '800': '#065FEF',
        '900': '#0657DB',
    },
    secondary: {
        '100': '#26F79D',
        '200': '#13F694',
        '300': '#09EC8A',
        '400': '#08D97E',
        '500': '#07BF6F',
        '600': '#06B167',
        '700': '#069D5C',
        '800': '#058A50',
        '900': '#047645',
    },
    success: '#39C870',
    danger: '#F9413A',
    warning: '#FF8948',
    info: '#138496',
    white: '#FFFFFF',
}

// Components
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

// Theme
const theme: Theme = {
    breakPoints: {
        xs: '480px', // Extra small screen / phone
        sm: '576px', // Small screen / tablet
        md: '768px', // Medium screen / desktop
        lg: '992px', // Large screen / wide desktop
        xl: '1200px', // Extra large screen / full hd
        xxl: '1600px' // Extra extra large screen / large desktop
    },
    button,
    colors,
    grid: {
        columns: 24,
    }
}

export default theme;