import React from 'react';

// Ui
import { IconUi } from '../icon.ui';

// Interfaces
import { IconProps } from '../icon.d';

const PlusCircleIcon: React.FC<IconProps> = (props) => (
    <IconUi {...props}>
        <path
            d="M0 0h24v24H0V0z"
            fill="none"
        />
        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </IconUi>
);

export default PlusCircleIcon;
