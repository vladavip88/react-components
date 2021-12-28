import React from 'react';

// Ui
import { BadgeUi } from './badge.ui';

// Interfaces
import { BadgeProps } from './badge.d';

const Badge: React.FC<BadgeProps> = ({
    children,
    outlined = false,
    type = 'danger',
    ...restProps
}) => (
    <BadgeUi
        {...restProps}
        $outlined={outlined}
        $type={type}
    >
        {children}
    </BadgeUi>
);

export default Badge;
