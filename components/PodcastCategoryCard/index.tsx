import { Svgs } from '@/assets';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import teddyBear from '../../public/teddy-bear-podcast.png';

export interface podcastProps {
  imageUrl?: string;
  name?: string;
  onClick?: any;
}

const PodcastCategoryCard = ({ imageUrl, name, onClick }: podcastProps) => {
  return (
    <Box
      className='toppodcaster'
      position={'relative'}
      backgroundColor={'#FEFEFE'}
      border={'1px solid #E3E7EC'}
      borderRadius={'16px'}
      height={'120px'}
      width={'158px'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'15px'}
      p={'10px'}
      onClick={onClick}
    >
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
        height={'120px'}
        background={'rgba(82, 110, 160, 0.5)'}
      ></Flex>
      <Flex
        direction={'row'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        position={'absolute'}
        right={'0'}
        left={'50%'}
        transform={'translate(-50%, 35%)'}
        zIndex={'25'}
        height={'120px'}
      >
        <Text fontSize={'xxs'} fontWeight={'bold'} color={'secondary.50'}>
          {name}
        </Text>
      </Flex>
    </Box>
  );
};

export default PodcastCategoryCard;