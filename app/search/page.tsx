'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Avatar, AvatarGroup, Box, chakra, Flex, Grid, Heading, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import BottomNavigation from '@/components/BottomNavigation';
import { Svgs } from '@/assets';
import Input from '@/components/Input';
import { isValidMotionProp, motion } from 'framer-motion';

import './styles.css';
import BackButton from '@/components/BackButton';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import SearchCategories from '@/components/SearchCategories';
import SearchResults from '@/components/SearchResults';

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
                fontSize={'xs'}
                fontWeight={'semibold'}
                color={'secondary.50'}
                lineHeight={'base'}
                noOfLines={1}
              >
                Search
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
            <Box>
              <Input
                type='text'
                height={'52px'}
                placeholder='Search...'
                leftElement={<Svgs.SEARCH_ICON_GREY />}
                element={<Svgs.FILTER_OUTLINE />}
              />
            </Box>
            {/* <SearchCategories
              categoriesRef={categoriesRef}
              categoriesWidth={categoriesWidth}
            /> */}
            <SearchResults />
          </Flex>
        </Box>

        <BottomNavigation />
      </Flex>
    </>
  );
};

export default Explore;
