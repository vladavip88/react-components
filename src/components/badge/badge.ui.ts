import styled, { css } from 'styled-components';
import { upperFirst } from 'lodash';

// Interfaces
import { Theme } from '../../theme.d';
import { BadgeUiProps } from './badge.d';

// eslint-disable-next-line import/prefer-default-export
export const BadgeUi = styled.span<BadgeUiProps & {
    theme: Theme
}>`
    align-items: center;
    background-color: ${({ theme, $type }) => theme.badge[`color${upperFirst($type)}`]};
    border-radius: 100px;
    box-sizing: border-box;
    color: white;
    display: inline-flex;
    font-size: ${({ theme }) => theme.badge.fontSize};
    line-height: ${({ theme }) => theme.badge.height};
    justify-content: center;
    min-width: ${({ theme }) => theme.badge.height};
    padding: 0 ${({ theme }) => theme.badge.paddingVertical};

    ${({ $outlined, theme, $type }) => $outlined && css`
        background-color: transparent;
        box-shadow:inset 0px 0px 0px 1px ${theme.badge[`color${upperFirst($type)}`]};
        color: ${theme.badge[`color${upperFirst($type)}`]};
    `};
`;
