import React from 'react';
import { Meta, Story } from '@storybook/react';
import Textarea, { TextareaProps } from './index';

const meta: Meta = {
    component: Textarea,
    parameters: {
        controls: { expanded: true },
    },
    title: 'Textarea',
};

export default meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    placeholder: 'Enter some text',
};

export const WithValue = Template.bind({});
WithValue.args = {
    placeholder: 'This is some text',
    value: 'This is some value',
};

export const WithError = Template.bind({});
WithError.args = {
    error: true,
    placeholder: 'This is some text',
};

export const WithSuccess = Template.bind({});
WithSuccess.args = {
    placeholder: 'This is some text',
    success: true,
};

export const WithWarning = Template.bind({});
WithWarning.args = {
    placeholder: 'This is some text',
    warning: true,
};

export const Resizable = Template.bind({});
Resizable.args = {
    placeholder: 'This is some text',
    resizable: true,
};
