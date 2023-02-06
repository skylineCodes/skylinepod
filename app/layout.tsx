'use client';

import {
  ChakraProvider,
  extendTheme,
  ScaleFade,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { themeSettings } from '@/theme';

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
        <ChakraProvider resetCSS theme={theme}>
          <ScaleFade initialScale={0.9} in={true}>
            {children}
          </ScaleFade>
        </ChakraProvider>
      </body>
    </html>
  );
}
