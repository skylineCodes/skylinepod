'use client';

import Image from 'next/image';
import { Inter } from '@next/font/google';
import DesktopHomePage from '@/components/DesktopHomePage';
import { useMediaQuery } from '@chakra-ui/react';
import MobileHomePage from '@/components/MobileHomePage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return <main>{isMobile ? <MobileHomePage /> : <DesktopHomePage />}</main>;
}
