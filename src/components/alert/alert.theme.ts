import { lighten, darken } from 'polished';

// Theme Constants
import { COLORS } from '../../theme.constants';

// Types
import { AlertTheme } from './alert.d';

const alertTheme: AlertTheme = {
    borderRadius: '5px',
    danger: {
        backgroundColor: lighten(0.3, COLORS.danger),
        backgroundColorSolid: COLORS.danger,
        color: darken(0.1, COLORS.danger),
        colorSolid: COLORS.white,
    },

    info: {
        backgroundColor: lighten(0.425, COLORS.info),
        backgroundColorSolid: COLORS.info,
        color: darken(0.1, COLORS.info),
        colorSolid: COLORS.white,
    },
    success: {
        backgroundColor: lighten(0.425, COLORS.success),
        backgroundColorSolid: COLORS.success,
        color: darken(0.1, COLORS.success),
        colorSolid: COLORS.white,
    },
    text: {
        fontSize: '0.875rem',
    },
    title: {
        fontSize: '1rem',
        fontWeight: 700,
    },
    warning: {
        backgroundColor: lighten(0.425, COLORS.warning),
        backgroundColorSolid: COLORS.warning,
        color: darken(0.1, COLORS.warning),
        colorSolid: COLORS.white,
    },
};

export default alertTheme;
