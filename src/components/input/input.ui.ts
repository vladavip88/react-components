import styled, { css } from 'styled-components';

// Interfaces
import { Props } from './input.d';

// eslint-disable-next-line import/prefer-default-export
export const InputUi = styled.input<Props>`
    background-color: #FFFFFF;
    border: 1px solid ${({ theme }) => theme.input.borderColor};
    border-radius: ${({ theme }) => theme.input.borderRadius};
    box-sizing: border-box;
    color: ${({ theme }) => theme.input.color};
    font-size: 1rem;
    line-height: 1.125rem;
    padding: ${({ theme }) => `${theme.input.paddingHorizontal} ${theme.input.paddingVertical}`};
    width: 100%;

    &:focus {
        border-color: ${({ theme }) => theme.input.borderColorFocus};
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.input.colorPlaceholder};
    }

    ${({ error }) => error && css`
        border-color: ${({ theme }) => theme.input.borderColorError};
        &:focus {
            border-color: ${({ theme }) => theme.input.borderColorError};
        }
    `};

    ${({ success }) => success && css`
        border-color: ${({ theme }) => theme.input.borderColorSuccess};
        &:focus {
            border-color: ${({ theme }) => theme.input.borderColorSuccess};
        }
    `};

    ${({ warning }) => warning && css`
        border-color: ${({ theme }) => theme.input.borderColorWarning};
        &:focus {
            border-color: ${({ theme }) => theme.input.borderColorWarning};
        }
    `};
`;
