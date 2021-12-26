import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './index';
import Icon from '../icon';

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
export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
    children: 'Click Me',
    icon: <Icon name="Settings" />,
};

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
    children: 'Click Me',
    rounded: true,
};
export const PrimaryRoundedWithIcon = Template.bind({});
PrimaryRoundedWithIcon.args = {
    children: 'Click Me',
    icon: <Icon name="Settings" />,
    rounded: true,
};

export const PrimaryGhost = Template.bind({});
PrimaryGhost.args = {
    children: 'Click Me',
    ghost: true,
};
export const PrimaryGhostWithIcon = Template.bind({});
PrimaryGhostWithIcon.args = {
    children: 'Click Me',
    ghost: true,
    icon: <Icon name="Settings" />,
};

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
    children: 'Click Me',
    link: true,
};
export const PrimaryLinkWithIcon = Template.bind({});
PrimaryLinkWithIcon.args = {
    children: 'Click Me',
    icon: <Icon name="Settings" />,
    link: true,
};

export const PrimaryGhostRounded = Template.bind({});
PrimaryGhostRounded.args = {
    children: 'Click Me',
    ghost: true,
    rounded: true,
};

export const PrimaryGhostRoundedWithIcon = Template.bind({});
PrimaryGhostRoundedWithIcon.args = {
    children: 'Click Me',
    ghost: true,
    icon: <Icon name="Settings" />,
    rounded: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    buttonType: 'secondary',
    children: 'Click Me',
};
export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
    buttonType: 'secondary',
    children: 'Click Me',
    icon: <Icon name="Settings" />,
};

export const SecondaryRounded = Template.bind({});
SecondaryRounded.args = {
    buttonType: 'secondary',
    children: 'Click Me',
    rounded: true,
};

export const SecondaryRoundedWithIcon = Template.bind({});
SecondaryRoundedWithIcon.args = {
    buttonType: 'secondary',
    children: 'Click Me',
    icon: <Icon name="Settings" />,
    rounded: true,
};

export const SecondaryGhost = Template.bind({});
SecondaryGhost.args = {
    buttonType: 'secondary',
    children: 'Click Me',
    ghost: true,
};

export const SecondaryGhostWithIcon = Template.bind({});
SecondaryGhostWithIcon.args = {
    buttonType: 'secondary',
    children: 'Click Me',
    ghost: true,
    icon: <Icon name="Settings" />,
};

export const SecondaryLink = Template.bind({});
SecondaryLink.args = {
    buttonType: 'secondary',
    children: 'Click Me',
    link: true,
};

export const SecondaryLinkWithIcon = Template.bind({});
SecondaryLinkWithIcon.args = {
    buttonType: 'secondary',
    children: 'Click Me',
    icon: <Icon name="Settings" />,
    link: true,
};

export const SecondaryGhostRounded = Template.bind({});
SecondaryGhostRounded.args = {
    buttonType: 'secondary',
    children: 'Click Me',
    ghost: true,
    rounded: true,
};

export const SecondaryGhostRoundedWithIcon = Template.bind({});
SecondaryGhostRoundedWithIcon.args = {
    buttonType: 'secondary',
    children: 'Click Me',
    ghost: true,
    icon: <Icon name="Settings" />,
    rounded: true,
};
