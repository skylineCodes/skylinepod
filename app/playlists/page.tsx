'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  chakra,
  Flex,
  Grid,
  Heading,
  IconButton,
  shouldForwardProp,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import BottomNavigation from '@/components/BottomNavigation';
import { Svgs } from '@/assets';

import './styles.css';
import burnaBoy from '../../public/burna-boy3.jpg';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PodcastList from '@/components/PodcastList';
import { motion, isValidMotionProp } from 'framer-motion';
import Podcast from '@/components/Podcast';
import CommentModal from '@/components/CommentModal';
import { playlists } from '@/components/Playlist';
import { currentPlayer } from '@/redux/reducers/player';
import { useDispatch } from 'react-redux';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox2 = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Explore = () => {
  const router = useRouter();
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
      <CommentModal isOpen={isOpen} onClose={onClose} />
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
              Playlist
            </Heading>
            <Text
              fontSize='16px'
              fontWeight={'medium'}
              color={'secondary.50'}
              lineHeight={'24px'}
            >
              Play your favorite podcast comfortably
            </Text>
          </Flex>
          <Flex>
            <Svgs.BELL />
          </Flex>
        </Box>
        <Box>
          <Flex
            direction={'column'}
            gap={'24px'}
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
            <Box
              borderRadius={'24px 24px 0px 0px'}
              minHeight={'25vh'}
              width={'100%'}
              position={'relative'}
              backgroundColor={'grey.500'}
              p={'23px 19px'}
            >
              <Flex direction={'column'}>
                <Flex>
                  <Text color={'grey.0'} fontSize={'xs'} fontWeight={'bold'}>
                    25
                  </Text>
                  <Text fontSize={'xxs'} color={'rgba(254, 254, 254, 0.5)'}>
                    /35
                  </Text>
                </Flex>
                <Flex
                  mt={'12px'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Flex direction={'column'}>
                    <Heading
                      fontSize={'20px'}
                      fontWeight={'semibold'}
                      lineHeight={'28px'}
                      color={'grey.0'}
                    >
                      SkyCast Podcast
                    </Heading>
                    <Text
                      fontSize={'12px'}
                      fontWeight={'medium'}
                      lineHeight={'20px'}
                      color={'grey.0'}
                      as={'span'}
                    >
                      Enjoy the day with sound
                    </Text>
                  </Flex>
                  <Flex>
                    <IconButton
                      aria-label='Search database'
                      icon={<Svgs.COMMENT_ICON />}
                      backgroundColor={'rgba(255, 255, 255, 0.2)'}
                      borderRadius={'50%'}
                      onClick={onOpen}
                    />
                  </Flex>
                </Flex>
              </Flex>
              <Box
                position={'absolute'}
                bottom={'-30%'}
                right={'0'}
                left={'6%'}
                transform={'translate(0%, 10%)'}
                minWidth={'289px'}
                width={'89%'}
                height={'89px'}
              >
                <Flex
                  width={'100%'}
                  justifyContent={'space-between'}
                  cursor={'pointer'}
                  backgroundColor={'grey.0'}
                  boxShadow={'0px 30px 60px rgba(103, 103, 103, 0.15)'}
                >
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'flex-start'}
                    gap={'7px'}
                  >
                    <Box width={'70px'} height={'100%'} p={'5px'}>
                      <Image
                        style={{
                          borderRadius: '4px',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        src={burnaBoy}
                        alt='Fluffybuns the destroyer'
                        width={70}
                      />
                    </Box>
                    <Flex
                      direction={'column'}
                      justifyContent={'space-between'}
                      alignItems={'flex-start'}
                    >
                      <Flex direction={'column'} minHeight={'45px'}>
                        <Heading
                          as={'h6'}
                          color={'secondary.10'}
                          fontSize={'xxs'}
                          fontWeight={'bold'}
                        >
                          Mind hack talks
                        </Heading>
                        <Text
                          as={'span'}
                          color={'grey.100'}
                          fontSize={'xxs'}
                          fontWeight={'normal'}
                        >
                          By Alixen Elior
                        </Text>
                      </Flex>
                      <Box>
                        <Text
                          color={'secondary.10'}
                          fontSize={'10px'}
                          fontWeight={'medium'}
                        >
                          11:25/12:35
                        </Text>
                      </Box>
                    </Flex>
                  </Flex>
                  <Flex position={'absolute'} right={'-15px'} bottom={'-10px'}>
                    <Box>
                      <Svgs.PAUSE_ROUND_BLUE />
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
            <Box width={'100%'} mt={'50px'}>
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
                  {newEpisodes?.map((item: any, index: number) => (
                    <Box key={index} className='podcast-box'>
                      <Podcast
                        image={item?.podcastThumb}
                        title={item?.title}
                        artistName={item?.artistName}
                        fileUrl={item?.fileUrl}
                      />
                    </Box>
                  ))}
                </ChakraBox2>
              </ChakraBox>
            </Box>
            <Box width={'100%'} mt={'10px'}>
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
                  Recommendation
                </Heading>
                <Svgs.ROUNDED_RIGHT_SHORT_ARROW />
              </Flex>
              <Flex direction={'column'} gap={'10px'} mt={'15px'}>
                {playlists?.map(
                  (item: any, index: number) =>
                    item?.recommended === true && (
                      <PodcastList
                        key={index}
                        src={item?.fileUrl}
                        title={item?.title}
                        image={item.podcastThumb}
                        artistName={item?.artistName}
                      />
                    )
                )}
              </Flex>
            </Box>
          </Flex>
        </Box>

        <BottomNavigation />
      </Flex>
    </>
  );
};

export default Explore;
