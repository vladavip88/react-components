import React from 'react';
import { Meta, Story } from '@storybook/react';
import Badge, { BadgeProps } from './index';

const meta: Meta = {
    component: Badge,
    parameters: {
        controls: { expanded: true },
    },
    title: 'Badge',
};

export default meta;

const Template: Story<BadgeProps> = (args) => (
    <>
        <Badge
            {...args}
            style={{ marginRight: '1rem' }}
        >
            2
        </Badge>
        <Badge
            {...args}
            style={{ marginRight: '1rem' }}
        >
            5
        </Badge>
        <Badge
            {...args}
            style={{ marginRight: '1rem' }}
        >
            25
        </Badge>
        <Badge
            {...args}
            style={{ marginRight: '1rem' }}
        >
            99+
        </Badge>
        <Badge
            {...args}
            style={{ marginRight: '1rem' }}
        >
            250
        </Badge>
    </>
);

export const Default = Template.bind({});
Default.args = {};

export const Outlined = Template.bind({});
Outlined.args = {
    outlined: true,
};

export const SuccessType = Template.bind({});
SuccessType.args = {
    type: 'success',
};

export const SuccessTypeOutlined = Template.bind({});
SuccessTypeOutlined.args = {
    outlined: true,
    type: 'success',
};

export const WarningType = Template.bind({});
WarningType.args = {
    type: 'warning',
};

export const WarningTypeOutlined = Template.bind({});
WarningTypeOutlined.args = {
    outlined: true,
    type: 'warning',
};

export const InfoType = Template.bind({});
InfoType.args = {
    type: 'info',
};

export const InfoTypeOutlined = Template.bind({});
InfoTypeOutlined.args = {
    outlined: true,
    type: 'info',
};
