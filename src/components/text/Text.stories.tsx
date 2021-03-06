import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text, { TextProps } from './index';

const meta: Meta = {
    component: Text,
    parameters: {
        controls: { expanded: true },
    },
    title: 'Text',
};

export default meta;

const Template: Story<TextProps> = (args) => (
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

export const Default = Template.bind({});

Default.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
};
