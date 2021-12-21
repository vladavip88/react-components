import React from 'react';
import { Meta, Story } from '@storybook/react';
import Grid from './index';

const meta: Meta = {
    component: Grid,
    parameters: {
        controls: { expanded: true },
    },
    title: 'Grid',
};

export default meta;

const Content: React.FC = ({ children }) => (
    <div style={{
        alignItems: 'center',
        background: '#efefef',
        display: 'flex',
        height: '75px',
        justifyContent: 'center',
    }}
    >
        {children}
    </div>
);

const Template: Story = ({ containerArgs, rowArgs }) => (
    <Grid.Container {...containerArgs}>
        <Grid.Row {...rowArgs}>
            <Grid.Col
                sm={4}
                xs={12}
            >
                <Content>WTF</Content>
            </Grid.Col>
            <Grid.Col
                sm={4}
                xs={12}
            >
                <Content>WTF</Content>
            </Grid.Col>
            <Grid.Col xs={8}>
                <Content>WTF</Content>
            </Grid.Col>
            <Grid.Col xs={8}>
                <Content>WTF</Content>
            </Grid.Col>
            <Grid.Col xs={8}>
                <Content>WTF</Content>
            </Grid.Col>
        </Grid.Row>
    </Grid.Container>
);

export const Default = Template.bind({});

export const ContainerFluid = Template.bind({});
ContainerFluid.args = {
    containerArgs: {
        fluid: true,
    },
};

export const WithVerticalGutter = Template.bind({});
WithVerticalGutter.args = {
    rowArgs: {
        gutter: 24,
    },
};

export const WithVerticalGutterPerBreakPoint = Template.bind({});
WithVerticalGutterPerBreakPoint.args = {
    rowArgs: {
        gutter: {
            md: 20,
            sm: 16,
            xl: 24,
            xs: 12,
            xxl: 28,
        },
    },
};

export const WithVerticalAndHorizontalGutter = Template.bind({});
WithVerticalAndHorizontalGutter.args = {
    rowArgs: {
        gutter: [24, 24],
    },
};

export const WithVerticalAndHorizontalGutterPerBreakPoint = Template.bind({});
WithVerticalAndHorizontalGutterPerBreakPoint.args = {
    rowArgs: {
        gutter: {
            md: [20, 20],
            sm: [16, 16],
            xl: [24, 24],
            xs: [12, 12],
            xxl: [28, 28],
        },
    },
};
