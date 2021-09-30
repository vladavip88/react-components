/* eslint-disable import/no-unresolved */
import React from 'react';
import { Meta } from '@storybook/react';

import styled from 'styled-components';

// Components
import Icon, { Props } from '../src/components/icon';
import Text from '../src/components/text';

const meta: Meta = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    fill: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
    },
  },
};

export default meta;

const IconPreview = styled.span`
    display: inline-block;
    padding: 1rem;
    text-align: center;
`;

const Icons = [
  'Close',
  'Download',
  'DragHandler',
  'MinusCircle',
  'PlusCircle',
  'Search',
  'Settings',
];

export const Default = (props: Props) => Icons.map((name) => (
  <IconPreview key={name}>
    <Icon
      name={name}
      {...props}
    />
    <Text size="sm">{name}</Text>
  </IconPreview>
));
