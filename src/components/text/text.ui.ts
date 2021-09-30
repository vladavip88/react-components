import { HTMLAttributes } from 'react';
import styled from 'styled-components';

// Interfaces
import { Props } from './text.d';

const SIZE = {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
}

export const TextUi = styled.p<HTMLAttributes<HTMLParagraphElement> & Props>`
    font-size: ${({ size }) => SIZE[size]};
`;