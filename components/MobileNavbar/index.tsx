'use client';

import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Flex,
  Box,
  Text,
  Icon,
} from '@chakra-ui/react';
import { Svgs } from '@/assets';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { IoChevronDownOutline } from 'react-icons/io5';
import Button from '../Button';
import { MdClose } from 'react-icons/md';

const MobileNavbar = ({ handleClose, isOpen }: any) => {

  return (
    <Drawer placement={'top'} onClose={handleClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent
        backgroundColor={'primary.500'}
        height={'100vh'}
        maxWidth={'90%'}
      >
        <DrawerHeader>
          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'100%'}
          >
            <Box>
              <Svgs.LOGO_WHITE />
            </Box>
            <Box>
              <Icon
                as={MdClose}
                onClick={() => handleClose()}
                fill={'grey.0'}
              />
            </Box>
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Flex direction={'column'} mt={'2.5rem'} gap={'1rem'}>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'40px'}
            >
              <Link
                as={NextLink}
                href='/home'
                color={'grey.0'}
                fontSize={'lg'}
                fontWeight={'semibold'}
                lineHeight={'107%'}
                letterSpacing={'0.01em'}
                _hover={{ textDecoration: 'none', opacity: '0.8' }}
              >
                Features
              </Link>
              <Link
                as={NextLink}
                href='/home'
                color={'grey.0'}
                fontSize={'lg'}
                fontWeight={'semibold'}
                lineHeight={'107%'}
                letterSpacing={'0.01em'}
                _hover={{ textDecoration: 'none', opacity: '0.8' }}
              >
                How It Works
              </Link>
              <Link
                as={NextLink}
                href='/home'
                color={'grey.0'}
                fontSize={'lg'}
                fontWeight={'semibold'}
                lineHeight={'107%'}
                letterSpacing={'0.01em'}
                _hover={{ textDecoration: 'none', opacity: '0.8' }}
              >
                Pricing
              </Link>
              <Link
                as={NextLink}
                href='/home'
                color={'grey.0'}
                fontSize={'lg'}
                fontWeight={'semibold'}
                lineHeight={'107%'}
                letterSpacing={'0.01em'}
                _hover={{ textDecoration: 'none', opacity: '0.8' }}
              >
                Category
              </Link>
              <Link
                as={NextLink}
                href='/home'
                color={'grey.0'}
                fontSize={'lg'}
                fontWeight={'semibold'}
                lineHeight={'107%'}
                letterSpacing={'0.01em'}
                _hover={{ textDecoration: 'none', opacity: '0.8' }}
              >
                About
              </Link>
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileNavbar;
