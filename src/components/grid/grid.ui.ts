import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';

// Helpers
import { generateRowVerticalGutter, generateRowHorizontalGutter, generateColumnWidth, generateColumnOffset } from './grid.ui.helpers';

// Interfaces
import { Theme } from '../../theme.d';
import {
    ContainerProps,
    RowProps,
    ColProps,
    RowFormattedGutter
} from './grid.d';


// Container
export const ContainerUi = styled.div<HTMLAttributes<HTMLDivElement> & ContainerProps>`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;

    ${({ theme, fluid }) => !fluid && css`
        @media screen and (min-width: ${theme.breakPoints.sm}) {
            max-width: calc(${theme.breakPoints.sm} - 1px);
        }

        @media screen and (min-width: ${theme.breakPoints.md}) {
            max-width: calc(${theme.breakPoints.md} - 1px);
        }

        @media screen and (min-width: ${theme.breakPoints.lg}) {
            max-width: calc(${theme.breakPoints.lg} - 1px);
        }

        @media screen and (min-width: ${theme.breakPoints.xl}) {
            max-width: calc(${theme.breakPoints.xl} - 1px);
        }

        @media screen and (min-width: ${theme.breakPoints.xxl}) {
            max-width: calc(${theme.breakPoints.xxl} - 1px);
        }
    `};
`;

// Row
export const RowUi = styled.div<HTMLAttributes<HTMLDivElement> & RowProps & {
    horizontalGutter: number | RowFormattedGutter | undefined;
    verticalGutter: number | RowFormattedGutter | undefined;
}>`
    display: flex;
    flex: 1;
    flex-wrap: wrap;

    ${({ theme, horizontalGutter, verticalGutter }) => css`
        ${generateRowVerticalGutter({ gutter: verticalGutter, size: 'xs' })};
        ${generateRowHorizontalGutter({ gutter: horizontalGutter, size: 'xs' })};

        @media screen and (min-width: ${theme.breakPoints.sm}) {
            ${generateRowVerticalGutter({ gutter: verticalGutter, size: 'sm' })};
            ${generateRowHorizontalGutter({ gutter: horizontalGutter, size: 'sm' })};
        }

        @media screen and (min-width: ${theme.breakPoints.md}) {
            ${generateRowVerticalGutter({ gutter: verticalGutter, size: 'md' })};
            ${generateRowHorizontalGutter({ gutter: horizontalGutter, size: 'md' })};
        }

        @media screen and (min-width: ${theme.breakPoints.lg}) {
            ${generateRowVerticalGutter({ gutter: verticalGutter, size: 'lg' })};
            ${generateRowHorizontalGutter({ gutter: horizontalGutter, size: 'lg' })};
        }

        @media screen and (min-width: ${theme.breakPoints.xl}) {
            ${generateRowVerticalGutter({ gutter: verticalGutter, size: 'xl' })};
            ${generateRowHorizontalGutter({ gutter: horizontalGutter, size: 'xl' })};
        }

        @media screen and (min-width: ${theme.breakPoints.xxl}) {
            ${generateRowVerticalGutter({ gutter: verticalGutter, size: 'xxl' })};
            ${generateRowHorizontalGutter({ gutter: horizontalGutter, size: 'xxl' })};
        }
    `};
`;

// Column
const generateColumnGutter = ({
    gutter,
    size,
}: {
    gutter: number | RowFormattedGutter | undefined;
    size: string;
}) => {
    if (typeof gutter === 'number') {
        return css`
            padding-left: ${gutter / 2}px;
            padding-right: ${gutter / 2}px;
        `;
    } else if (typeof gutter === 'object' && gutter[size as keyof {}]) {
        return css`
            padding-left: ${gutter[size as keyof {}] / 2}px;
            padding-right: ${gutter[size as keyof {}] / 2}px;
        `;
    }

    return;
}

export const ColUi = styled.div<HTMLAttributes<HTMLDivElement> & ColProps & {
    gutter?: number;
    theme: Theme;
}>`
    box-sizing: border-box;
    
    ${({ theme, gutter, offset, xs, sm, md, lg, xl, xxl }) => css`
        ${generateColumnWidth({ theme, size: xs } || 'width: 100%')};
        ${generateColumnOffset({ theme, offset, size: xs })};
        ${generateColumnGutter({ gutter, size: 'xs' })};

        @media screen and (min-width: ${theme.breakPoints.sm}) {
            ${generateColumnWidth({ theme, size: sm })};
            ${generateColumnOffset({ theme, offset, size: sm })};
            ${generateColumnGutter({ gutter, size: 'sm' })};
        }

        @media screen and (min-width: ${theme.breakPoints.md}) {
            ${generateColumnWidth({ theme, size: md })};
            ${generateColumnOffset({ theme, offset, size: md })};
            ${generateColumnGutter({ gutter, size: 'md' })};
        }

        @media screen and (min-width: ${theme.breakPoints.lg}) {
            ${generateColumnWidth({ theme, size: lg })};
            ${generateColumnOffset({ theme, offset, size: lg })};
            ${generateColumnGutter({ gutter, size: 'lg' })};
        }

        @media screen and (min-width: ${theme.breakPoints.xl}) {
            ${generateColumnWidth({ theme, size: xl })};
            ${generateColumnOffset({ theme, offset, size: xl })};
            ${generateColumnGutter({ gutter, size: 'xl' })};
        }

        @media screen and (min-width: ${theme.breakPoints.xxl}) {
            ${generateColumnWidth({ theme, size: xxl })};
            ${generateColumnOffset({ theme, offset, size: xxl })};
            ${generateColumnGutter({ gutter, size: 'xxl' })};
        }
    `};
`;
