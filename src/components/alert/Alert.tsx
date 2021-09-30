import React from 'react';

// Components
import Icon from '../icon';

// Ui
import { AlertUi } from './alert.ui';

// Interface
import { Props } from './alert.d';

const Alert: React.FC<Props> = ({
    children,
    type = 'success',
    closable,
    onClose = () => { },
    ...restProps
}) => (
    <AlertUi
        type={type}
        {...restProps}
    >
        {children}
        {closable && (
            <Icon
                name="Close"
                onClick={onClose}
            />
        )}
    </AlertUi>
);

export default Alert;