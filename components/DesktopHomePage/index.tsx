'use client';

import React from 'react';
import {
  Box, Flex, Grid, Heading, Text,
} from '@chakra-ui/react';
import Navbar from '../Navbar';
import Button from '../Button';
import { Svgs } from '@/assets';

const DesktopHomePage = () => {
  return (
    <Box>
      <Box
        position={'relative'}
        height={'90vh'}
        width={'100%'}
        _after={{
          width: '100%',
          height: '100%',
          content: '""',
          position: 'absolute',
          zIndex: '10',
          top: '0',
          left: '0',
          backgroundColor: 'grey.0',
        }}
      >
        <Navbar />
        <Grid
          templateColumns={'1fr 1fr'}
          zIndex={'20'}
          maxWidth={'90%'}
          width={'100%'}
          height={'83vh'}
          margin={'auto'}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            gap={'30px'}
            zIndex={'20'}
          >
            <Box>
              <Text
                color={'primary.500'}
                fontSize={'xs'}
                lineHeight={'short'}
                fontWeight={'medium'}
              >
                New Session Available
              </Text>
            </Box>
            <Box>
              <Heading
                color={'home.50'}
                fontSize={'78px'}
                lineHeight={'75px'}
                fontWeight={'medium'}
              >
                The Best Place To Listen To Your Favourite{' '}
                <Text
                  as={'span'}
                  color={'primary.500'}
                  fontSize={'78px'}
                  fontWeight={'medium'}
                >
                  Podcasts.
                </Text>
              </Heading>
            </Box>
            <Box>
              <Text
                color={'secondary.10'}
                fontSize={'xs'}
                fontWeight={'medium'}
              >
                Lorem ipsum dolor sit amet consectetur. Ornare nascetur odio
                massa sagittis. Urna eu proin ut facilisis. Magna feugiat ante
                id posuere ac ultricies dignissim nibh eget. Tincidunt volutpat
                nisi nisl sed.
              </Text>
            </Box>
            <Flex gap={'30px'} justifyContent={'center'} alignItems={'center'}>
              <Button
                text={'Start trial for free'}
                nextPage='/signin/email'
                loading={false}
                style={{
                  backgroundColor: 'primary.500',
                  borderRadius: '4px',
                  fontWeight: '500',
                  lineHeight: '23px',
                }}
              />
              <Flex gap={'7px'} cursor={'pointer'}>
                <Svgs.HOME_PLAYCIRCLE />
                <Text color={'#1C1916C7'} fontSize={'18px'}>
                  How It Works
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            zIndex={'20'}
            position={'relative'}
          >
            <Box position={'absolute'} bottom={'0px'}>
              <Svgs.BOY_PODCAST />
            </Box>
            <Box position={'absolute'} bottom={'0px'} right={'57px'}>
              <Svgs.MUSIC_WAVE />
            </Box>
          </Box>
        </Grid>
      </Box>
      <Box
        position={'relative'}
        height={'400px'}
        width={'100%'}
        _after={{
          width: '100%',
          height: '100%',
          content: '""',
          position: 'absolute',
          zIndex: '10',
          top: '0',
          left: '0',
          backgroundColor: '#EEEEF8',
        }}
      >
        <Flex
          direction={'column'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          pt={'64px'}
          gap={'15px'}
          zIndex={'20'}
        >
          <Heading
            color={'home.50'}
            fontSize={'45px'}
            fontWeight={'medium'}
            lineHeight={'57px'}
            zIndex={'20'}
          >
            Most popular creators
          </Heading>
          <Text zIndex={'20'} width={'40%'} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur. Consectetur lectus sit eget
            dis amet lacus. Cras fringilla non faucibus et mi. Mi sit nibh{' '}
          </Text>
          <Button
            text={'View All'}
            nextPage='/'
            loading={false}
            style={{
              backgroundColor: 'primary.500',
              borderRadius: '4px',
              fontWeight: '500',
              lineHeight: '23px',
              zIndex: '20',
              height: '45px',
            }}
          />
        </Flex>
        <Grid
          templateColumns={'1fr 1fr 1fr'}
          gridGap={'24px'}
          maxWidth={'90%'}
          margin={'auto'}
          mt={'70px'}
        >
          <Grid
            templateColumns={'1fr 1fr'}
            gridGap={'15px'}
            height={'233px'}
            width={'30vw'}
            backgroundColor={'#F4651C'}
            borderRadius={'20px'}
            zIndex={'20'}
            p={'14px'}
            position={'relative'}
          >
            <Box position={'absolute'} bottom={'0'} left={'-30px'}>
              <Svgs.BOY_POINTING />
            </Box>
            <Box></Box>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'flex-start'}
              gap={'24px'}
            >
              <Heading
                fontSize={'21px'}
                fontWeight={'semibold'}
                color={'#000000'}
                lineHeight={'26px'}
              >
                Get to know about user research
              </Heading>
              <Text
                fontSize={'18px'}
                fontWeight={'medium'}
                color={'#000000'}
                lineHeight={'22px'}
              >
                Lorem ipsum dolor sit amet consectetur. Lacus et eu.
              </Text>
              <Button
                text={'Play Now'}
                nextPage='/'
                loading={false}
                style={{
                  backgroundColor: '#1C1916',
                  borderRadius: '6px',
                  fontWeight: '500',
                  lineHeight: '23px',
                  zIndex: '20',
                  height: '40px',
                  width: '137px',
                }}
              />
            </Flex>
          </Grid>
          <Grid
            templateColumns={'1fr 1fr'}
            gridGap={'15px'}
            height={'233px'}
            width={'30vw'}
            backgroundColor={'#E7A72B'}
            borderRadius={'20px'}
            zIndex={'20'}
            p={'14px'}
            position={'relative'}
          >
            <Box position={'absolute'} bottom={'0'} left={'30px'}>
              <Svgs.WOMAN_POINTING />
            </Box>
            <Box></Box>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'flex-start'}
              gap={'24px'}
            >
              <Heading
                fontSize={'21px'}
                fontWeight={'semibold'}
                color={'#000000'}
                lineHeight={'26px'}
              >
                Get to know about user research
              </Heading>
              <Text
                fontSize={'18px'}
                fontWeight={'medium'}
                color={'#000000'}
                lineHeight={'22px'}
              >
                Lorem ipsum dolor sit amet consectetur. Lacus et eu.
              </Text>
              <Button
                text={'Play Now'}
                nextPage='/'
                loading={false}
                style={{
                  backgroundColor: '#1C1916',
                  borderRadius: '6px',
                  fontWeight: '500',
                  lineHeight: '23px',
                  zIndex: '20',
                  height: '40px',
                  width: '137px',
                }}
              />
            </Flex>
          </Grid>
          <Grid
            templateColumns={'1fr 1fr'}
            gridGap={'15px'}
            height={'233px'}
            width={'30vw'}
            backgroundColor={'#20ADA2'}
            borderRadius={'20px'}
            zIndex={'20'}
            p={'14px'}
            position={'relative'}
          >
            <Box position={'absolute'} bottom={'0'} left={'30px'}>
              <Svgs.MAN_POINTING />
            </Box>
            <Box></Box>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'flex-start'}
              gap={'24px'}
            >
              <Heading
                fontSize={'21px'}
                fontWeight={'semibold'}
                color={'#000000'}
                lineHeight={'26px'}
              >
                Get to know about user research
              </Heading>
              <Text
                fontSize={'18px'}
                fontWeight={'medium'}
                color={'#000000'}
                lineHeight={'22px'}
              >
                Lorem ipsum dolor sit amet consectetur. Lacus et eu.
              </Text>
              <Button
                text={'Play Now'}
                nextPage='/'
                loading={false}
                style={{
                  backgroundColor: '#1C1916',
                  borderRadius: '6px',
                  fontWeight: '500',
                  lineHeight: '23px',
                  zIndex: '20',
                  height: '40px',
                  width: '137px',
                }}
              />
            </Flex>
          </Grid>
        </Grid>
      </Box>
      <Box
        position={'relative'}
        height={'80vh'}
        width={'100%'}
        _after={{
          width: '100%',
          height: '100%',
          content: '""',
          position: 'absolute',
          zIndex: '10',
          top: '0',
          left: '0',
          backgroundColor: '#FCDDEC80',
        }}
      ></Box>
    </Box>
  );
};

export default DesktopHomePage;
