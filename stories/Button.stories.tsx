import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../src/components/button';

const meta: Meta = {
    component: Button,
    parameters: {
        controls: { expanded: true },
    },
    title: 'Button',
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Click Me',
};

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
    children: 'Click Me',
    rounded: true,
};

export const PrimaryGhost = Template.bind({});
PrimaryGhost.args = {
    children: 'Click Me',
    ghost: true,
};

export const PrimaryGhostRounded = Template.bind({});
PrimaryGhostRounded.args = {
    children: 'Click Me',
    ghost: true,
    rounded: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    buttonType: 'secondary',
    children: 'Click Me',
};

export const SecondaryRounded = Template.bind({});
SecondaryRounded.args = {
    buttonType: 'secondary',
    children: 'Click Me',
    rounded: true,
};

export const SecondaryGhost = Template.bind({});
SecondaryGhost.args = {
    buttonType: 'secondary',
    children: 'Click Me',
    ghost: true,
};

export const SecondaryGhostRounded = Template.bind({});
SecondaryGhostRounded.args = {
    buttonType: 'secondary',
    children: 'Click Me',
    ghost: true,
    rounded: true,
};
