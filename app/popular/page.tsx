'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Avatar, AvatarGroup, Box, chakra, Flex, Grid, Heading, Text, useDisclosure, useMediaQuery, Wrap, WrapItem } from '@chakra-ui/react';
import BottomNavigation from '@/components/BottomNavigation';
import { Svgs } from '@/assets';

import './styles.css';
import BackButton from '@/components/BackButton';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PodcastList from '@/components/PodcastList';

const Explore = () => {
  const router = useRouter(); 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [width, setWidth] = useState<number>(0);
  const [categoriesWidth, setCategoriesWidth] = useState<number>(0);
  const carousel = useRef<any>();
  const categoriesRef = useRef<any>();
  
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
                Popular Podcast
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
            <Box
              borderRadius={'24px 24px 0px 0px'}
              backgroundColor={'secondary.100'}
              minHeight={'50vh'}
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
              <Flex
                direction={'column'}
                justifyContent={'center'}
                alignItems={'flex-start'}
                position={'absolute'}
                bottom={'0'}
                right={'0'}
                left={'0'}
                zIndex={'25'}
                mb={'1rem'}
                ml={'1rem'}
              >
                <Flex direction={'row'}>
                  <Flex direction={'column'}>
                    <Text fontSize={'xxs'} width={'70%'} color={'secondary.50'}>
                      Self Healing
                    </Text>
                    <Heading
                      as={'h4'}
                      fontSize={'sm'}
                      lineHeight={'24px'}
                      width={'90%'}
                      mt={'4px'}
                      color={'secondary.50'}
                    >
                      Know yourself before anyone else
                    </Heading>
                  </Flex>
                  <Flex>
                    <Svgs.PLAY_ROUND_WHITE />
                  </Flex>
                </Flex>
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
            <Box width={'100%'}>
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
                {[1, 2, 3, 4, 5, 6, 7]?.map((item: any, index: number) => (
                  <PodcastList key={index} />
                ))}
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
