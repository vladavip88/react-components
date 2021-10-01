import React from 'react';

// Ui
import { ButtonUi } from './button.ui';

// Interfaces
import { Props } from './button.d';

const Button: React.FC<Props> = ({
    buttonType = 'primary',
    children,
    ...restProps
}) => (
    <ButtonUi
        buttonType={buttonType}
        {...restProps}
    >
        {children}
    </ButtonUi>
);

export default Button;
