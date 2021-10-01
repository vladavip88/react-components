import React from 'react';

// Ui
import { ContainerUi, RowUi, ColUi } from './grid.ui';

// Interfaces
import { ContainerProps, RowProps, ColProps } from './grid.d';

// Helpers
import { formatGutter } from './grid.helpers';

// Container
const Container: React.FC<ContainerProps> = ({ children, ...restProps }) => (
    <ContainerUi {...restProps}>{children}</ContainerUi>
);

// Row
const Row: React.FC<RowProps> = ({
    children,
    gutter,
    ...restProps
}) => {
    const { verticalGutter, horizontalGutter } = formatGutter(gutter);

    return (
        <RowUi
            horizontalGutter={horizontalGutter}
            verticalGutter={verticalGutter}
            {...restProps}
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { gutter: verticalGutter });
                }

                return null;
            })}
        </RowUi>
    );
};

// Col
const Col: React.FC<ColProps> = ({ children, ...restProps }) => (
    <ColUi {...restProps}>{children}</ColUi>
);

const Grid: React.FC & {
    Container: React.FC<ContainerProps>,
    Row: React.FC<RowProps>,
    Col: React.FC<ColProps>,
} = ({ children }) => <>{children}</>;

Grid.Container = Container;
Grid.Container.displayName = 'Container';
Grid.Row = Row;
Grid.Row.displayName = 'Row';
Grid.Col = Col;
Grid.Col.displayName = 'Col';

export default Grid;
