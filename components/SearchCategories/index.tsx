import {
  Flex,
  Grid,
  Heading,
  Box,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react';
import React from 'react';
import PodcastCategoryCard from '@/components/PodcastCategoryCard';
import { isValidMotionProp, motion } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox2 = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox3 = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox4 = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const categories = [
  {
    name: 'Music',
    imageUrl:
      'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9kY2FzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Arts',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1664477096404-b8469646b867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9kY2FzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Religion',
    imageUrl:
      'https://images.unsplash.com/photo-1581368087049-7034ed0d1e6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Economy',
    imageUrl:
      'https://images.unsplash.com/photo-1487537023671-8dce1a785863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Politics',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661714205805-14e04764217d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Inspiration',
    imageUrl:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Games',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1664200913726-f40fd0c4f6ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

const SearchCategories = ({ categoriesRef, categoriesWidth }: any) => {
  return (
    <>
      <Box width={'100%'}>
        <Flex direction={'column'} gap={'16px'}>
          <Heading fontSize={'xxs'} fontWeight={'bold'} color={'secondary.10'}>
            Top Categories
          </Heading>
          <ChakraBox
            className='carousel'
            ref={categoriesRef}
            whileTap={{ cursor: 'grabbing' }}
          >
            <ChakraBox3
              display={'flex'}
              height={'120px'}
              className='inner-topPodcaster'
              drag={'x'}
              dragConstraints={{ right: 0, left: -categoriesWidth }}
            >
              {categories?.map((item: any, index: number) => (
                <Box key={index} className='toppodcast-box'>
                  <PodcastCategoryCard
                    imageUrl={item?.imageUrl}
                    name={item?.name}
                  />
                </Box>
              ))}
            </ChakraBox3>
          </ChakraBox>
        </Flex>
      </Box>
      <Box width={'100%'}>
        <Flex direction={'column'} gap={'16px'}>
          <Heading fontSize={'xxs'} fontWeight={'bold'} color={'secondary.10'}>
            Browse all
          </Heading>
        </Flex>
        <Grid templateColumns={'1fr 1fr'} gridGap={'12px'} mt={'16px'}>
          {categories?.map((item: any, index: number) => (
            <Box key={index} className='toppodcast-box'>
              <PodcastCategoryCard
                imageUrl={item?.imageUrl}
                name={item?.name}
              />
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SearchCategories;