import { COLORS } from '../../theme.constants';

// Types
import { Textarea } from './textarea.d';

const textareaTheme: Textarea = {
    borderColor: '#CED4DA',
    borderColorError: COLORS.danger,
    borderColorFocus: COLORS.info,
    borderColorSuccess: COLORS.success,
    borderColorWarning: COLORS.warning,
    borderRadius: '5px',
    color: COLORS.text,
    colorPlaceholder: '#6C757D',
    minHeight: '120px',
    paddingHorizontal: '12px',
    paddingVertical: '16px',
};

export default textareaTheme;
