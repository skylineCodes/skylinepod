import { Svgs } from '@/assets';
import { Box, Flex, Text, Icon, Wrap, WrapItem, Avatar, Heading } from '@chakra-ui/react';
import React from 'react';
import podcastCover1 from '../../public/podcast-cover-1.png';

export interface podcastProps {
  imageUrl?: string;
}

const TopPodcasters = ({ imageUrl }: podcastProps) => {
  return (
    <Box
      className='toppodcaster'
      position={'relative'}
      backgroundColor={'#FEFEFE'}
      border={'1px solid #E3E7EC'}
      borderRadius={'24px'}
      height={'56px'}
      minWidth={'143px'}
      width={'auto'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'15px'}
      pt={'10px'}
      pb={'10px'}
    >
      <Wrap>
        <WrapItem>
          <Avatar
            name='Dan Abrahmov'
            size='md'
            src='https://bit.ly/dan-abramov'
          />
        </WrapItem>
      </Wrap>
      <Flex direction={'column'} gap={'4px'}>
        <Heading
          as={'h4'}
          fontSize={'xxs'}
          lineHeight={'20px'}
          fontWeight={'medium'}
          color={'secondary.10'}
        >
          Dan Abramov
        </Heading>
        <Text
          fontSize={'xxs'}
          color={'#9CA4AB'}
          lineHeight={'20px'}
          fontWeight={'medium'}
        >
          Tech Entusiast
        </Text>
      </Flex>
    </Box>
  );
}

export default TopPodcasters;