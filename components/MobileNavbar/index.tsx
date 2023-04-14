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
        backgroundColor={'#0D141EEB'}
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
              <Svgs.LOGO />
            </Box>
            <Box>
              <Icon as={MdClose} onClick={() => handleClose()} />
              {/* <Svgs.CLOSE_CIRCLE onClick={() => handleClose()} /> */}
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
                fontSize={'xs'}
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'6px'}
                outline={'none'}
                _hover={{ textDecoration: 'none', opacity: '0.8' }}
              >
                <Text
                  fontWeight={'semibold'}
                  fontSize={'lg'}
                  color={'grey.0'}
                  lineHeight={'107%'}
                  letterSpacing={'0.01em'}
                >
                  Services
                </Text>
                <Icon as={IoChevronDownOutline} color={'grey.0'} />
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
                Individuals
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
                About
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
                Contact
              </Link>
            </Flex>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'16px'}
              mt={'70px'}
            >
              <Button
                text='Sign up'
                // fontSize={'xs'}
                // fontWeight={'semibold'}
                // color={'primary.50'}
                // height={'50px'}
                // width={'230px'}
                style={{
                  border: '2px solid #FFFFFF',
                  borderRadius: '60px',
                  backgroundColor: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                  },
                }}
              />
              <Button
                text='Log in'
                // fontSize={'xs'}
                // fontWeight={'semibold'}
                // color={'grey.0'}
                // height={'50px'}
                // width={'230px'}
                style={{
                  border: '2px solid #FFFFFF',
                  borderRadius: '60px',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              />
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileNavbar;
