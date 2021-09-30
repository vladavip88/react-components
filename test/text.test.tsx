import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Text } from '../stories/Text.stories';

describe('Text', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Text>This is some text</Text>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
