import { Svgs } from '@/assets';
import { Box, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

export interface podcastProps {
  count?: number[];
  onClick?: any;
}

const StarRatings = ({ count, onClick }: podcastProps) => {
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
      p={'10px'}
      onClick={onClick}
    >
      <Flex
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'5px'}
      >
        {count?.map((item: any, index: number) => (
          <Icon key={index} as={AiTwotoneStar} fill={'#FFCD1A'} />
        ))}
      </Flex>
    </Box>
  );
};

export default StarRatings;