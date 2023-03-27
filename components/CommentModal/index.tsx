import {
  Flex,
  Icon,
  Grid,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  Box,
  Avatar,
  IconButton,
} from '@chakra-ui/react';
import React from 'react'
import { IoClose } from 'react-icons/io5';
import { Svgs } from '@/assets';
import Input from '../Input';
import { AiOutlineSend } from 'react-icons/ai';

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

const CommentModal = ({ isOpen, onClose }: any) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} motionPreset='slideInBottom'>
      <ModalOverlay
        backdropFilter='blur(4px)'
        backgroundColor={'rgba(23, 23, 37, 0.24)'}
      />
      <ModalContent
        position={'absolute'}
        bottom={'0'}
        mb={'0px'}
        p={'24px'}
        minHeight={'530px'}
        height={'530px'}
        borderRadius={'24px 24px 0px 0px'}
        backgroundColor={'#FEFEFE'}
      >
        <Grid templateColumns={'1fr 1fr 1fr'}>
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
          </Flex>
          <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'10px'}
          >
            <Text
              fontSize={'xs'}
              fontWeight={'semibold'}
              lineHeight={'26px'}
              color={'secondary.10'}
            >
              Comment
            </Text>
          </Flex>
        </Grid>
        <ModalBody
          paddingInlineStart={'0px'}
          paddingInlineEnd={'0px'}
          overflowX={'hidden'}
          overflowY={'auto'}
        >
          <Flex direction={'column'} gap={'24px'} mt={'24px'}>
            <Grid templateColumns={'35px 1fr'} gridGap={'12px'}>
              <Flex>
                <Avatar
                  name='Ryan Florence'
                  size={'sm'}
                  src='https://bit.ly/ryan-florence'
                />
              </Flex>
              <Flex direction={'column'}>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'flex-start'}
                  gap={'12px'}
                >
                  <Text
                    fontSize={'xxs'}
                    fontWeight={'semibold'}
                    color={'#1C1C1E'}
                  >
                    Jaxson Torff
                  </Text>
                  <Text
                    fontSize={'12px'}
                    fontWeight={'medium'}
                    color={'#8E8E93'}
                  >
                    30 min ago
                  </Text>
                </Flex>
                <Flex
                  direction={'column'}
                  wrap={'wrap'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
                >
                  <Text
                    fontSize={'xxs'}
                    fontWeight={'medium'}
                    color={'#1C1C1E'}
                  >
                    yes that's right, I've experienced it myself this really
                    helps
                  </Text>
                </Flex>
                <Flex
                  direction={'row'}
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'12px'}
                >
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    gap={'5px'}
                  >
                    <Svgs.COMMENT_LIKE_ICON />
                    <Text color={'#8E8E93'}>13</Text>
                  </Flex>
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    gap={'5px'}
                  >
                    <Svgs.COMMENT_MESSAGE_ICON />
                    <Text color={'#8E8E93'}>5</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Grid>
            <Grid templateColumns={'35px 1fr'} gridGap={'12px'}>
              <Flex>
                <Avatar
                  name='Ryan Florence'
                  size={'sm'}
                  src='https://bit.ly/ryan-florence'
                />
              </Flex>
              <Flex direction={'column'}>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'flex-start'}
                  gap={'12px'}
                >
                  <Text
                    fontSize={'xxs'}
                    fontWeight={'semibold'}
                    color={'#1C1C1E'}
                  >
                    Jaxson Torff
                  </Text>
                  <Text
                    fontSize={'12px'}
                    fontWeight={'medium'}
                    color={'#8E8E93'}
                  >
                    30 min ago
                  </Text>
                </Flex>
                <Flex
                  direction={'column'}
                  wrap={'wrap'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
                >
                  <Text
                    fontSize={'xxs'}
                    fontWeight={'medium'}
                    color={'#1C1C1E'}
                  >
                    yes that's right, I've experienced it myself this really
                    helps
                  </Text>
                </Flex>
                <Flex
                  direction={'row'}
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'12px'}
                >
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    gap={'5px'}
                  >
                    <Svgs.COMMENT_LIKE_ICON />
                    <Text color={'#8E8E93'}>13</Text>
                  </Flex>
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    gap={'5px'}
                  >
                    <Svgs.COMMENT_MESSAGE_ICON />
                    <Text color={'#8E8E93'}>5</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Grid>
            <Grid templateColumns={'35px 1fr'} gridGap={'12px'}>
              <Flex>
                <Avatar
                  name='Ryan Florence'
                  size={'sm'}
                  src='https://bit.ly/ryan-florence'
                />
              </Flex>
              <Flex direction={'column'}>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'flex-start'}
                  gap={'12px'}
                >
                  <Text
                    fontSize={'xxs'}
                    fontWeight={'semibold'}
                    color={'#1C1C1E'}
                  >
                    Jaxson Torff
                  </Text>
                  <Text
                    fontSize={'12px'}
                    fontWeight={'medium'}
                    color={'#8E8E93'}
                  >
                    30 min ago
                  </Text>
                </Flex>
                <Flex
                  direction={'column'}
                  wrap={'wrap'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
                >
                  <Text
                    fontSize={'xxs'}
                    fontWeight={'medium'}
                    color={'#1C1C1E'}
                  >
                    yes that's right, I've experienced it myself this really
                    helps
                  </Text>
                </Flex>
                <Flex
                  direction={'row'}
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'12px'}
                >
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    gap={'5px'}
                  >
                    <Svgs.COMMENT_LIKE_ICON />
                    <Text color={'#8E8E93'}>13</Text>
                  </Flex>
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    gap={'5px'}
                  >
                    <Svgs.COMMENT_MESSAGE_ICON />
                    <Text color={'#8E8E93'}>5</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Grid>
            <Grid templateColumns={'35px 1fr'} gridGap={'12px'}>
              <Flex>
                <Avatar
                  name='Ryan Florence'
                  size={'sm'}
                  src='https://bit.ly/ryan-florence'
                />
              </Flex>
              <Flex direction={'column'}>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'flex-start'}
                  gap={'12px'}
                >
                  <Text
                    fontSize={'xxs'}
                    fontWeight={'semibold'}
                    color={'#1C1C1E'}
                  >
                    Jaxson Torff
                  </Text>
                  <Text
                    fontSize={'12px'}
                    fontWeight={'medium'}
                    color={'#8E8E93'}
                  >
                    30 min ago
                  </Text>
                </Flex>
                <Flex
                  direction={'column'}
                  wrap={'wrap'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
                >
                  <Text
                    fontSize={'xxs'}
                    fontWeight={'medium'}
                    color={'#1C1C1E'}
                  >
                    yes that's right, I've experienced it myself this really
                    helps
                  </Text>
                </Flex>
                <Flex
                  direction={'row'}
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'12px'}
                >
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    gap={'5px'}
                  >
                    <Svgs.COMMENT_LIKE_ICON />
                    <Text color={'#8E8E93'}>13</Text>
                  </Flex>
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    gap={'5px'}
                  >
                    <Svgs.COMMENT_MESSAGE_ICON />
                    <Text color={'#8E8E93'}>5</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Grid>
          </Flex>
        </ModalBody>
        <ModalFooter
          paddingInlineStart={'0px'}
          paddingInlineEnd={'0px'}
          pb={'0px'}
        >
          <Flex
            gap={'10px'}
            justifyContent={'space-between'}
            alignItems={'flex-end'}
            width={'100%'}
          >
            <Box width={'100%'}>
              <Input
                type='text'
                placeholder='Write comment...'
                style={{
                  backgroundColor: '#F7F7F7 !important',
                }}
              />
            </Box>
            <Flex>
              <IconButton
                aria-label='Search database'
                icon={<AiOutlineSend />}
                borderRadius={'50%'}
                p={'14px'}
                height={'auto'}
                backgroundColor={'#F7F7F7'}
              />
            </Flex>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CommentModal;