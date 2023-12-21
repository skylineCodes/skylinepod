import { Svgs } from '@/assets';
import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export interface podcastProps {
  image: string;
  title?: string;
}

const Podcast = ({ image, title }: podcastProps) => {
  const router = useRouter();

  const handlePlay = () => {
    return router.push('/playing');
  }

  return (
    <Box className='podcast' height={'100%'} position={'relative'}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        src={`${image}`}
        fill={true}
        alt={`${title}`}
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
        background={'rgba(23, 23, 37, 0.7)'}
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
              {String(title).length > 10
                ? `${String(title).substring(0, 15)}...`
                : String(title)}
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
              onClick={() => handlePlay()}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Podcast;