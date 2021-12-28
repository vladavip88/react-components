import styled, { css } from 'styled-components';
import { startCase } from 'lodash';

// Interfaces
import { TextareaUiProps } from './textarea.d';

// eslint-disable-next-line import/prefer-default-export
export const TextareaUi = styled.textarea<TextareaUiProps>`
    background-color: #FFFFFF;
    border: 1px solid ${({ theme }) => theme.textarea.borderColor};
    border-radius: ${({ theme }) => theme.textarea.borderRadius};
    box-sizing: border-box;
    color: ${({ theme }) => theme.textarea.color};
    min-height: ${({ theme }) => theme.textarea.minHeight};
    font-size: 1rem;
    line-height: 1.125rem;
    padding: ${({ theme }) => `${theme.textarea.paddingHorizontal} ${theme.textarea.paddingVertical}`};
    resize: ${({ $resizable }) => ($resizable ? 'auto' : 'none')};
    width: 100%;

    &:focus {
        border-color: ${({ theme }) => theme.textarea.borderColorFocus};
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.textarea.colorPlaceholder};
    }

    ${({ $status }) => $status && css`
        border-color: ${({ theme }) => theme.textarea[`borderColor${startCase($status)}`]};
        
        &:focus {
            border-color: ${({ theme }) => theme.textarea[`borderColor${startCase($status)}`]};
        }
    `};
`;
