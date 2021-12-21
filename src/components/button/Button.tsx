import React from 'react';

// Ui
import { ButtonUi } from './button.ui';

// Interfaces
import { Props } from './button.d';

const Button: React.FC<Props> = ({
    buttonType = 'primary',
    children,
    icon,
    iconPosition = 'left',
    ...restProps
}) => (
    <ButtonUi
        buttonType={buttonType}
        iconPosition={iconPosition}
        {...restProps}
    >
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
    </ButtonUi>
);

export default Button;
