import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primaryColor: '#673AB7',
    accentColor: '#03A9F4',
    primaryText: '#212121',
    white: '#FFFFFF',
    body: '#EEEEEE',
  },
  spacing: {
    s8: '0.5rem',
    s16: '1rem',
    s32: '2rem',
  },
  dimensions: {
    maxW600: '600px',
    d40: '40px',
  },
};

type ThemeProps = {
  children: ReactNode;
};

type TypeTheme = typeof theme;

function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { TypeTheme, Theme };
