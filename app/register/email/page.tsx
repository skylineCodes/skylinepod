'use client';

import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import {
  Box,
  Stack,
  useColorMode,
  useColorModeValue,
  Flex,
  Heading,
  Text,
  Center,
  Divider,
  useMediaQuery,
} from '@chakra-ui/react';
import { IoSunny, IoMoon } from 'react-icons/io5';
import Input from '@/components/Input';
import Button from '@/components/Button';
import GoogleButton from '@/components/GoogleButton';
import AppleButton from '@/components/AppleButton';
import Link from 'next/link';

const email = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { toggleColorMode } = useColorMode();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const formBackground = useColorModeValue('secondary.50', 'grey.500');

  return (
    <Flex
      height={'100vh'}
      direction={'column'}
      justifyContent={isMobile ? 'flex-start' : 'center'}
      alignItems={isMobile ? 'flex-start' : 'center'}
      gap={'30px'}
      backgroundColor={'primary.50'}
    >
      {isMobile ? (
        <>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            mt={'3rem'}
          >
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'8px'}
              w={{ base: '95vw', sm: '60vw', md: '60vw', lg: '30vw' }}
            >
              <Heading
                as='h1'
                fontSize={'md'}
                fontWeight={'bold'}
                color={'secondary.50'}
                lineHeight={'base'}
                noOfLines={1}
              >
                Create Account
              </Heading>
              <Text
                fontSize='16px'
                fontWeight={'medium'}
                color={'secondary.50'}
                lineHeight={'24px'}
                textAlign={'center'}
              >
                Enjoy the seamless experience with our podcast.
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex
              direction={'column'}
              backgroundColor={formBackground}
              p={6}
              rounded={6}
              position={'absolute'}
              bottom={'0'}
              right={'0'}
              left={'0'}
              borderRadius={'30px 30px 0px 0px'}
              w={{ base: '100vw' }}
              height={'70vh'}
            >
              <Stack spacing={3}>
                <Flex direction={'column'} gap={'32px'}>
                  <Input
                    label='Email'
                    type='email'
                    placeholder='Enter your email address'
                  />
                  <Button text={'Continue with Email'} />
                  <Center display={'flex'} flexDirection={'row'} gap={'12px'}>
                    <Divider
                      width={'62px'}
                      color={'grey.15'}
                      border={'1px solid #6C6C6C'}
                    />
                    <Text
                      fontWeight={'semibold'}
                      fontSize={'14px'}
                      lineHeight={'22px'}
                      color={'grey.15'}
                    >
                      {isMobile ? 'Or' : 'Or continue with'}
                    </Text>
                    <Divider
                      width={'62px'}
                      color={'grey.15'}
                      border={'1px solid #6C6C6C'}
                    />
                  </Center>
                  <Flex
                    direction={'column'}
                    justifyContent={'flex-start'}
                    gap={'16px'}
                  >
                    <GoogleButton
                      text={isMobile ? 'Google' : 'Continue with Google'}
                    />
                    <AppleButton
                      text={isMobile ? 'Apple' : 'Continue with Apple'}
                    />
                  </Flex>
                </Flex>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Text
                    color={'grey.15'}
                    fontSize={'xxs'}
                    fontWeight={'semibold'}
                    marginTop={'40px'}
                    textAlign={'center'}
                  >
                    Already have an account?{' '}
                    <Link
                      href='#'
                      style={{
                        color: '#514eb6',
                      }}
                    >
                      Login
                    </Link>
                  </Text>
                </Flex>
              </Stack>
            </Flex>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <Flex
              direction={'column'}
              alignItems={'center'}
              justifyContent={'center'}
              gap={'8px'}
              w={{ base: '95vw', sm: '60vw', md: '60vw', lg: '30vw' }}
            >
              <Heading
                as='h1'
                fontSize={'md'}
                fontWeight={'bold'}
                color={'secondary.50'}
                lineHeight={'base'}
                noOfLines={1}
              >
                Create Account
              </Heading>
              <Text
                fontSize='16px'
                fontWeight={'medium'}
                color={'secondary.50'}
                lineHeight={'24px'}
                textAlign={'center'}
              >
                Enjoy the seamless experience with our podcast.
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex
              direction={'column'}
              backgroundColor={formBackground}
              p={6}
              rounded={6}
              position={'relative'}
              w={{ base: '95vw', sm: '80vw', md: '60vw', lg: '30vw' }}
              height={'auto'}
            >
              <Stack spacing={3}>
                <Flex direction={'column'} gap={'32px'}>
                  <Input
                    label='Email'
                    type='email'
                    placeholder='Enter your email address'
                  />
                  <Button text={'Continue with Email'} />
                  <Center display={'flex'} flexDirection={'row'} gap={'12px'}>
                    <Divider
                      width={'62px'}
                      color={'grey.15'}
                      border={'1px solid #6C6C6C'}
                    />
                    <Text
                      fontWeight={'semibold'}
                      fontSize={'14px'}
                      lineHeight={'22px'}
                      color={'grey.15'}
                    >
                      {isMobile ? 'Or' : 'Or continue with'}
                    </Text>
                    <Divider
                      width={'62px'}
                      color={'grey.15'}
                      border={'1px solid #6C6C6C'}
                    />
                  </Center>
                  <Flex
                    direction={'column'}
                    justifyContent={'flex-start'}
                    gap={'16px'}
                  >
                    <GoogleButton
                      text={isMobile ? 'Google' : 'Continue with Google'}
                    />
                    <AppleButton
                      text={isMobile ? 'Apple' : 'Continue with Apple'}
                    />
                  </Flex>
                </Flex>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Text
                    color={'grey.15'}
                    fontSize={'xxs'}
                    fontWeight={'semibold'}
                    marginTop={'40px'}
                    textAlign={'center'}
                  >
                    Already have an account?{' '}
                    <Link
                      href='#'
                      style={{
                        color: '#514eb6',
                      }}
                    >
                      Login
                    </Link>
                  </Text>
                </Flex>
              </Stack>
            </Flex>
          </Box>
        </>
      )}
    </Flex>
  );
};

{
  /* <Box
        position={'absolute'}
        top={2}
        right={2}
        cursor={'pointer'}
        onClick={() => {
          toggleColorMode();
          setToggle(!toggle);
        }}
      >
        {toggle ? <IoSunny /> : <IoMoon />}
      </Box> */
}

export default email;
