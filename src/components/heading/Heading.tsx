import React from 'react';

// Ui
import { HeadingUi } from './heading.ui';

// Interface
import { HeadingProps } from './heading.d';

const Heading: React.FC<HeadingProps> = ({ children, level = '1', ...restProps }) => (
    <HeadingUi
        {...restProps}
        $level={level}
    >{children}
    </HeadingUi>
);

export default Heading;
