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
  HStack,
  PinInput,
  PinInputField,
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

const OTP = () => {
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
                    onClick={() => router.back()}
                  />
                  <Flex
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={'100%'}
                  >
                    <Heading
                      as='h1'
                      fontSize={'xs'}
                      fontWeight={'bold'}
                      color={'secondary.10'}
                      lineHeight={'base'}
                      noOfLines={1}
                      textAlign={'center'}
                    ></Heading>
                  </Flex>
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
                    Enter OTP
                  </Heading>
                  <Text
                    fontSize='16px'
                    fontWeight={'medium'}
                    color={'secondary.10'}
                    lineHeight={'24px'}
                    textAlign={'center'}
                  >
                    We have just sent you 4 digit code via your email
                    example@gmail.com
                  </Text>
                </Flex>
              </Box>
              <Box pt={'2rem'}>
                <Stack spacing={3} mb={'2rem'}>
                  <Flex
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'40px'}
                    width={'100%'}
                  >
                    <HStack gap={'24px'}>
                      <PinInput size='lg'>
                        <PinInputField
                          borderRadius={'24px'}
                          backgroundColor={'secondary.50'}
                          border={'1px solid #526EA0'}
                        />
                        <PinInputField
                          borderRadius={'24px'}
                          backgroundColor={'secondary.50'}
                          border={'1px solid #526EA0'}
                        />
                        <PinInputField
                          borderRadius={'24px'}
                          backgroundColor={'secondary.50'}
                          border={'1px solid #526EA0'}
                          value={''}
                        />
                        <PinInputField
                          borderRadius={'24px'}
                          backgroundColor={'secondary.50'}
                          border={'1px solid #526EA0'}
                        />
                      </PinInput>
                    </HStack>
                    <Button
                      text={'Continue'}
                      style={{
                        width: '100%',
                      }}
                    />
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
                      Didn&apos;t receive code?{' '}
                      <Link
                        href='#'
                        style={{
                          color: '#514eb6',
                        }}
                      >
                        Resend Code
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
                Enter OTP
              </Heading>
              <Text
                fontSize='16px'
                fontWeight={'medium'}
                color={'secondary.50'}
                lineHeight={'24px'}
                textAlign={'center'}
              >
                We have just sent you 4 digit code via your email
                example@gmail.com
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
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'40px'}
                  width={'100%'}
                >
                  <HStack>
                    <PinInput size='lg'>
                      <PinInputField
                        borderRadius={'24px'}
                        backgroundColor={'secondary.50'}
                        border={'1px solid #526EA0'}
                      />
                      <PinInputField
                        borderRadius={'24px'}
                        backgroundColor={'secondary.50'}
                        border={'1px solid #526EA0'}
                      />
                      <PinInputField
                        borderRadius={'24px'}
                        backgroundColor={'secondary.50'}
                        border={'1px solid #526EA0'}
                        value={''}
                      />
                      <PinInputField
                        borderRadius={'24px'}
                        backgroundColor={'secondary.50'}
                        border={'1px solid #526EA0'}
                      />
                    </PinInput>
                  </HStack>
                  <Button
                    text={'Continue'}
                    style={{
                      width: '100%',
                    }}
                  />
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
                    Didn&apos;t receive code?{' '}
                    <Link
                      href='#'
                      style={{
                        color: '#514eb6',
                      }}
                    >
                      Resend Code
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

export default OTP;
