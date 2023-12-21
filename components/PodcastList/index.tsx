'use client';

import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
// import burnaBoy from '../../public/burna-boy3.jpg';
import { currentPlayer } from '../../redux/reducers/player';
import { Svgs } from '@/assets';

export interface PodcastListsProps {
  src: string;
  image: string;
  title: string;
  artistName: string;
}

const PodcastList = ({ src, image, title, artistName }: PodcastListsProps) => {
  const dispatch = useDispatch();

  return (
    <>
      <Flex
        width={'100%'}
        justifyContent={'space-between'}
        cursor={'pointer'}
        pr={'7px'}
        _hover={{ backgroundColor: 'grey.500', borderRadius: '4px' }}
        onClick={() =>
          dispatch(
            currentPlayer({
              item: {
                audio: src,
              },
            })
          )
        }
      >
        <Flex
          direction={'row'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          gap={'7px'}
        >
          <Box width={'70px'} height={'80px'}>
            <Image
              style={{
                borderRadius: '4px',
                height: '100%',
                objectFit: 'cover',
              }}
              src={`${image}`}
              alt={`${title}`}
              width={70}
              height={80}
            />
          </Box>
          <Flex
            direction={'column'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
          >
            <Flex direction={'column'} minHeight={'45px'}>
              <Heading
                as={'h6'}
                color={'secondary.10'}
                fontSize={'xxs'}
                fontWeight={'bold'}
              >
                {String(title).length > 10
                  ? `${String(title).substring(0, 25)}...`
                  : String(title)}
              </Heading>
              <Text
                as={'span'}
                color={'grey.100'}
                fontSize={'xxs'}
                fontWeight={'normal'}
              >
                By {artistName}
              </Text>
            </Flex>
            {/* <Box>
              <Text
                color={'secondary.10'}
                fontSize={'10px'}
                fontWeight={'medium'}
              >
                11:25/12:35
              </Text>
            </Box> */}
          </Flex>
        </Flex>
        <Flex position={'absolute'} right={'0'}>
          <Box>
            <Link href={'/playing'}>
              <Svgs.PLAY_ROUND_BLUE color={'grey.500'} />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default PodcastList;
