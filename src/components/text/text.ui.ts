
import styled from 'styled-components';

// Interfaces
import { Props } from './text.d';

export const TextUi = styled.p<Props>`
    color: ${({ theme }) => theme.text.color};
    font-size: ${({ theme, size }) => theme.text.fontSize[size as keyof {}]};
`;