import { HTMLAttributes } from 'react';
import styled from 'styled-components';

// Interfaces
import { Props } from './text.d';

export const TextUi = styled.p<HTMLAttributes<HTMLParagraphElement> & Props>`
    font-size: ${({ theme, size }) => theme.text.fontSize[size]};
`;