import React from 'react';
import { Meta, Story } from '@storybook/react';
import Heading, { HeadingProps } from './index';

const meta: Meta = {
    component: Heading,
    parameters: {
        controls: { expanded: true },
    },
    title: 'Heading',
};

export default meta;

const Template: Story<HeadingProps> = (args) => (
    <>
        <Heading
            {...args}
            level="1"
        />
        <Heading
            {...args}
            level="2"
        />
        <Heading
            {...args}
            level="3"
        />
        <Heading
            {...args}
            level="4"
        />
        <Heading
            {...args}
            level="5"
        />
        <Heading
            {...args}
            level="6"
        />
    </>
);

export const Default = Template.bind({});

Default.args = {
    children: 'This is heading text.',
};
