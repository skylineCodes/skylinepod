import { Svgs } from '@/assets';
import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export interface podcastProps {
  name?: string;
}

const PodcastCategory = ({ name }: podcastProps) => {
  return (
    <Box
      className='toppodcaster'
      position={'relative'}
      backgroundColor={'#FEFEFE'}
      border={'1px solid #E3E7EC'}
      borderRadius={'16px'}
      height={'36px'}
      width={'auto'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'15px'}
    >
      <Flex
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'10px'}
      >
        {name === 'Filters' ? <Svgs.FILTER /> : null}
        <Heading
          as={'h4'}
          fontSize={'xxs'}
          lineHeight={'20px'}
          fontWeight={'medium'}
          color={'secondary.10'}
        >
          {name}
        </Heading>
      </Flex>
    </Box>
  );
}

export default PodcastCategory;