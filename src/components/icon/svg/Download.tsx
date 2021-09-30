import React from 'react';

// Ui
import { IconUi } from '../icon.ui';

// Interfaces
import { IconProps } from '../icon.d';

const DownloadIcon: React.FC<IconProps> = (props) => (
  <IconUi {...props}>
    <g><rect fill="none" height="24" width="24" /></g>
    <g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z" /></g>
  </IconUi>
);

export default DownloadIcon;
