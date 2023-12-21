'use client'

import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import burnaBoy from '../../public/burna-boy3.jpg';
import { currentPlayer } from '../../redux/reducers/player'

export interface LatestEpisodesProps {
  title: string;
  src: string;
  image: string;
  date: string;
  name: string;
}

const LatestEpisode = ({ src, title, image, date, name }: LatestEpisodesProps) => {
  const dispatch = useDispatch();
  const [duration, setDuration] = useState<string>('0');

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
                title,
                image,
                name
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
              src={`${image}`}
              alt={title}
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
              {String(title).length > 10
                ? `${String(title).substring(0, 10)}...`
                : String(title)}
            </Heading>
            <Text color={'grey.100'} fontSize={'xxs'} fontWeight={'thin'}>
              {date}
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <audio
            id='ad'
            src={src}
            controls
            hidden
            onLoadedMetadata={(event: any) =>
              setDuration(String(event.target.duration).substring(0, 2))
            }
          ></audio>
          <Text color={'grey.100'} fontSize={'xxs'} fontWeight={'thin'}>
            {`${duration} mins`}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default LatestEpisode;