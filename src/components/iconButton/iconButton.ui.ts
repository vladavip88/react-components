import styled, { css } from 'styled-components';

// Ui
import { IconUi } from '../icon/icon.ui';

// Interfaces
import { Theme } from '../../theme.d';
import { IconButtonUiProps } from './iconButton.d';

// eslint-disable-next-line import/prefer-default-export
export const IconButtonUi = styled.button<IconButtonUiProps & {
    theme: Theme
}>`
    align-items: center;
    border-radius: ${({ theme }) => theme.iconButton.borderRadius};
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-size: 1rem;
    justify-content: center;
    line-height: 1.125rem;
    padding: ${({ theme }) => `${theme.iconButton.paddingHorizontal} ${theme.iconButton.paddingVertical}`};

    ${({ $buttonType, $ghost, theme }) => css`
        background-color: ${$ghost ? 'transparent' : theme.iconButton[$buttonType as keyof {}].backgroundColor};
        border-color: ${theme.iconButton[$buttonType as keyof {}].backgroundColor};

        ${IconUi} {
            fill: ${$ghost ? theme.iconButton[$buttonType as keyof {}].backgroundColor : theme.iconButton[$buttonType as keyof {}].color};
            height: 1.25rem;
            width: 1.25rem;
        }

        &:not(:disabled):hover ${IconUi},
        &:not(:disabled):active ${IconUi}{
            fill: ${theme.iconButton[$buttonType as keyof {}].color};
        }

        &:not(:disabled):hover {
            background-color: ${theme.iconButton[$buttonType as keyof {}].backgroundColorHover};
        }

        &:not(:disabled):active {
            background-color: ${theme.iconButton[$buttonType as keyof {}].backgroundColorActive};
        }
    `};

    ${({ $rounded }) => $rounded && css`
        border-radius: 99px;
    `};
`;
