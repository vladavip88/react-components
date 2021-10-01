import { css } from 'styled-components';

// Interfaces
import { Theme } from '../../theme.d';
import {
    RowFormattedGutter,
    ColBreakpointValues,
} from './grid.d';

export const generateRowVerticalGutter = ({
    gutter,
    size,
}: {
    gutter: number | RowFormattedGutter | undefined;
    size: string;
}) => {
    if (typeof gutter === 'number') {
        return css`
            margin-left: -${gutter / 2}px;
            margin-right: -${gutter / 2}px;
        `;
    }

    if (typeof gutter === 'object' && gutter[size as keyof {}]) {
        return css`
            margin-left: -${gutter[size as keyof {}] / 2}px;
            margin-right: -${gutter[size as keyof {}] / 2}px;
        `;
    }

    return undefined;
};

export const generateRowHorizontalGutter = ({
    gutter,
    size,
}: {
    gutter: number | RowFormattedGutter | undefined;
    size: string;
}) => {
    if (typeof gutter === 'number') {
        return css`
            row-gap: ${gutter}px;
        `;
    }

    if (typeof gutter === 'object' && gutter[size as keyof {}]) {
        return css`
            row-gap: ${gutter[size as keyof {}]}px;
        `;
    }

    return undefined;
};

export const generateColumnWidth = ({
    size,
    theme,
}: {
    size: number | ColBreakpointValues | undefined,
    theme: Theme,
}) => {
    if (typeof size === 'number') {
        return `width: ${100 / (theme.grid.columns / size)}%`;
    } if (typeof size === 'object' && size.span && typeof size.span === 'number') {
        return `width: ${100 / (theme.grid.columns / size.span)}%`;
    }

    return undefined;
};

export const generateColumnOffset = ({
    offset,
    size,
    theme,
}: {
    offset: number | undefined,
    size: number | ColBreakpointValues | undefined,
    theme: Theme,
}) => {
    if (typeof offset === 'number') {
        return `margin-left: ${100 / (theme.grid.columns / offset)}%`;
    } if (typeof size === 'object' && size.offset && typeof size.offset === 'number') {
        return `margin-left: ${100 / (theme.grid.columns / size.offset)}%`;
    }

    return undefined;
};
