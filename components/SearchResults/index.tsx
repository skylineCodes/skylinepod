import {
  Flex,
  Grid,
  Heading,
  Box,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react';
import React from 'react';
import PodcastList from '../PodcastList';

const SearchResults = () => {
  return (
    <>
      <Box width={'100%'}>
        <Flex direction={'column'} gap={'16px'}>
          <Heading fontSize={'xxs'} fontWeight={'bold'} color={'secondary.10'}>
            Result (7)
          </Heading>
        </Flex>
        <Flex direction={'column'} gap={'10px'} mt={'16px'}>
          {[1, 2, 3, 4, 5, 6, 7]?.map((item: any, index: number) => (
            <PodcastList key={index} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default SearchResults;