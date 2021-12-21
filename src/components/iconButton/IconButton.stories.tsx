import React from 'react';
import { Meta, Story } from '@storybook/react';
import Icon from '../icon';
import IconButton, { IconButtonProps } from './index';

const meta: Meta = {
    component: IconButton,
    parameters: {
        controls: { expanded: true },
    },
    title: 'IconButton',
};

export default meta;

const Template: Story<IconButtonProps> = (args) => (
    <IconButton {...args}>
        <Icon name="Settings" />
    </IconButton>
);

export const Primary = Template.bind({});

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
    rounded: true,
};

export const PrimaryGhost = Template.bind({});
PrimaryGhost.args = {
    ghost: true,
};

export const PrimaryGhostRounded = Template.bind({});
PrimaryGhostRounded.args = {
    ghost: true,
    rounded: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    buttonType: 'secondary',
};

export const SecondaryRounded = Template.bind({});
SecondaryRounded.args = {
    buttonType: 'secondary',
    rounded: true,
};

export const SecondaryGhost = Template.bind({});
SecondaryGhost.args = {
    buttonType: 'secondary',
    ghost: true,
};

export const SecondaryGhostRounded = Template.bind({});
SecondaryGhostRounded.args = {
    buttonType: 'secondary',
    ghost: true,
    rounded: true,
};
