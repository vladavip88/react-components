import styled, { css } from 'styled-components';

// Ui
import { IconUi } from '../icon/icon.ui';

// Interfaces
import { Theme } from '../../theme.d';
import { Props } from './button.d';

// eslint-disable-next-line import/prefer-default-export
export const ButtonUi = styled.button<Props & {
    theme: Theme
}>`
    align-items: center;
    border-radius: ${({ theme }) => theme.button.borderRadius};
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-size: 1rem;
    justify-content: center;
    line-height: 1.125rem;
    padding: ${({ theme }) => `${theme.button.paddingHorizontal} ${theme.button.paddingVertical}`};

    ${({
        buttonType, ghost, theme, iconPosition,
    }) => css`
        background-color: ${ghost ? 'transparent' : theme.button[buttonType as keyof {}].backgroundColor};
        border-color: ${theme.button[buttonType as keyof {}].backgroundColor};
        color: ${ghost ? theme.button[buttonType as keyof {}].backgroundColor : theme.button[buttonType as keyof {}].color};

        ${IconUi} {
            fill: ${ghost ? theme.button[buttonType as keyof {}].backgroundColor : theme.button[buttonType as keyof {}].color};
            margin-left: ${iconPosition === 'right' ? '0.5rem' : 0};
            margin-right: ${iconPosition === 'left' ? '0.5rem' : 0};
            height: 1.25rem;
            width: 1.25rem;
        }

        &:not(:disabled):hover,
        &:not(:disabled):active {
            color: ${theme.button[buttonType as keyof {}].color};

            ${IconUi} {
                fill: ${theme.button[buttonType as keyof {}].color};
            }
        }

        &:not(:disabled):hover {
            background-color: ${theme.button[buttonType as keyof {}].backgroundColorHover};
        }

        &:not(:disabled):active {
            background-color: ${theme.button[buttonType as keyof {}].backgroundColorActive};
        }
    `};

    ${({ rounded }) => rounded && css`
        border-radius: 99px;
    `};
`;
