import React from 'react';

// Ui
import { TextUi } from './text.ui';

// Interface
import { Props } from './text.d';

const Text: React.FC<Props> = ({
    children,
    size = 'md',
    ...restProps
}) => (
    <TextUi
        size={size}
        {...restProps}
    >
        {children}
    </TextUi>
);

export default Text;
