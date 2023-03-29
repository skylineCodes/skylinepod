'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import BottomNavigation from '@/components/BottomNavigation';
import { Svgs } from '@/assets';

import './styles.css';
import { useRouter } from 'next/navigation';
import BackButton from '@/components/BackButton';
import { BsArrowLeft } from 'react-icons/bs';
import { MdFileDownload } from 'react-icons/md';
import Plan from '@/components/Plan';
import Button from '@/components/Button';
import PaymentMethod from '@/components/PaymentMethod';
import PaymentSuccessModal from '@/components/PaymentSuccessModal';

const Subscription = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [plan, setPlan] = useState('1 Month');

  return (
    <>
      <PaymentSuccessModal isOpen={isOpen} onClose={onClose} />
      <Flex
        height={'100vh'}
        direction={'column'}
        justifyContent={isMobile ? 'flex-start' : 'center'}
        alignItems={isMobile ? 'flex-start' : 'center'}
        gap={'20px'}
        backgroundColor={'primary.50'}
      >
        <Box
          display={'grid'}
          gridTemplateColumns={'35px 1fr 35px'}
          gridGap={'10px'}
          width={'100%'}
          p={'0px 10px 10px 10px'}
          mt={'2rem'}
        >
          <Flex justifyContent={'center'} alignItems={'center'}>
            <BackButton
              size={'sm'}
              Icon={<BsArrowLeft />}
              ArialLabel={'Navigate left'}
              onClick={() => router.back()}
            />
          </Flex>
          <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'8px'}
          >
            <Heading
              as='h1'
              fontSize={'md'}
              fontWeight={'bold'}
              color={'secondary.50'}
              lineHeight={'base'}
              noOfLines={1}
            >
              Payment Method
            </Heading>
          </Flex>
        </Box>
        <Box>
          <Flex
            direction={'column'}
            gap={'50px'}
            backgroundColor={'grey.0'}
            p={4}
            rounded={6}
            position={'absolute'}
            bottom={'0'}
            right={'0'}
            left={'0'}
            borderRadius={'30px 30px 0px 0px'}
            w={{ base: '100vw' }}
            height={'87vh'}
            overflowX={'hidden'}
            overflowY={'auto'}
          >
            <Box width={'100%'} mt={'20px'} minHeight={'65vh'}>
              <Flex direction={'column'} gap={'30px'}>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'7px'}
                >
                  <PaymentMethod />
                  <Divider
                    width={'80%'}
                    border={'1px solid #E3E7EC'}
                    size={'lg'}
                  />
                </Flex>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'7px'}
                >
                  <PaymentMethod />
                  <Divider
                    width={'80%'}
                    border={'1px solid #E3E7EC'}
                    size={'lg'}
                  />
                </Flex>
              </Flex>
            </Box>
            <Box width={'100%'}>
              <Flex>
                <Button
                  text={'Select Payment'}
                  onClick={onOpen}
                  loading={false}
                  style={{
                    borderRadius: '12px',
                    backgroundColor: '#526EA0',
                    width: '100%',
                  }}
                />
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* <BottomNavigation /> */}
      </Flex>
    </>
  );
};

export default Subscription;
