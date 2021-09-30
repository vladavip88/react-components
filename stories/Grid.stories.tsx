import React from 'react';
import { Meta, Story } from '@storybook/react';
import Grid from '../src/components/grid';

const meta: Meta = {
    title: 'Grid',
    component: Grid,
    argTypes: {},
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Content: React.FC = ({ children }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#efefef',
        height: '75px'
    }}>
        {children}
    </div>
);

const Template: Story = ({ containerArgs, rowArgs }) => (
    <Grid.Container {...containerArgs}>
        <Grid.Row {...rowArgs}>
            <Grid.Col xs={12} sm={4}>
                <Content>WTF</Content>
            </Grid.Col>
            <Grid.Col xs={12} sm={4}>
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
        fluid: true
    }
}

export const WithVerticalGutter = Template.bind({});
WithVerticalGutter.args = {
    rowArgs: {
        gutter: 24
    }
}

export const WithVerticalGutterPerBreakPoint = Template.bind({});
WithVerticalGutterPerBreakPoint.args = {
    rowArgs: {
        gutter: {
            xs: 12,
            sm: 16,
            md: 20,
            xl: 24,
            xxl: 28
        }
    }
}

export const WithVerticalAndHorizontalGutter = Template.bind({});
WithVerticalAndHorizontalGutter.args = {
    rowArgs: {
        gutter: [24, 24]
    }
}

export const WithVerticalAndHorizontalGutterPerBreakPoint = Template.bind({});
WithVerticalAndHorizontalGutterPerBreakPoint.args = {
    rowArgs: {
        gutter: {
            xs: [12, 12],
            sm: [16, 16],
            md: [20, 20],
            xl: [24, 24],
            xxl: [28, 28]
        }
    }
}

