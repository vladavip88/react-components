import { COLORS, BREAK_POINTS } from './theme.constants';

import { alertTheme } from './components/alert';
import { badgeTheme } from './components/badge';
import { buttonTheme } from './components/button';
import { gridTheme } from './components/grid';
import { headingTheme } from './components/heading';
import { iconTheme } from './components/icon';
import { iconButtonTheme } from './components/iconButton';
import { inputTheme } from './components/input';
import { textTheme } from './components/text';
import { textareaTheme } from './components/textarea';

import {
    Theme,
} from './theme.d';

// Components

// Theme
const theme: Theme = {
    alert: alertTheme,
    badge: badgeTheme,
    breakPoints: BREAK_POINTS,
    button: buttonTheme,
    colors: COLORS,
    grid: gridTheme,
    heading: headingTheme,
    icon: iconTheme,
    iconButton: iconButtonTheme,
    input: inputTheme,
    text: textTheme,
    textarea: textareaTheme,
};

export default theme;
