/* eslint-disable import/no-unresolved */
import React from 'react';
import { Meta } from '@storybook/react';

import styled from 'styled-components';

// Components
import Icon, { IconProps } from './index';
import Text from '../text';

const meta: Meta = {
    component: Icon,
    title: 'Icon',
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

export const Default = (props: IconProps) => Icons.map((name) => (
    <IconPreview key={name}>
        <Icon
            name={name}
            {...props}
        />
        <Text size="sm">{name}</Text>
    </IconPreview>
));
