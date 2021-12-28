import React from 'react';

// Ui
import { TextUi } from './text.ui';

// Interface
import { TextProps } from './text.d';

const Text: React.FC<TextProps> = ({
    children,
    size = 'md',
    ...restProps
}) => (
    <TextUi
        {...restProps}
        $size={size}
    >
        {children}
    </TextUi>
);

export default Text;
