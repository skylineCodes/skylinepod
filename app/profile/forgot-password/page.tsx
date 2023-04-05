'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Grid,
  Heading,
  Radio,
  RadioGroup,
  Text,
  Textarea,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Svgs } from '@/assets';

import './styles.css';
import burnaBoy from '../../public/burna-boy3.jpg';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Input from '@/components/Input';
import Button from '@/components/Button';
import ProfilePictureModal from '@/components/ProfilePictureModal';
import { BiHide, BiShow } from 'react-icons/bi';

const Explore = () => {
  const router = useRouter();

  return (
    <>
      <Box backgroundColor={'grey.0'} p={'12px'}>
        <Box
          display={'grid'}
          gridTemplateColumns={'40px 1fr 35px'}
          gridGap={'10px'}
          width={'100%'}
          mt={'1rem'}
        >
          <Flex justifyContent={'center'} alignItems={'center'}>
            <Svgs.ARROW_BACK_WHITE onClick={() => router.back()} />
          </Flex>
          <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'8px'}
          >
            <Heading
              as='h1'
              fontSize={'xs'}
              fontWeight={'bold'}
              color={'secondary.10'}
              lineHeight={'base'}
              noOfLines={1}
            >
              Forgot Password
            </Heading>
          </Flex>
        </Box>
        <Box mt={'15px'}>
          <Flex
            p={'12px'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'10px'}
            backgroundColor={'#F5F5F5'}
            borderRadius={'8px'}
          >
            <Svgs.CAUTION_HARSH_ICON />
            <Text
              fontSize={'12px'}
              fontWeight={'semibold'}
              lineHeight={'22px'}
              color='secondary.10'
              textAlign={'left'}
              width={'80%'}
            >
              We will send the OTP code to your email for security in forgetting
              your password
            </Text>
          </Flex>
        </Box>
        <Box mt={'35px'} minHeight={'60vh'}>
          <Flex direction={'column'} gap={'24px'}>
            <Input
              label='Email'
              type='email'
              placeholder='Enter your email address'
              style={{
                border: '1px solid #526EA0',
                backgroundColor: '#FEFEFE',
              }}
            />
          </Flex>
        </Box>
        <Box>
          <Button
            text={'Save Changes'}
            nextPage='/subscribe'
            loading={false}
            style={{
              width: '100%',
              border: '1px solid #526EA0',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Explore;
