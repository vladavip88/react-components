import React from 'react';

// Interfaces
import { InputProps } from './input.d';

// Ui
import { InputUi } from './input.ui';

const Input: React.FC<InputProps> = ({
    status = '', ...restProps
}) => (
    <InputUi
        {...restProps}
        $status={status}
        type="input"
    />
);

export default Input;
