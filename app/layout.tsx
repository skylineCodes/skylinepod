'use client';

import {
  ChakraProvider,
  extendTheme,
  // useColorMode,
  // useColorModeValue,
  // Flex,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { themeSettings } from '@/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const mode = 'light';
  const theme = useMemo(() => extendTheme(themeSettings()), [mode]);

  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider resetCSS theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
