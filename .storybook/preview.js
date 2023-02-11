import '../src/components/AppLayout/AppLayout.css';
import React from 'react'
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={baseTheme}>
      <div style={{ backgroundColor: 'black' }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];