'use client'

import React from 'react';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import Image from 'next/image';
import burnaBoy from '../../public/burna-boy3.jpg';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

export interface RecentlyPlayedProps {
  no?: number;
}

const RecentlyPlayed = ({ no }: RecentlyPlayedProps) => {
  return (
    <>
      <Flex
        direction={'row'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        gap={'10px'}
        width={'100%'}
      >
        <Box>
          <Text color={'grey.100'} fontSize={'xxs'} fontWeight={'thin'}>
            {no}
          </Text>
        </Box>
        <Grid templateColumns={'1fr 1fr'} width={'100%'}>
          <Flex
            direction={'row'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            gap={'10px'}
          >
            <Image
              style={{
                borderRadius: '4px',
              }}
              src={burnaBoy}
              alt='Fluffybuns the destroyer'
              width={50}
              height={50}
            />
            <Box display={'flex'} flexDirection={'column'} gap={'2px'}>
              <Text
                as={'span'}
                lineHeight={'normal'}
                fontSize={'xs'}
                color={'secondary.50'}
              >
                Cowboy Be-bop Influences
              </Text>
              <Text
                fontSize={'xxs'}
                color={'grey.100'}
                fontWeight={'thin'}
                as={'span'}
              >
                Today we talk about the craziest...
              </Text>
            </Box>
          </Flex>
          <Grid
            templateColumns={'1fr 100px 70px'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box width={'75%'}>
              <Slider aria-label='slider-ex-1' defaultValue={55}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
              </Slider>
            </Box>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'flex-start'}
            >
              {/* <Icon
                        as={MdFavoriteBorder}
                        fill={'grey.0'}
                        width={7}
                        height={7}
                        cursor={'pointer'}
                      /> */}
              <Icon
                as={MdFavorite}
                fill={'error.500'}
                width={7}
                height={7}
                cursor={'pointer'}
              />
            </Flex>
            <Box width={'100%'}>
              <Text color={'grey.100'} fontSize={'xxs'} fontWeight={'thin'}>
                27 mins
              </Text>
            </Box>
          </Grid>
        </Grid>
      </Flex>
    </>
  );
};

export default RecentlyPlayed;