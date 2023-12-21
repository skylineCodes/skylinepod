'use client'

import React from 'react';
import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import burnaBoy from '../../public/burna-boy3.jpg';
import LatestEpisode from '@/components/LatestEpisode';
import { IoCloseOutline } from 'react-icons/io5';
import { playlists } from '../Playlist';

export interface InputProps {
  //
}

const Featured = () => {

  return (
    <>
      <Box
        backgroundColor={'grey.800'}
        p={'1rem'}
        overflowY={'auto'}
        sx={{
          '::-webkit-scrollbar': {
            width: '0.5rem',
            backgroundColor: '#e5e5e5',
            borderRadius: '0.5rem',
          },
          '::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#e5e5e5',
            borderRadius: '0.5rem',
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'grey.800',
          },
        }}
      >
        <Flex
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'inherit'}
          height={'6vh'}
        >
          <Heading
            as='h3'
            fontSize={'sm'}
            fontWeight={'bold'}
            color={'secondary.50'}
            lineHeight={'base'}
            noOfLines={1}
            height={'inherit'}
            width={'inherit'}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            pb={'2px'}
          >
            Featured
          </Heading>
          <Icon
            pb={'2px'}
            color={'secondary.50'}
            fontSize={'md'}
            fontWeight={'bold'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            cursor={'pointer'}
            as={IoCloseOutline}
          />
        </Flex>
        <Flex direction={'column'} justifyContent={'flex-start'} gap={'20px'}>
          <Box mt={5} width={'100%'} height={'100%'}>
            <Image
              style={{
                borderRadius: '4px',
              }}
              src={`https://deow9bq0xqvbj.cloudfront.net/dir-logo/767235/767235_300x300.jpg`}
              alt='Featured cover'
              width={500}
              height={500}
            />
          </Box>
          <Box>
            <Heading
              as={'h5'}
              color={'secondary.50'}
              fontSize={'sm'}
              fontWeight={'bold'}
            >
              Latest episodes
            </Heading>
            <Flex direction={'column'} gap={'7px'} mt={'7px'} pb={'1rem'}>
              {playlists?.map((item: any, index: number) => (
                <LatestEpisode
                  key={index}
                  title={item?.title}
                  image={item?.podcastThumb}
                  date={item?.date}
                  src={item?.fileUrl}
                  name={item?.artistName}
                />
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Featured;