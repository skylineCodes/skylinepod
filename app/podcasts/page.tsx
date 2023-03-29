'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Center,
  Circle,
  Flex,
  Grid,
  Heading,
  Text,
  useDisclosure,
  useMediaQuery,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import BottomNavigation from '@/components/BottomNavigation';

import './styles.css';
import BackButton from '@/components/BackButton';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

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
                Top Podcaster
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
              direction={'row'}
              height={'15vh'}
              width={'100%'}
              justifyContent={'center'}
              alignItems={'flex-start'}
              gap={'18px'}
            >
              <Box position={'relative'} width={'27vw'} mt={'32px'}>
                <Wrap>
                  <WrapItem
                    border={'2px solid #78828A'}
                    borderRadius={'50%'}
                    p={'3px'}
                    width={'100%'}
                  >
                    <Avatar
                      width={'100%'}
                      height={'100%'}
                      name='Segun Adebayo'
                      src='https://bit.ly/ryan-florence'
                    />{' '}
                  </WrapItem>
                </Wrap>
                <Circle
                  size='27px'
                  bg='#526EA0'
                  color='#78828A'
                  backgroundColor={'#78828A'}
                  border={'2px solid #FEFEFE'}
                  position={'absolute'}
                  top={'10px'}
                  right={'-2px'}
                >
                  <Center>
                    <Box
                      as='span'
                      fontWeight='semibold'
                      fontSize='12px'
                      color={'#FEFEFE'}
                    >
                      2
                    </Box>
                  </Center>
                </Circle>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  mt={'8px'}
                >
                  <Heading
                    as={'h6'}
                    fontSize={'xxs'}
                    fontWeight={'semibold'}
                    color={'secondary.10'}
                  >
                    Lee Rice
                  </Heading>
                  <Text
                    as={'span'}
                    fontSize={'12px'}
                    fontWeight={'medium'}
                    color={'#78828A'}
                  >
                    Polical
                  </Text>
                </Flex>
              </Box>
              <Box position={'relative'} width={'32vw'}>
                <Wrap>
                  <WrapItem
                    border={'2px solid #526EA0'}
                    borderRadius={'50%'}
                    p={'5px'}
                    width={'100%'}
                  >
                    <Avatar
                      width={'100%'}
                      height={'100%'}
                      name='Segun Adebayo'
                      src='https://bit.ly/sage-adebayo'
                    />{' '}
                  </WrapItem>
                </Wrap>
                <Circle
                  size='27px'
                  bg='#526EA0'
                  color='#FEFEFE'
                  border={'2px solid #FEFEFE'}
                  position={'absolute'}
                  top={'10px'}
                  right={'-2px'}
                >
                  <Center>
                    <Box
                      as='span'
                      fontWeight='semibold'
                      fontSize='12px'
                      color={'#FEFEFE'}
                    >
                      1
                    </Box>
                  </Center>
                </Circle>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  mt={'8px'}
                >
                  <Heading
                    as={'h6'}
                    fontSize={'xxs'}
                    fontWeight={'semibold'}
                    color={'secondary.10'}
                  >
                    Ms. Wm Turner
                  </Heading>
                  <Text
                    as={'span'}
                    fontSize={'12px'}
                    fontWeight={'medium'}
                    color={'#78828A'}
                  >
                    Gaming
                  </Text>
                </Flex>
              </Box>
              <Box position={'relative'} width={'22vw'} mt={'35px'}>
                <Wrap>
                  <WrapItem
                    border={'2px solid #A06827'}
                    borderRadius={'50%'}
                    p={'3px'}
                    width={'100%'}
                  >
                    <Avatar
                      width={'100%'}
                      height={'100%'}
                      name='Segun Adebayo'
                      src='https://bit.ly/code-beast'
                    />{' '}
                  </WrapItem>
                </Wrap>
                <Circle
                  size='27px'
                  bg='#526EA0'
                  color='#FEFEFE'
                  border={'2px solid #FEFEFE'}
                  position={'absolute'}
                  top={'10px'}
                  right={'-10px'}
                  backgroundColor={'#A06827'}
                >
                  <Center>
                    <Box
                      as='span'
                      fontWeight='semibold'
                      fontSize='12px'
                      color={'#FEFEFE'}
                    >
                      3
                    </Box>
                  </Center>
                </Circle>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  mt={'8px'}
                >
                  <Heading
                    as={'h6'}
                    fontSize={'xxs'}
                    fontWeight={'semibold'}
                    color={'secondary.10'}
                  >
                    Obie
                  </Heading>
                  <Text
                    as={'span'}
                    fontSize={'12px'}
                    fontWeight={'medium'}
                    color={'#78828A'}
                  >
                    Motivation
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Flex direction={'column'} mt={'5rem'} gap={'16px'}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item: any, index: number) => (
                <Grid
                  gridTemplateColumns={'20px 1fr 100px'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Text
                    color={'secondary.10'}
                    fontSize={'14px'}
                    fontWeight={'semibold'}
                  >
                    {index + 4}
                  </Text>
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    gap={'7px'}
                  >
                    <Wrap>
                      <WrapItem
                        border={'2px solid #78828A'}
                        borderRadius={'50%'}
                        p={'3px'}
                        width={'100%'}
                      >
                        <Avatar
                          size={'sm'}
                          // width={'100%'}
                          // height={'100%'}
                          name='Segun Adebayo'
                          src='https://bit.ly/ryan-florence'
                        />{' '}
                      </WrapItem>
                    </Wrap>
                    <Text>Klea</Text>
                  </Flex>
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-end'}
                    alignItems={'flex-end'}
                  >
                    <Text
                      color={'#9CA4AB'}
                      fontSize={'14px'}
                      fontWeight={'12px'}
                    >
                      Photography
                    </Text>
                  </Flex>
                </Grid>
              ))}
            </Flex>
          </Flex>
        </Box>

        <BottomNavigation />
      </Flex>
    </>
  );
};

export default Explore;
