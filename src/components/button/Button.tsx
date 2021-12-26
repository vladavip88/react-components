import React from 'react';

// Ui
import { ButtonUi } from './button.ui';

// Interfaces
import { Props } from './button.d';

const Button: React.FC<Props> = ({
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
        $buttonType={buttonType}
        $ghost={ghost}
        $icon={icon}
        $iconPosition={iconPosition}
        $link={link}
        $rounded={rounded}
        {...restProps}
    >
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
    </ButtonUi>
);

export default Button;
