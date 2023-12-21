'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  chakra,
  Flex,
  Grid,
  Heading,
  shouldForwardProp,
  Text,
  useDisclosure,
  useMediaQuery,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import BottomNavigation from '@/components/BottomNavigation';
import Image from 'next/image';

import '../styles.css';
import BackButton from '@/components/BackButton';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { motion, isValidMotionProp } from 'framer-motion';
import Button from '@/components/Button';
import Podcast from '@/components/Podcast';
import PodcastList from '@/components/PodcastList';
import { playlists } from '@/components/Playlist';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox2 = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const PodcastDetails = () => {
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
      <Flex
        height={'100vh'}
        direction={'column'}
        justifyContent={isMobile ? 'flex-start' : 'center'}
        alignItems={isMobile ? 'flex-start' : 'center'}
        gap={'20px'}
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
          <Flex direction={'row'} justifyContent={'center'}>
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
              gap={'15px'}
              w={{ base: '95vw', sm: '80vw', md: '80vw', lg: '30vw' }}
            >
              <Heading
                as='h1'
                fontSize={'sm'}
                fontWeight={'semibold'}
                color={'secondary.50'}
                lineHeight={'base'}
                noOfLines={1}
              >
                Podcast Details
              </Heading>
            </Flex>
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
            <Flex
              direction={'column'}
              width={'100%'}
              justifyContent={'center'}
              alignItems={'flex-start'}
              gap={'18px'}
              position={'relative'}
            >
              <Box
                borderRadius={'24px 24px 0px 0px'}
                backgroundColor={'secondary.100'}
                minHeight={'25vh'}
                width={'100%'}
                position={'relative'}
              >
                <Box
                  style={{
                    borderRadius: '24px 24px 0px 0px',
                    objectFit: 'cover',
                    background:
                      'linear-gradient(180deg, rgba(82, 110, 160, 0) 0%, #526EA0 88.54%)',
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
                    objectFit: 'cover',
                  }}
                  src={`https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
                  fill={true}
                  alt='Fluffybuns the destroyer'
                />
              </Box>

              <Flex
                direction={'column'}
                justifyContent={'center'}
                alignItems={'flex-start'}
                position={'absolute'}
                bottom={'-60px'}
                right={'0'}
                left={'50%'}
                transform={'translate(-40%, 10%)'}
                zIndex={'25'}
                mb={'1rem'}
                ml={'1rem'}
              >
                <Wrap>
                  <WrapItem
                    border={'4px solid #FEFEFE'}
                    borderRadius={'50%'}
                    width={'100%'}
                  >
                    <Avatar
                      size={'xl'}
                      name='Segun Adebayo'
                      src='https://bit.ly/ryan-florence'
                    />{' '}
                  </WrapItem>
                </Wrap>
              </Flex>
            </Flex>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              mt={'2.5rem'}
            >
              <Heading
                as={'h6'}
                fontSize={'xs'}
                fontWeight={'bold'}
                color={'secondary.10'}
              >
                The jingga Podcast
              </Heading>
              <Text
                as={'span'}
                fontSize={'12px'}
                fontWeight={'medium'}
                color={'#78828A'}
              >
                By Emilion garcia
              </Text>
              <Text
                as={'p'}
                fontSize={'xxs'}
                fontWeight={'medium'}
                color={'secondary.10'}
                lineHeight={'20px'}
                letterSpacing={'0.005em'}
                textAlign={'center'}
              >
                This podcast discusses various inspirational stories from
                various sources that are not widely known to the public.
              </Text>
              <Flex
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'20px'}
                mt={'1rem'}
              >
                <Button
                  text={'Play Podcast'}
                  nextPage='/playing'
                  loading={false}
                  style={{
                    borderRadius: '12px',
                    width: '124px',
                    height: '34px',
                  }}
                />
                <Button
                  text={'Subscribe'}
                  nextPage='/subscription'
                  loading={false}
                  style={{
                    borderRadius: '12px',
                    width: '124px',
                    height: '34px',
                    border: '1px solid #526EA0',
                    backgroundColor: 'transparent',
                    color: '#526EA0',
                  }}
                />
              </Flex>
            </Flex>
            <Flex mt={'1.5rem'} direction={'column'}>
              <Heading
                fontSize={'xs'}
                color={'secondary.10'}
                fontWeight={'bold'}
                lineHeight={'20px'}
              >
                Featured episodes
              </Heading>
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
                      <Podcast image={item?.podcastThumb} title={item?.title} />
                    </Box>
                  ))}
                </ChakraBox2>
              </ChakraBox>
            </Flex>
            <Flex mt={'1.5rem'} direction={'column'}>
              <Heading
                fontSize={'xs'}
                color={'secondary.10'}
                fontWeight={'bold'}
                lineHeight={'20px'}
              >
                Available episodes
              </Heading>
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
            </Flex>
          </Flex>
        </Box>

        <BottomNavigation />
      </Flex>
    </>
  );
};

export default PodcastDetails;
