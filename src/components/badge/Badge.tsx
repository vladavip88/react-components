import React from 'react';

// Ui
import { BadgeUi } from './badge.ui';

// Interfaces
import { Props } from './badge.d';

const Badge: React.FC<Props> = ({
    children,
    type = 'danger',
    ...restProps
}) => (
    <BadgeUi
        type={type}
        {...restProps}
    >
        {children}
    </BadgeUi>
);

export default Badge;
