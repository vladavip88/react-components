import React from 'react';

// Ui
import { IconButtonUi } from './iconButton.ui';

// Interfaces
import { Props } from './iconButton.d';

const IconButton: React.FC<Props> = ({
    buttonType = 'primary',
    children,
    ...restProps
}) => (
    <IconButtonUi
        buttonType={buttonType}
        {...restProps}
    >
        {children}
    </IconButtonUi>
);

export default IconButton;
