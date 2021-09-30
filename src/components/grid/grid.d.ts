// Container
export interface ContainerProps {
    fluid?: boolean;
}
// Row
interface RowBreakpointValues {
    xs?: number | [number, number];
    sm?: number | [number, number];
    md?: number | [number, number];
    lg?: number | [number, number];
    xl?: number | [number, number];
    xxl?: number | [number, number];
}

interface RowFormattedGutter {
    [key: string]: number;
}

type RowGutter = number | [number, number] | RowBreakpointValues;

export interface RowProps {
    gutter?: RowGutter;
}

// Column
export interface ColBreakpointValues {
    span: number;
    offset?: number
}

export interface ColProps {
    offset?: number;
    xs?: number | ColBreakpointValues;
    sm?: number | ColBreakpointValues;
    md?: number | ColBreakpointValues;
    lg?: number | ColBreakpointValues;
    xl?: number | ColBreakpointValues;
    xxl?: number | ColBreakpointValues;
}
