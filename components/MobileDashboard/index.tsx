'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Text,
  Center,
  Divider,
  useMediaQuery,
  Grid,
  WrapItem,
  Avatar,
  Wrap,
  Container,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Svgs } from '@/assets';
import Image from 'next/image';
import teddyBear from '../../public/teddy-bear-podcast.png';
import Podcast from '../Podcast';
import { motion, isValidMotionProp } from 'framer-motion';

import './styles.css';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox2 = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const podcastData = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9kY2FzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1664477096404-b8469646b867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9kY2FzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1581368087049-7034ed0d1e6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1487537023671-8dce1a785863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661714205805-14e04764217d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1664200913726-f40fd0c4f6ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

const MobileDashboard = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const formBackground = useColorModeValue('secondary.50', 'grey.500');
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<any>();

  useEffect(() => {
    setWidth(carousel?.current?.scrollWidth - carousel?.current?.offsetWidth);
  }, []);

  return (
    <>
      <Flex
        height={'100vh'}
        direction={'column'}
        justifyContent={isMobile ? 'flex-start' : 'center'}
        alignItems={isMobile ? 'flex-start' : 'center'}
        gap={'30px'}
        backgroundColor={'primary.50'}
      >
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
          p={'0px 10px 10px 10px'}
          mt={'2rem'}
        >
          <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            gap={'8px'}
            w={{ base: '95vw', sm: '80vw', md: '80vw', lg: '30vw' }}
          >
            <Heading
              as='h1'
              fontSize={'md'}
              fontWeight={'bold'}
              color={'secondary.50'}
              lineHeight={'base'}
              noOfLines={1}
            >
              Hi, John!{' '}
              <h3
                style={{
                  display: 'inline',
                }}
              >
                &#128075;
              </h3>
            </Heading>
            <Text
              fontSize='16px'
              fontWeight={'medium'}
              color={'secondary.50'}
              lineHeight={'24px'}
            >
              Let's listen to your favorite podcast now
            </Text>
          </Flex>
          <Flex>
            <Svgs.BELL />
          </Flex>
        </Box>
        <Box>
          <Flex
            direction={'column'}
            backgroundColor={'grey.10'}
            p={6}
            rounded={6}
            position={'absolute'}
            bottom={'0'}
            right={'0'}
            left={'0'}
            borderRadius={'30px 30px 0px 0px'}
            w={{ base: '100vw' }}
            height={'85vh'}
          >
            <Box>
              <Box
                borderRadius={'24px 24px 0px 0px'}
                backgroundColor={'secondary.100'}
                height={'25vh'}
                width={'100%'}
                position={'relative'}
              >
                <Box
                  style={{
                    borderRadius: '24px 24px 0px 0px',
                    background:
                      'linear-gradient(270.14deg, rgba(82, 110, 160, 0) 0.13%, #526EA0 75.64%), url(https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9kY2FzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)',
                    height: '100%',
                    zIndex: '20',
                  }}
                  position={'absolute'}
                  top={'0'}
                  right={'0'}
                  left={'0'}
                ></Box>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '24px 24px 0px 0px',
                    transform: 'scaleX(-1)',
                  }}
                  src={teddyBear}
                  alt='Fluffybuns the destroyer'
                />
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
                  position={'absolute'}
                  top={'0'}
                  right={'0'}
                  left={'0'}
                  zIndex={'25'}
                  mt={'2rem'}
                  ml={'1rem'}
                >
                  <Text fontSize={'xxs'} width={'70%'} color={'secondary.50'}>
                    Self Healing
                  </Text>
                  <Heading
                    as={'h4'}
                    fontSize={'sm'}
                    lineHeight={'24px'}
                    width={'70%'}
                    mt={'4px'}
                    color={'secondary.50'}
                  >
                    Know yourself before anyone else
                  </Heading>
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    gap={'10px'}
                    mt={'10px'}
                  >
                    <Wrap>
                      <WrapItem>
                        <Avatar
                          name='Dan Abrahmov'
                          size='xs'
                          src='https://bit.ly/dan-abramov'
                        />
                      </WrapItem>
                    </Wrap>
                    <Text fontSize={'xxs'} color={'secondary.50'}>
                      Alexander elevant
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <Box width={'100%'} mt={'28px'}>
                <Flex
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  width={'inherit'}
                >
                  <Heading
                    fontSize={'xs'}
                    lineHeight={'24px'}
                    fontWeight={'semibold'}
                    letterSpacing={'0.005em'}
                  >
                    Podcasts today
                  </Heading>
                  <Svgs.ROUNDED_RIGHT_SHORT_ARROW />
                </Flex>
                <ChakraBox
                  className='carousel'
                  ref={carousel}
                  whileTap={{ cursor: 'grabbing' }}
                >
                  <ChakraBox2
                    display={'flex'}
                    mt={'16px'}
                    height={'200px'}
                    className='inner-carousel'
                    drag={'x'}
                    dragConstraints={{ right: 0, left: -width }}
                  >
                    {podcastData?.map((item: any, index: number) => (
                      <Box key={index} className='podcast-box'>
                        <Podcast imageUrl={item?.imageUrl} />
                      </Box>
                    ))}
                  </ChakraBox2>
                </ChakraBox>
              </Box>
            </Box>
          </Flex>
        </Box>

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
          >
            <Grid templateColumns={'repeat(4, 1fr)'} placeItems={'center'}>
              <Box>
                <Link href={'/'}>
                  <Svgs.HOME_BLUE />
                </Link>
              </Box>
              <Box>
                <Link href={'/'}>
                  <Svgs.DISCOVERY_WHITE />
                </Link>
              </Box>
              <Box>
                <Link href={'/'}>
                  <Svgs.PLAY_WHITE />
                </Link>
              </Box>
              <Box>
                <Link href={'/'}>
                  <Svgs.PROFILE_WHITE />
                </Link>
              </Box>
            </Grid>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default MobileDashboard;