'use client'

import React from 'react';
import { Box, Flex, Heading, Text} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import burnaBoy from '../../public/burna-boy3.jpg';
import { currentPlayer } from '../../redux/reducers/player'

export interface LatestEpisodesProps {
  src?: string;
}

const LatestEpisode = ({ src }: LatestEpisodesProps) => {
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
          alignItems={'center'}
          gap={'7px'}
        >
          <Box>
            <Image
              style={{
                borderRadius: '4px',
              }}
              src={burnaBoy}
              alt='Fluffybuns the destroyer'
              width={70}
              height={70}
            />
          </Box>
          <Flex direction={'column'}>
            <Heading
              as={'h6'}
              color={'secondary.50'}
              fontSize={'xxs'}
              fontWeight={'medium'}
            >
              241- Mind hack...
            </Heading>
            <Text color={'grey.100'} fontSize={'xxs'} fontWeight={'thin'}>
              Today
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Text color={'grey.100'} fontSize={'xxs'} fontWeight={'thin'}>
            27 mins
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default LatestEpisode;