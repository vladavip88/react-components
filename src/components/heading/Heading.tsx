import React from 'react';

// Ui
import { HeadingUi } from './heading.ui';

// Interface
import { Props } from './heading.d';

const Heading: React.FC<Props> = ({ children, ...restProps }) => (
    <HeadingUi {...restProps}>{children}</HeadingUi>
);

export default Heading;
