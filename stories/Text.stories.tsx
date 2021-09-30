import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text, { Props } from '../src/components/text';

const meta: Meta = {
    title: 'Text',
    component: Text,
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

const Template: Story<Props> = args => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
};

const TemplateSize: Story<Props> = args => (
    <React.Fragment>
        <Text {...args} size="sm" />
        <Text {...args} size="md" />
        <Text {...args} size="lg" />
    </React.Fragment>
);

export const Sizes = TemplateSize.bind({});

Sizes.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
};