import { COLORS } from '../../theme.constants';

// Types
import { IconButton } from './iconButton.d';

const iconButtonTheme: IconButton = {
    borderRadius: '5px',
    paddingHorizontal: '12px',
    paddingVertical: '12px',
    primary: {
        backgroundColor: COLORS.primary['500' as keyof {}],
        backgroundColorActive: COLORS.primary['700' as keyof {}],
        backgroundColorHover: COLORS.primary['600' as keyof {}],
        color: COLORS.white,
    },
    secondary: {
        backgroundColor: COLORS.secondary['500' as keyof {}],
        backgroundColorActive: COLORS.secondary['700' as keyof {}],
        backgroundColorHover: COLORS.secondary['600' as keyof {}],
        color: COLORS.white,
    },
};

export default iconButtonTheme;
