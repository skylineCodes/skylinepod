'use client';

import React from 'react';
import {
  Box,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import DesktopDashboard from '@/components/DesktopDashboard';
import MobileDashboard from '@/components/MobileDashboard';

const page = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const formBackground = useColorModeValue('secondary.50', 'grey.500');

  return <Box overflowX={'hidden'}>{isMobile ? <MobileDashboard /> : <DesktopDashboard />}</Box>;
};

export default page;
