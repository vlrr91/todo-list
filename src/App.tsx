import React from 'react';

import { Theme, GlobalStyle } from './theme';
import Todo from './components/Todo';
import { TodoProvider } from './context';

function App() {
  return (
    <Theme>
      <GlobalStyle />

      <TodoProvider>
        <Todo />
      </TodoProvider>
    </Theme>
  );
}

export default App;
