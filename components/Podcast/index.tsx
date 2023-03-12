import { Svgs } from '@/assets';
import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import podcastCover1 from '../../public/podcast-cover-1.png';

export interface podcastProps {
  imageUrl?: string;
}

const Podcast = ({ imageUrl }: podcastProps) => {
  return (
    <Box className='podcast' height={'100%'} position={'relative'}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        src={`${imageUrl}`}
        fill={true}
        alt='Fluffybuns the destroyer'
      />
      <Flex
        direction={'row'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        position={'absolute'}
        bottom={'0'}
        right={'0'}
        left={'0'}
        zIndex={'25'}
        height={'50px'}
        background={'rgba(82, 110, 160, 0.7)'}
        // backdropFilter={'blur(12.5px)'}
      >
        <Flex
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          height={'inherit'}
          p={'.5rem'}
        >
          <Flex
            direction={'column'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
          >
            <Text
              width={'100%'}
              fontSize={'xxs'}
              color={'secondary.50'}
              lineHeight={'20px'}
              letterSpacing={'0.005em'}
              textAlign={'left'}
            >
              Annie - Stories about wrong impressions
            </Text>
          </Flex>
          <Flex
            direction={'row'}
            justifyContent={'flex-end'}
            alignItems={'center'}
            height={'inherit'}
          >
            <Icon
              as={FaPlay}
              color={'secondary.50'}
              cursor={'pointer'}
              height={'15px'}
              width={'15px'}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Podcast;