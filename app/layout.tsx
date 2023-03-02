'use client';

import {
  ChakraProvider,
  extendTheme,
  ScaleFade,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { themeSettings } from '@/theme';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import player from '@/redux/reducers/player';

const store = configureStore({
  reducer: {
    player,
  },
});
setupListeners(store.dispatch);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const mode = 'dark';
  const theme = useMemo(() => extendTheme(themeSettings()), [mode]);

  return (
    <html lang='en'>
      <head />
      <body>
        <Provider store={store}>
          <ChakraProvider resetCSS theme={theme}>
            <ScaleFade initialScale={0.9} in={true}>
              {children}
            </ScaleFade>
          </ChakraProvider>
        </Provider>
      </body>
    </html>
  );
}
