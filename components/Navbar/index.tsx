'use client';

import React from 'react';
import { Box, Flex, Grid, Heading, Text, Icon } from '@chakra-ui/react';
import { Svgs } from '@/assets';
import Button from '@/components/Button';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { IoChevronDownOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <Box
      backgroundColor={'transparent'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      position={'relative'}
      zIndex={'40'}
    >
      <Grid
        templateColumns='200px 1fr 1fr'
        maxWidth={'90%'}
        width={'100%'}
        margin={'auto'}
        pt={'10px'}
        pb={'10px'}
        position={'relative'}
      >
        <Flex
          direction={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
        >
          <Link href='/'>
            <Heading>
              <Svgs.LOGO />
            </Heading>
          </Link>
        </Flex>
        <Flex
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'32px'}
        >
          <Link
            as={NextLink}
            href={'#feature'}
            color={'home.50'}
            fontWeight={'medium'}
            fontSize={'xs'}
            lineHeight={'short'}
            letterSpacing={'0.01em'}
            _hover={{ textDecoration: 'none', opacity: '0.8' }}
          >
            Features
          </Link>
          <Link
            as={NextLink}
            href='#howitworks'
            color={'home.50'}
            fontWeight={'medium'}
            fontSize={'xs'}
            lineHeight={'short'}
            letterSpacing={'0.01em'}
            _hover={{ textDecoration: 'none', opacity: '0.8' }}
          >
            How It Works
          </Link>
          <Link
            as={NextLink}
            href='#pricing'
            color={'home.50'}
            fontWeight={'medium'}
            fontSize={'xs'}
            lineHeight={'short'}
            letterSpacing={'0.01em'}
            _hover={{ textDecoration: 'none', opacity: '0.8' }}
          >
            Pricing
          </Link>
          <Link
            as={NextLink}
            href='#category'
            color={'home.50'}
            fontWeight={'medium'}
            fontSize={'xs'}
            lineHeight={'short'}
            letterSpacing={'0.01em'}
            _hover={{ textDecoration: 'none', opacity: '0.8' }}
          >
            Category
          </Link>
          <Link
            as={NextLink}
            href='/about'
            color={'home.50'}
            fontWeight={'medium'}
            fontSize={'xs'}
            lineHeight={'short'}
            letterSpacing={'0.01em'}
            _hover={{ textDecoration: 'none', opacity: '0.8' }}
          >
            About
          </Link>
        </Flex>
        <Flex>
          <Box position={'absolute'} top={'0px'}>
            <Svgs.GIRL_PODCAST />
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Navbar;
