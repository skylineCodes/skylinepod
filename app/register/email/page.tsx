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
  Icon,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { IoSunny, IoMoon } from 'react-icons/io5';
import Input from '@/components/Input';
import Button from '@/components/Button';
import GoogleButton from '@/components/GoogleButton';
import AppleButton from '@/components/AppleButton';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import { BiHide, BiShow } from 'react-icons/bi';
import BackButton from '@/components/BackButton';
import { useRouter } from 'next/navigation';

const email = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { toggleColorMode } = useColorMode();
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => setShow(!show);
  const handleClickConfirm = () => setShowConfirm(!showConfirm);

  const router = useRouter(); 
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const formBackground = useColorModeValue('secondary.50', 'grey.500');

  return (
    <Flex
      height={'auto'}
      minHeight={'100vh'}
      overflowY={'auto'}
      direction={'column'}
      justifyContent={isMobile ? 'flex-start' : 'center'}
      alignItems={isMobile ? 'flex-start' : 'center'}
      gap={'30px'}
      backgroundColor={'primary.50'}
    >
      {isMobile ? (
        <>
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
              borderRadius={'0px 0px 0px 0px'}
              w={{ base: '100vw' }}
              height={'100vh'}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                mt={'1rem'}
              >
                <Flex
                  direction={'row'}
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'8px'}
                  w={{ base: '95vw', sm: 'inherit', md: '60vw', lg: '30vw' }}
                >
                  <BackButton
                    size={'sm'}
                    Icon={<BsArrowLeft />}
                    ArialLabel={'Navigate left'}
                    onClick={() => router.push('/register')}
                  />
                  <Heading
                    as='h1'
                    fontSize={'xs'}
                    fontWeight={'bold'}
                    color={'secondary.10'}
                    lineHeight={'base'}
                    noOfLines={1}
                    ml={'6rem'}
                  >
                    Sign Up
                  </Heading>
                </Flex>
              </Box>
              <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                mt={'2rem'}
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
                    color={'secondary.10'}
                    lineHeight={'base'}
                    noOfLines={1}
                  >
                    Complete your account
                  </Heading>
                  <Text
                    fontSize='16px'
                    fontWeight={'medium'}
                    color={'secondary.10'}
                    lineHeight={'24px'}
                    textAlign={'center'}
                  >
                    Few more steps to set up your account.
                  </Text>
                </Flex>
              </Box>
              <Box pt={'2rem'}>
                <Stack spacing={3} mb={'2rem'}>
                  <Flex direction={'column'} gap={'32px'}>
                    <Input
                      label='First Name'
                      type='text'
                      placeholder='Enter your first name'
                    />
                    <Input
                      label='Last Name'
                      type='text'
                      placeholder='Enter your last name'
                    />
                    <Input
                      label='E-mail'
                      type='email'
                      placeholder='Enter your email address'
                    />
                    <Input
                      label='Enter Password'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter your password'
                      element={
                        show ? (
                          <BiHide onClick={handleClick} cursor={'pointer'} />
                        ) : (
                          <BiShow onClick={handleClick} cursor={'pointer'} />
                        )
                      }
                    />
                    <Input
                      label='Confirm Password'
                      type={showConfirm ? 'text' : 'password'}
                      placeholder='Enter your password'
                      element={
                        showConfirm ? (
                          <BiHide
                            onClick={handleClickConfirm}
                            cursor={'pointer'}
                          />
                        ) : (
                          <BiShow
                            onClick={handleClickConfirm}
                            cursor={'pointer'}
                          />
                        )
                      }
                    />
                    <Button text={'Sign Up'} />
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
                      marginTop={'10px'}
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
              </Box>
            </Flex>
          </Box>
        </>
      ) : (
        <>
          <Box mt={'1rem'}>
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
                Complete your account
              </Heading>
              <Text
                fontSize='16px'
                fontWeight={'medium'}
                color={'secondary.50'}
                lineHeight={'24px'}
                textAlign={'center'}
              >
                Few more steps to set up your account.
              </Text>
            </Flex>
          </Box>
          <Box mb={'2rem'}>
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
                    label='First Name'
                    type='text'
                    placeholder='Enter your first name'
                  />
                  <Input
                    label='Last Name'
                    type='text'
                    placeholder='Enter your last name'
                  />
                  <Input
                    label='E-mail'
                    type='email'
                    placeholder='Enter your email address'
                  />
                  <Input
                    label='Enter Password'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter your password'
                    element={
                      show ? (
                        <BiHide onClick={handleClick} cursor={'pointer'} />
                      ) : (
                        <BiShow onClick={handleClick} cursor={'pointer'} />
                      )
                    }
                  />
                  <Input
                    label='Confirm Password'
                    type={showConfirm ? 'text' : 'password'}
                    placeholder='Enter your password'
                    element={
                      showConfirm ? (
                        <BiHide
                          onClick={handleClickConfirm}
                          cursor={'pointer'}
                        />
                      ) : (
                        <BiShow
                          onClick={handleClickConfirm}
                          cursor={'pointer'}
                        />
                      )
                    }
                  />
                  <Button text={'Sign Up'} />
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
                    marginTop={'5px'}
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
