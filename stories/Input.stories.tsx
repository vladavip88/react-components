import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from '../src/components/input';

const meta: Meta = {
    title: 'Input',
    component: Input,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    placeholder: 'Enter some text'
};

export const WithValue = Template.bind({});
WithValue.args = {
    placeholder: 'This is some text',
    value: 'This is some value'
};

export const WithError = Template.bind({});
WithError.args = {
    placeholder: 'This is some text',
    error: true
};

export const WithSuccess = Template.bind({});
WithSuccess.args = {
    placeholder: 'This is some text',
    success: true
};

export const WithWarning = Template.bind({});
WithWarning.args = {
    placeholder: 'This is some text',
    warning: true
};