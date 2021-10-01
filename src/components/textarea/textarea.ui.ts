import styled, { css } from "styled-components";

// Interfaces
import { Props } from './textarea.d';

export const TextareaUi = styled.textarea<Props>`
    background-color: #FFFFFF;
    border: 1px solid ${({ theme }) => theme.textarea.borderColor};
    border-radius: ${({ theme }) => theme.textarea.borderRadius};
    box-sizing: border-box;
    color: ${({ theme }) => theme.textarea.color};
    min-height: ${({ theme }) => theme.textarea.minHeight};
    font-size: 1rem;
    line-height: 1.125rem;
    padding: ${({ theme }) => `${theme.textarea.paddingHorizontal} ${theme.textarea.paddingVertical}`};
    resize: ${({ resizable }) => resizable ? 'auto' : 'none'};
    width: 100%;

    &:focus {
        border-color: ${({ theme }) => theme.textarea.borderColorFocus};
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.textarea.colorPlaceholder};
    }

    ${({ error }) => error && css`
        border-color: ${({ theme }) => theme.textarea.borderColorError};
        &:focus {
            border-color: ${({ theme }) => theme.textarea.borderColorError};
        }
    `};

    ${({ success }) => success && css`
        border-color: ${({ theme }) => theme.textarea.borderColorSuccess};
        &:focus {
            border-color: ${({ theme }) => theme.textarea.borderColorSuccess};
        }
    `};

    ${({ warning }) => warning && css`
        border-color: ${({ theme }) => theme.textarea.borderColorWarning};
        &:focus {
            border-color: ${({ theme }) => theme.textarea.borderColorWarning};
        }
    `};
`;