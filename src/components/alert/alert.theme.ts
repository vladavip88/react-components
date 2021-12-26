import { lighten, darken } from 'polished';

// Theme Constants
import { COLORS } from '../../theme.constants';

// Types
import { Alert } from './alert.d';

const alertTheme: Alert = {
    borderRadius: '5px',
    default: {
        backgroundColorDanger: lighten(0.3, COLORS.danger),
        backgroundColorInfo: lighten(0.425, COLORS.info),
        backgroundColorSuccess: lighten(0.425, COLORS.success),
        backgroundColorWarning: lighten(0.425, COLORS.warning),
        colorDanger: darken(0.1, COLORS.danger),
        colorInfo: darken(0.1, COLORS.info),
        colorSuccess: darken(0.1, COLORS.success),
        colorWarning: darken(0.1, COLORS.warning),
    },
    fontSize: '0.875rem',
    solid: {
        backgroundColorDanger: COLORS.danger,
        backgroundColorInfo: COLORS.info,
        backgroundColorSuccess: COLORS.success,
        backgroundColorWarning: COLORS.warning,
        colorDanger: COLORS.white,
        colorInfo: COLORS.white,
        colorSuccess: COLORS.white,
        colorWarning: COLORS.white,
    },
};

export default alertTheme;
