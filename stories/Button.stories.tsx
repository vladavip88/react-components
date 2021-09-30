import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { Props } from '../src/components/button';

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Click Me'
};

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
    children: 'Click Me',
    rounded: true,
};

export const PrimaryGhost = Template.bind({});
PrimaryGhost.args = {
    children: 'Click Me',
    ghost: true
};

export const PrimaryGhostRounded = Template.bind({});
PrimaryGhostRounded.args = {
    children: 'Click Me',
    ghost: true,
    rounded: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Click Me',
    buttonType: 'secondary'
};

export const SecondaryRounded = Template.bind({});
SecondaryRounded.args = {
    children: 'Click Me',
    buttonType: 'secondary',
    rounded: true,
};

export const SecondaryGhost = Template.bind({});
SecondaryGhost.args = {
    children: 'Click Me',
    buttonType: 'secondary',
    ghost: true
};

export const SecondaryGhostRounded = Template.bind({});
SecondaryGhostRounded.args = {
    children: 'Click Me',
    buttonType: 'secondary',
    ghost: true,
    rounded: true,
};
