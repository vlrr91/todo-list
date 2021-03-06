import { createGlobalStyle } from 'styled-components';
import { TypeTheme } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: TypeTheme }>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${({ theme }) =>
      `
      color: ${theme.colors.primaryText};
      background-color: ${theme.colors.body};
    `}
  }
`;

export default GlobalStyle;
