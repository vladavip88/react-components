import React from 'react';
import { Meta, Story } from '@storybook/react';

const meta: Meta = {
    title: 'General/Colors',
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

import theme from '../src/theme';

const COLOR_SHADES = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const Template: Story = args => (
    <>
        {/* Primary */}
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
            {COLOR_SHADES.map((color) => (
                <span style={{ background: theme.colors.primary[color], height: '75px', marginRight: '1rem', width: '75px' }} />
            ))}
        </div>
        {/* Secondary */}
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
            {COLOR_SHADES.map((color) => (
                <span style={{ background: theme.colors.secondary[color], height: '75px', marginRight: '1rem', width: '75px' }} />
            ))}
        </div>
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
            <span style={{ background: theme.colors.success, height: '75px', marginRight: '1rem', width: '75px' }} />
            <span style={{ background: theme.colors.danger, height: '75px', marginRight: '1rem', width: '75px' }} />
            <span style={{ background: theme.colors.warning, height: '75px', marginRight: '1rem', width: '75px' }} />
            <span style={{ background: theme.colors.info, height: '75px', marginRight: '1rem', width: '75px' }} />
        </div>
    </>
);

export const Default = Template.bind({});

Default.args = {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
};

