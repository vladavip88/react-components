import styled, { css } from 'styled-components';
import { startCase } from 'lodash';

// Interfaces
import { InputUiProps } from './input.d';

// eslint-disable-next-line import/prefer-default-export
export const InputUi = styled.input<InputUiProps>`
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

    ${({ $status }) => $status && css`
        border-color: ${({ theme }) => theme.input[`borderColor${startCase($status)}`]};
        &:focus {
            border-color: ${({ theme }) => theme.input[`borderColor${startCase($status)}`]};
        }
    `};
`;
