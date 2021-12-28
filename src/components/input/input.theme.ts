import { COLORS } from '../../theme.constants';

// Types
import { InputTheme } from './input.d';

const inputTheme: InputTheme = {
    borderColor: '#CED4DA',
    borderColorError: COLORS.danger,
    borderColorFocus: COLORS.info,
    borderColorSuccess: COLORS.success,
    borderColorWarning: COLORS.warning,
    borderRadius: '5px',
    color: COLORS.text,
    colorPlaceholder: '#6C757D',
    paddingHorizontal: '12px',
    paddingVertical: '16px',
};

export default inputTheme;
