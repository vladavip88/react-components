import React from 'react';

// Ui
import { IconUi } from '../icon.ui';

// Interfaces
import { IconProps } from '../icon.d';

const CloseIcon: React.FC<IconProps> = (props) => (
    <IconUi {...props}>
        <path
            d="M0 0h24v24H0V0z"
            fill="none"
        />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </IconUi>
);

export default CloseIcon;
