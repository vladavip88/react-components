import React from 'react';

// Ui
import { ButtonUi } from './button.ui';

// Interfaces
import { ButtonProps } from './button.d';

const Button: React.FC<ButtonProps> = ({
    buttonType = 'primary',
    children,
    ghost = false,
    icon = null,
    iconPosition = 'left',
    link = false,
    rounded = false,
    ...restProps
}) => (
    <ButtonUi
        {...restProps}
        $buttonType={buttonType}
        $ghost={ghost}
        $icon={icon}
        $iconPosition={iconPosition}
        $link={link}
        $rounded={rounded}
    >
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
    </ButtonUi>
);

export default Button;
