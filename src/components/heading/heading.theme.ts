import { COLORS } from '../../theme.constants';

// Types
import { HeadingTheme } from './heading.d';

const headingTheme: HeadingTheme = {
    color: COLORS.text,
    fontSize: {
        h1: '6rem',
        h2: '3.75rem',
        h3: '3rem',
        h4: '2.125rem',
        h5: '1.5rem',
        h6: '1.25rem',
    },
    lineHeight: {
        h1: '1.167',
        h2: '1.2',
        h3: '1.167',
        h4: '1.235',
        h5: '1.334',
        h6: '1.6',
    },
};

export default headingTheme;
