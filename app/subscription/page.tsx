'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
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

const Subscription = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [plan, setPlan] = useState('1 Month');

  // useEffect(() => {
  //   setPlan('1 Month');
  // }, []);

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
              Subscribe
            </Heading>
          </Flex>
        </Box>
        <Box>
          <Flex
            direction={'column'}
            gap={'24px'}
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
            // pb={'12vh'}
          >
            <Box width={'100%'} mt={'10px'}>
              <Flex direction={'column'} gap={'24px'}>
                <Grid templateColumns={'1fr 1fr'} gridGap={'10px'}>
                  <Grid
                    templateColumns={'35px 1fr'}
                    gap={'10px'}
                    justifyContent={'flex-start'}
                  >
                    <IconButton
                      aria-label='hd-quality'
                      backgroundColor={'primary.50'}
                      size={'xs'}
                    >
                      <Text
                        fontSize={'12px'}
                        color={'secondary.50'}
                        fontWeight={'semibold'}
                      >
                        HD
                      </Text>
                    </IconButton>
                    <Text
                      fontWeight={'medium'}
                      color={'secondary.10'}
                      fontSize={'xxs'}
                      lineHeight={'shortest'}
                    >
                      Streaming in high quality
                    </Text>
                  </Grid>
                  <Grid
                    templateColumns={'23px 1fr'}
                    gap={'10px'}
                    justifyContent={'flex-start'}
                  >
                    <Svgs.AD_REMOVAL_ICON />
                    <Text
                      fontWeight={'medium'}
                      color={'secondary.10'}
                      fontSize={'xxs'}
                      lineHeight={'shortest'}
                    >
                      Ad-free viewing experience
                    </Text>
                  </Grid>
                </Grid>
                <Grid templateColumns={'1fr 1fr'} gridGap={'10px'}>
                  <Grid
                    templateColumns={'35px 1fr'}
                    gap={'10px'}
                    justifyContent={'flex-start'}
                  >
                    <IconButton
                      backgroundColor={'primary.50'}
                      size={'xs'}
                      aria-label='download'
                      icon={<MdFileDownload fill={'#fefefe'} />}
                    />
                    <Text
                      fontWeight={'medium'}
                      color={'secondary.10'}
                      fontSize={'xxs'}
                      lineHeight={'shortest'}
                    >
                      Download to watch later
                    </Text>
                  </Grid>
                  <Grid
                    templateColumns={'23px 1fr'}
                    gap={'10px'}
                    justifyContent={'flex-start'}
                  >
                    <IconButton
                      aria-label='hd-quality'
                      backgroundColor={'primary.50'}
                      size={'xs'}
                    >
                      <Text
                        fontSize={'12px'}
                        color={'secondary.50'}
                        fontWeight={'semibold'}
                      >
                        CC
                      </Text>
                    </IconButton>
                    <Text
                      fontWeight={'medium'}
                      color={'secondary.10'}
                      fontSize={'xxs'}
                      lineHeight={'shortest'}
                    >
                      Text of different languages
                    </Text>
                  </Grid>
                </Grid>
                <Grid templateColumns={'1fr 1fr'} gridGap={'10px'}>
                  <Grid
                    templateColumns={'35px 1fr'}
                    gap={'10px'}
                    justifyContent={'flex-start'}
                  >
                    <Svgs.DEVICES_ICON />
                    <Text
                      fontWeight={'medium'}
                      color={'secondary.10'}
                      fontSize={'xxs'}
                      lineHeight={'shortest'}
                    >
                      Stream on multiple devices
                    </Text>
                  </Grid>
                  <Grid
                    templateColumns={'23px 1fr'}
                    gap={'10px'}
                    justifyContent={'flex-start'}
                  >
                    <Svgs.AUDIO_ICON />
                    <Text
                      fontWeight={'medium'}
                      color={'secondary.10'}
                      fontSize={'xxs'}
                      lineHeight={'shortest'}
                    >
                      With the best audio quality
                    </Text>
                  </Grid>
                </Grid>
              </Flex>
              <Flex direction={'column'} gap={'24px'} mt={'35px'}>
                <Plan
                  name={'1 Month'}
                  deviceCount={'Just 1 device'}
                  price={'N 1,500'}
                  isChecked={plan === '1 Month' ? true : false}
                  perCharge={'/month'}
                  onChange={() => setPlan('1 Month')}
                />
                <Plan
                  name={'3 Months'}
                  deviceCount={'Up to 2 Devices'}
                  price={'N 3,735'}
                  isChecked={plan === '3 Months' ? true : false}
                  perCharge={'/month'}
                  onChange={() => setPlan('3 Months')}
                />
                <Plan
                  name={'1 Year'}
                  deviceCount={'Up to 5 Devices'}
                  price={'N 14,940'}
                  perCharge={'/year'}
                  isChecked={plan === '1 Year' ? true : false}
                  onChange={() => setPlan('1 Year')}
                />
              </Flex>
            </Box>
            <Box width={'100%'} mt={'10px'}>
              <Flex>
                <Button
                  text={'Subscribe'}
                  nextPage='/payment-method'
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
