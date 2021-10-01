import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text, { TextProps } from '../src/components/text';

const meta: Meta = {
    component: Text,
    parameters: {
        controls: { expanded: true },
    },
    title: 'Text',
};

export default meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};

const TemplateSize: Story<TextProps> = (args) => (
    <>
        <Text
            {...args}
            size="sm"
        />
        <Text
            {...args}
            size="md"
        />
        <Text
            {...args}
            size="lg"
        />
    </>
);

export const Sizes = TemplateSize.bind({});

Sizes.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};
