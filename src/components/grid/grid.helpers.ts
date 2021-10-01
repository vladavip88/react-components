// Interfaces
import {
    RowGutter,
    RowFormattedGutter,
} from './grid.d';

// eslint-disable-next-line import/prefer-default-export
export const formatGutter = (gutter: RowGutter | undefined) => {
    let verticalGutter: number | RowFormattedGutter = 0;
    let horizontalGutter: number | RowFormattedGutter = 0;

    if (typeof gutter === 'number') {
        verticalGutter = gutter;
    } else if (Array.isArray(gutter)) {
        verticalGutter = gutter[0] || 0;
        horizontalGutter = gutter[1] || 0;
    } else if (typeof gutter === 'object') {
        verticalGutter = {};
        horizontalGutter = {};

        Object.entries(gutter).forEach(
            ([key, value]: [key: string, value: number | [number, number]]) => {
                if (typeof value === 'number') {
                    // @ts-ignore
                    verticalGutter[key as keyof {}] = value;
                }

                if (Array.isArray(value)) {
                    // @ts-ignore
                    verticalGutter[key as keyof {}] = value[0] || 0;
                    // @ts-ignore
                    horizontalGutter[key as keyof {}] = value[1] || 0;
                }
            },
        );
    }

    return {
        horizontalGutter,
        verticalGutter,
    };
};
