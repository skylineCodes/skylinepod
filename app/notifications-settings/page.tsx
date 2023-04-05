'use client';

import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Switch,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';
import { Svgs } from '@/assets';

import './styles.css';
import { useRouter } from 'next/navigation';

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
              Notifications
            </Heading>
          </Flex>
        </Box>
        <Flex
          direction={'column'}
          mt={'24px'}
          p={'12px'}
          border={'1px solid #E3E7EC'}
          backgroundColor={'#FEFEFE'}
          borderRadius={'16px'}
        >
          <Text
            fontSize={'12px'}
            fontWeight={'medium'}
            color={'#66707A'}
            lineHeight={'18px'}
          >
            Messages Notifications
          </Text>

          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            pt={'15px'}
            pb={'15px'}
          >
            <Text
              fontSize={'xxs'}
              fontWeight={'semiibold'}
              color={'secondary.10'}
              lineHeight={'18px'}
            >
              Payment
            </Text>
            <Box>
              <Switch
                size='md'
                width={'2.5rem'}
                sx={{
                  '& span.chakra-switch__track': {
                    width: 'inherit',
                  },
                  '&': {
                    '--switch-track-width': '2.5rem !important',
                  },
                }}
              />
            </Box>
          </Flex>
          <Divider />
          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            pt={'15px'}
            pb={'15px'}
          >
            <Text
              fontSize={'xxs'}
              fontWeight={'semiibold'}
              color={'secondary.10'}
              lineHeight={'18px'}
            >
              New Podcaster
            </Text>
            <Box>
              <Switch
                size='md'
                width={'2.5rem'}
                sx={{
                  '& span.chakra-switch__track': {
                    width: 'inherit',
                  },
                  '&': {
                    '--switch-track-width': '2.5rem !important',
                  },
                }}
              />
            </Box>
          </Flex>
          <Divider />
          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            pt={'15px'}
            pb={'15px'}
          >
            <Text
              fontSize={'xxs'}
              fontWeight={'semiibold'}
              color={'secondary.10'}
              lineHeight={'18px'}
            >
              Comment
            </Text>
            <Box>
              <Switch
                size='md'
                width={'2.5rem'}
                sx={{
                  '& span.chakra-switch__track': {
                    width: 'inherit',
                  },
                  '&': {
                    '--switch-track-width': '2.5rem !important',
                  },
                }}
              />
            </Box>
          </Flex>
          <Divider />
          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            pt={'15px'}
            pb={'15px'}
          >
            <Text
              fontSize={'xxs'}
              fontWeight={'semiibold'}
              color={'secondary.10'}
              lineHeight={'18px'}
            >
              Notification
            </Text>
            <Box>
              <Switch
                size='md'
                width={'2.5rem'}
                sx={{
                  '& span.chakra-switch__track': {
                    width: 'inherit',
                  },
                  '&': {
                    '--switch-track-width': '2.5rem !important',
                  },
                }}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Explore;
