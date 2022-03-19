import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primaryColor: '#673AB7',
    accentColor: '#03A9F4',
    primaryText: '#212121',
  },
};

type ThemeProps = {
  children: ReactNode;
};

export type TypeTheme = typeof theme;

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
