import React from 'react';

import { Theme, GlobalStyle } from './theme';
import Todo from './components/Todo';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Todo />
    </Theme>
  );
}

export default App;
