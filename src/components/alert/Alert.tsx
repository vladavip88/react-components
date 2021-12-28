import React from 'react';

// Components
import Icon from '../icon';

// Ui
import {
    AlertUi,
    AlertContentWrapperUi,
    AlertTitleUi,
    AlertTextUi,
    AlertIconUi,
} from './alert.ui';

// Interface
import { AlertProps } from './alert.d';

const Alert: React.FC<AlertProps> = ({
    children,
    title = '',
    type = 'success',
    solid = false,
    closable,
    onClose = () => { },
    ...restProps
}) => (
    <AlertUi
        {...restProps}
        $solid={solid}
        $type={type}
    >
        <AlertContentWrapperUi>
            {title && (
                <AlertTitleUi
                    $solid={solid}
                    $type={type}
                >
                    {title}
                </AlertTitleUi>
            )}
            <AlertTextUi
                $solid={solid}
                $type={type}
            >
                {children}
            </AlertTextUi>
        </AlertContentWrapperUi>
        {closable && (
            <AlertIconUi
                $solid={solid}
                $type={type}
            >
                <Icon
                    name="Close"
                    size={18}
                    onClick={onClose}
                />
            </AlertIconUi>
        )}
    </AlertUi>
);

export default Alert;
