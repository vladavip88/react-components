import React from 'react';
import { Meta, Story } from '@storybook/react';
import Alert, { AlertProps } from './index';

const meta: Meta = {
    component: Alert,
    parameters: {
        controls: { expanded: true },
    },
    title: 'Alert',
};

export default meta;

const Template: Story<AlertProps> = (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
        <Alert
            {...args}
            type="success"
        />
        <Alert
            {...args}
            type="info"
        />
        <Alert
            {...args}
            type="warning"
        />
        <Alert
            {...args}
            type="danger"
        />
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
export const WithTitle = Template.bind({});
WithTitle.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    title: 'This is some title.',
};

export const WithTitleSolid = Template.bind({});
WithTitleSolid.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    solid: true,
    title: 'This is some title.',
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
    onClick: () => alert('Close'),
    solid: true,
};
