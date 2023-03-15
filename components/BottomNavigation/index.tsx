'use client';

import React from 'react';
import {
  Box,
  useColorModeValue,
  Flex,
  useMediaQuery,
  Grid,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Svgs } from '@/assets';

import './styles.css';
import { usePathname, useRouter } from 'next/navigation';

const BottomNavigation = () => {
  const pathname = usePathname();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const formBackground = useColorModeValue('secondary.50', 'grey.500');

  console.log(pathname);

  return (
    <>
      {/* Bottom Navigation */}
      <Box>
        <Flex
          direction={'column'}
          justifyContent={'center'}
          backgroundColor={'grey.0'}
          p={6}
          position={'absolute'}
          bottom={'0'}
          right={'0'}
          left={'0'}
          borderRadius={'0px 0px 0px 0px'}
          w={{ base: '100%' }}
          height={'10vh'}
          zIndex={'99'}
        >
          <Grid templateColumns={'repeat(4, 1fr)'} placeItems={'center'}>
            <Box>
              <Link href={'/dashboard'}>
                {pathname === '/dashboard' ? (
                  <Svgs.HOME_BLUE />
                ) : (
                  <Svgs.HOME_WHITE />
                )}
              </Link>
            </Box>
            <Box>
              <Link href={'/explore'}>
                {pathname === '/explore' ? (
                  <Svgs.DISCOVERY_BLUE />
                ) : (
                  <Svgs.DISCOVERY_WHITE />
                )}
              </Link>
            </Box>
            <Box>
              <Link href={'/play'}>
                {pathname === '/play' ? (
                  <Svgs.PLAY_WHITE />
                ) : (
                  <Svgs.PLAY_WHITE />
                )}
              </Link>
            </Box>
            <Box>
              <Link href={'/profile'}>
                {pathname === '/profile' ? (
                  <Svgs.PROFILE_WHITE />
                ) : (
                  <Svgs.PROFILE_WHITE />
                )}
              </Link>
            </Box>
          </Grid>
        </Flex>
      </Box>
    </>
  );
}

export default BottomNavigation;