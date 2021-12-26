import styled from 'styled-components';

// Interfaces
import { Props } from './text.d';

// eslint-disable-next-line import/prefer-default-export
export const TextUi = styled.p<Props>`
    color: ${({ theme }) => theme.text.color};
    font-size: ${({ theme, size }) => theme.text.fontSize[size as keyof {}]};
    line-height: 1.5;
    margin: 0
`;
