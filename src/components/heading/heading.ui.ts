/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

// Interfaces
import { HeadingUiProps } from './heading.d';
import { Theme } from '../../theme.d';

export const HeadingUi = styled.h1.attrs(({
    $level,
    ...restProps
}: HeadingUiProps & { theme: Theme }) => ({
    $level,
    as: `h${$level}`,
    ...restProps,
}))`
    color: ${({ theme }) => theme.heading.color};
    font-size: ${({ theme, $level }) => theme.heading.fontSize[`h${$level}`]};
    line-height: ${({ theme, $level }) => theme.heading.lineHeight[`h${$level}`]};
    margin-top: 0;
    margin-bottom: 0.35em;
`;
