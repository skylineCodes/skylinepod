'use client';

import React from 'react';
import {
  Box,
  useColorModeValue,
  Flex,
  useMediaQuery,
  Grid,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Svgs } from '@/assets';

import './styles.css';
import { usePathname, useRouter } from 'next/navigation';
import ProfileDrawer from '../ProfileDrawer';

const BottomNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const formBackground = useColorModeValue('secondary.50', 'grey.500');

  return (
    <>
      <ProfileDrawer isOpen={isOpen} onClose={onClose} />
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
                  <Svgs.HOME_BLUE color={'grey.500'} />
                ) : (
                  <Svgs.HOME_WHITE />
                )}
              </Link>
            </Box>
            <Box>
              <Link href={'/explore'}>
                {pathname === '/explore' ? (
                  <Svgs.DISCOVERY_BLUE color={'grey.500'} />
                ) : (
                  <Svgs.DISCOVERY_WHITE />
                )}
              </Link>
            </Box>
            <Box>
              <Link href={'/playlists'}>
                {pathname === '/playlists' ? (
                  <Svgs.PLAY_BLUE color={'grey.500'} />
                ) : (
                  <Svgs.PLAY_WHITE />
                )}
              </Link>
            </Box>
            <Box onClick={onOpen}>
              {/* <Link href={'/profile'}>
                {pathname === '/profile' ? (
                  <Svgs.PROFILE_WHITE />
                ) : (
                  <Svgs.PROFILE_WHITE />
                )}
              </Link> */}
              <Svgs.PROFILE_WHITE />
            </Box>
          </Grid>
        </Flex>
      </Box>
    </>
  );
}

export default BottomNavigation;