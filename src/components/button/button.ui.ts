import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

// Interfaces
import { Theme } from '../../theme.d';
import { Props } from './button.d';

export const ButtonUi = styled.button<HTMLAttributes<HTMLParagraphElement> & Props & {
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
    line-height: 1.25rem;
    padding: 12px 30px;

    ${({ buttonType, ghost, theme }) => buttonType === 'primary' && css`
        background-color: ${ghost ? 'transparent' : theme.button.primary.backgroundColor};
        border-color: ${theme.button.primary.backgroundColor};
        color: ${ghost ? theme.button.primary.backgroundColor : theme.button.primary.color};

        &:not(:disabled):hover,
        &:not(:disabled):active {
            color: ${theme.button.primary.color};
        }

        &:not(:disabled):hover {
            background-color: ${theme.button.primary.backgroundColorHover};
        }

        &:not(:disabled):active {
            background-color: ${theme.button.primary.backgroundColorActive};
        }
    `};

    ${({ buttonType, ghost, theme }) => buttonType === 'secondary' && css`
        background-color:  ${ghost ? 'transparent' : theme.button.secondary.backgroundColor};
        border-color: ${theme.button.secondary.backgroundColor};
        color:  ${ghost ? theme.button.secondary.backgroundColor : theme.button.secondary.color};

        &:not(:disabled):hover,
        &:not(:disabled):active {
            color: ${theme.button.primary.color};
        }

        &:not(:disabled):hover {
            background-color: ${theme.button.secondary.backgroundColorHover};
        }

        &:not(:disabled):active {
            background-color: ${theme.button.secondary.backgroundColorActive};
        }
    `};

    ${({ rounded }) => rounded && css`
        border-radius: 99px;
    `};
`;