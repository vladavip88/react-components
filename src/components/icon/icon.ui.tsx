/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

// Interfaces
import { Props } from './icon.d';
import { Theme } from '../../theme.d';

export const IconUi = styled.svg.attrs(({
  size,
  viewBox,
  theme,
}: Props & { theme: Theme }) => ({
  height: Array.isArray(size) ? size[1] : (size || theme.icon.size),
  viewBox: viewBox || '0 0 24 24',
  width: Array.isArray(size) ? size[0] : (size || theme.icon.size),
}))`
    fill: ${({ theme, fill }) => fill || theme.icon.fill};
`;
