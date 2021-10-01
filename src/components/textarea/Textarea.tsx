import React from 'react';

// Interfaces
import { Props } from './textarea.d';

// Ui
import { TextareaUi } from './textarea.ui';

const Textarea: React.FC<Props> = (props) => (
    <TextareaUi {...props} />
);

export default Textarea;
