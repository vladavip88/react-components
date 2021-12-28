import React from 'react';

// Interfaces
import { TextareaProps } from './textarea.d';

// Ui
import { TextareaUi } from './textarea.ui';

const Textarea: React.FC<TextareaProps> = ({ status, resizable, ...restProps }) => (
    <TextareaUi
        {...restProps}
        $resizable={resizable}
        $status={status}
    />
);

export default Textarea;
