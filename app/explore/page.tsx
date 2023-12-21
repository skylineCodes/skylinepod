'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Avatar, AvatarGroup, Box, chakra, Flex, Heading, shouldForwardProp, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import BottomNavigation from '@/components/BottomNavigation';
import { Svgs } from '@/assets';
import Input from '@/components/Input';
import { isValidMotionProp, motion } from 'framer-motion';
import Image from 'next/image';
import teddyBear from '../../public/teddy-bear-podcast.png';
import Link from 'next/link';

import './styles.css';
import PodcastCategory from '@/components/PodcastCategory';
import Podcast from '@/components/Podcast';
import FilterModal from '@/components/FilterModal';
import { playlists } from '@/components/Playlist';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox2 = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox3 = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox4 = chakra(motion.div, {
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

const categories = [
  {
    name: 'Comedy'
  },
  {
    name: 'Music'
  },
  {
    name: 'Photography'
  },
  {
    name: 'Entrepreneur'
  },
  {
    name: 'Mental Health'
  },
  {
    name: 'Tech'
  },
]

const Explore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [width, setWidth] = useState<number>(0);
  const [categoriesWidth, setCategoriesWidth] = useState<number>(0);
  const carousel = useRef<any>();
  const categoriesRef = useRef<any>();
  
  const newEpisodes = playlists?.filter(
    (item: any, index: number) => item?.new === true
  );

  useEffect(() => {
    setWidth(carousel?.current?.scrollWidth - carousel?.current?.offsetWidth);
    setCategoriesWidth(
      categoriesRef?.current?.scrollWidth - categoriesRef?.current?.offsetWidth
    );
  }, []);

  return (
    <>
      <FilterModal isOpen={isOpen} onClose={onClose} />
      <Flex
        height={'100vh'}
        direction={'column'}
        justifyContent={isMobile ? 'flex-start' : 'center'}
        alignItems={isMobile ? 'flex-start' : 'center'}
        gap={'20px'}
        backgroundColor={'grey.500'}
      >
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
          p={'0px 10px 10px 10px'}
          mt={'1rem'}
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
              Explore
            </Heading>
            <Text
              fontSize='16px'
              fontWeight={'medium'}
              color={'secondary.50'}
              lineHeight={'24px'}
            >
              Explore from our plethora of podcasts
            </Text>
          </Flex>
          <Flex>
            <Svgs.BELL />
          </Flex>
        </Box>
        <Box>
          <Flex
            direction={'column'}
            gap={'15px'}
            backgroundColor={'grey.10'}
            p={4}
            rounded={6}
            position={'absolute'}
            bottom={'0'}
            right={'0'}
            left={'0'}
            borderRadius={'30px 30px 0px 0px'}
            w={{ base: '100vw' }}
            height={'85vh'}
            overflowX={'hidden'}
            overflowY={'auto'}
            pb={'12vh'}
          >
            <Box>
              <Link href={'/search'}>
                <Input
                  type='text'
                  height={'52px'}
                  placeholder='Search...'
                  leftElement={<Svgs.SEARCH_ICON_GREY />}
                  element={<Svgs.FILTER_OUTLINE />}
                />
              </Link>
            </Box>
            <Box width={'100%'}>
              <ChakraBox
                className='carousel'
                ref={categoriesRef}
                whileTap={{ cursor: 'grabbing' }}
              >
                <ChakraBox3
                  display={'flex'}
                  height={'6vh'}
                  className='inner-topPodcaster'
                  drag={'x'}
                  dragConstraints={{ right: 0, left: -categoriesWidth }}
                >
                  <Box className='toppodcast-box'>
                    <PodcastCategory name={'Filters'} onClick={onOpen} />
                  </Box>
                  {categories?.map((item: any, index: number) => (
                    <Box key={index} className='toppodcast-box'>
                      <PodcastCategory name={item?.name} />
                    </Box>
                  ))}
                </ChakraBox3>
              </ChakraBox>
            </Box>
            <Box width={'100%'}>
              <Flex
                borderRadius={'24px 24px 0px 0px'}
                backgroundColor={'secondary.100'}
                height={'30vh'}
                width={'100%'}
                position={'relative'}
                justifyContent={'center'}
                alignItems={'center'}
              >
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
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'15px'}
                  position={'absolute'}
                  bottom={'-30px'}
                  backgroundColor={'#FEFEFE'}
                  boxShadow={'0px 30px 60px rgba(103, 103, 103, 0.15)'}
                  height={'76px'}
                  minWidth={'310px'}
                  width={'auto'}
                  padding={'12px'}
                >
                  <Flex
                    direction={'row'}
                    gap={'5px'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Box height={'52px'} width={'52px'}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        src={teddyBear}
                        alt='Fluffybuns the destroyer'
                      />
                    </Box>
                    <Box>
                      <Heading
                        fontSize={'12px'}
                        fontWeight={'bold'}
                        color={'secondary.10'}
                        lineHeight={'18px'}
                      >
                        Happiness from Family
                      </Heading>
                      <Text
                        fontSize={'11px'}
                        fontWeight={'medium'}
                        color={'secondary.10'}
                        lineHeight={'18px'}
                      >
                        By Elen Gordany
                      </Text>
                    </Box>
                  </Flex>
                  <Flex>
                    <Box>
                      <AvatarGroup size='sm' max={3}>
                        <Avatar
                          name='Ryan Florence'
                          src='https://bit.ly/ryan-florence'
                        />
                        <Avatar
                          name='Segun Adebayo'
                          src='https://bit.ly/sage-adebayo'
                        />
                        <Avatar
                          name='Kent Dodds'
                          src='https://bit.ly/kent-c-dodds'
                        />
                        <Avatar
                          name='Prosper Otemuyiwa'
                          src='https://bit.ly/prosper-baba'
                        />
                        <Avatar
                          name='Christian Nwamba'
                          src='https://bit.ly/code-beast'
                        />
                      </AvatarGroup>
                    </Box>
                  </Flex>
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
              <ChakraBox4
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
                  {newEpisodes?.map((item: any, index: number) => (
                    <Box key={index} className='podcast-box'>
                      <Podcast image={item?.podcastThumb} title={item?.title} />
                    </Box>
                  ))}
                </ChakraBox2>
              </ChakraBox4>
            </Box>
          </Flex>
        </Box>

        <BottomNavigation />
      </Flex>
    </>
  );
};

export default Explore;
