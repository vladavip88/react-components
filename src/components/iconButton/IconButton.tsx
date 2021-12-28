import React from 'react';

// Ui
import { IconButtonUi } from './iconButton.ui';

// Interfaces
import { IconButtonProps } from './iconButton.d';

const IconButton: React.FC<IconButtonProps> = ({
    buttonType = 'primary',
    ghost = false,
    rounded = false,
    children,
    ...restProps
}) => (
    <IconButtonUi
        {...restProps}
        $buttonType={buttonType}
        $ghost={ghost}
        $rounded={rounded}
    >
        {children}
    </IconButtonUi>
);

export default IconButton;
