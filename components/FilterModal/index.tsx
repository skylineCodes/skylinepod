import {
  Flex,
  Icon,
  Grid,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Heading,
  Text,
  Box,
} from '@chakra-ui/react';
import React from 'react'
import { IoClose } from 'react-icons/io5';
import FilterStatus from '../FilterStatus';
import PodcastCategory from '../PodcastCategory';
import StarRatings from '../StarRatings';
import Button from '@/components/Button';

const categories = [
  {
    name: 'All',
  },
  {
    name: 'Comedy',
  },
  {
    name: 'Music',
  },
  {
    name: 'Photography',
  },
  {
    name: 'Entrepreneur',
  },
];

const status = [
  {
    name: 'Popular',
  },
  {
    name: 'Trending',
  },
  {
    name: 'Controversy',
  },
  {
    name: 'Newest',
  },
];

const FilterModal = ({ isOpen, onClose }: any) => {
  return (
    <Modal
      // isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset='slideInBottom'
    >
      <ModalOverlay
        backdropFilter='blur(4px)'
        backgroundColor={'rgba(23, 23, 37, 0.24)'}
      />
      <ModalContent
        position={'absolute'}
        bottom={'0'}
        mb={'0px'}
        p={'24px'}
        height={'602px'}
        borderRadius={'24px 24px 0px 0px'}
        backgroundColor={'#FEFEFE'}
      >
        <Grid templateColumns={'1fr 1fr'}>
          <Flex
            direction={'row'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            gap={'10px'}
          >
            <Icon
              as={IoClose}
              width={'24px'}
              height={'24px'}
              onClick={onClose}
            />
            <Text
              fontSize={'xs'}
              fontWeight={'semibold'}
              lineHeight={'26px'}
              color={'secondary.10'}
            >
              Filter
            </Text>
          </Flex>
          <Flex
            direction={'row'}
            justifyContent={'flex-end'}
            alignItems={'center'}
            gap={'10px'}
          >
            <Text
              fontSize={'xxs'}
              fontWeight={'semibold'}
              lineHeight={'26px'}
              color={'primary.50'}
            >
              Reset Filters
            </Text>
          </Flex>
        </Grid>
        <ModalBody paddingInlineStart={'0px'} paddingInlineEnd={'0px'}>
          <Flex direction={'column'} gap={'24px'} mt={'24px'}>
            <Box>
              <Flex direction={'column'} gap={'16px'}>
                <Flex>
                  <Heading
                    fontSize={'xxs'}
                    fontWeight={'semibold'}
                    color={'secondary.10'}
                  >
                    Categories
                  </Heading>
                </Flex>
                <Flex gap={'10px'} wrap={'wrap'}>
                  {categories?.map((item: any, index: number) => (
                    <Box key={index} className='toppodcast-box'>
                      <PodcastCategory name={item?.name} />
                    </Box>
                  ))}
                </Flex>
              </Flex>
            </Box>
            <Box>
              <Flex direction={'column'} gap={'16px'}>
                <Flex>
                  <Heading
                    fontSize={'xxs'}
                    fontWeight={'semibold'}
                    color={'secondary.10'}
                  >
                    Status
                  </Heading>
                </Flex>
                <Flex gap={'10px'} wrap={'wrap'}>
                  {status?.map((item: any, index: number) => (
                    <Box key={index} className='toppodcast-box'>
                      <FilterStatus name={item?.name} />
                    </Box>
                  ))}
                </Flex>
              </Flex>
            </Box>
            <Box>
              <Flex direction={'column'} gap={'16px'}>
                <Flex>
                  <Heading
                    fontSize={'xxs'}
                    fontWeight={'semibold'}
                    color={'secondary.10'}
                  >
                    Star Rating
                  </Heading>
                </Flex>
                <Flex gap={'10px'} wrap={'wrap'}>
                  <Box className='rating-box'>
                    <StarRatings count={[1]} />
                  </Box>
                  <Box className={'rating-box'}>
                    <StarRatings count={[1, 2]} />
                  </Box>
                  <Box className={'rating-box'}>
                    <StarRatings count={[1, 2, 3]} />
                  </Box>
                  <Box className={'rating-box'}>
                    <StarRatings count={[1, 2, 3, 4]} />
                  </Box>
                  <Box className={'rating-box'}>
                    <StarRatings count={[1, 2, 3, 4, 5]} />
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter
          paddingInlineStart={'0px'}
          paddingInlineEnd={'0px'}
          pb={'0px'}
        >
          <Box width={'100%'}>
            <Button
              text={'Apply Filters'}
              nextPage='/explore'
              loading={false}
              style={{
                width: '100%',
                outline: 'none',
              }}
            />
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FilterModal;