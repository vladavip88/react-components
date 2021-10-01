import React from 'react';
import { Meta, Story } from '@storybook/react';
import Alert, { AlertProps } from '../src/components/alert';

const meta: Meta = {
    title: 'Alert',
    component: Alert,
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

const Template: Story<AlertProps> = args => (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
        <Alert {...args} type="success" />
        <Alert {...args} type="info" />
        <Alert {...args} type="warning" />
        <Alert {...args} type="danger" />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};

export const Solid = Template.bind({});
Solid.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    solid: true,
};

export const Closable = Template.bind({});
Closable.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    closable: true,
    onClick: () => alert('Close'),
};

export const ClosableSolid = Template.bind({});
ClosableSolid.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    closable: true,
    solid: true,
    onClick: () => alert('Close'),
};
