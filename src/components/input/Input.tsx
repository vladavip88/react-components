import React from 'react';

// Interfaces
import { Props } from './input.d';

// Ui
import { InputUi } from './input.ui';

const Input: React.FC<Props> = (props) => (
    <InputUi
        {...props}
        type="input"
    />
);

export default Input;
