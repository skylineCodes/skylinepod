import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  Box,
  Heading,
} from '@chakra-ui/react';
import React from 'react'
import { IoClose } from 'react-icons/io5';
import { Svgs } from '@/assets';
import Input from '../Input';
import { AiOutlineSend } from 'react-icons/ai';
import Button from '../Button';

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

const PaymentSuccessModal = ({ isOpen, onClose }: any) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      motionPreset='slideInBottom'
      isCentered
    >
      <ModalOverlay
        backdropFilter='blur(4px)'
        backgroundColor={'rgba(23, 23, 37, 0.24)'}
      />
      <ModalContent m={'10px'} p={'24px'} backgroundColor={'#FEFEFE'}>
        <ModalBody overflowX={'hidden'} overflowY={'auto'}>
          <Flex direction={'column'} gap={'24px'} mt={'24px'}>
            <Flex
              direction={'column'}
              gap={'10px'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Svgs.THUMBS_UP_ICON />
            </Flex>
            <Flex
              direction={'column'}
              gap={'10px'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Heading
                color={'secondary.10'}
                fontWeight={'bold'}
                fontSize={'md'}
                lineHeight={'shortest'}
              >
                Payment Successful!
              </Heading>
              <Text
                color={'#9CA4AB'}
                fontWeight={'medium'}
                fontSize={'xxs'}
                lineHeight={'shortest'}
                textAlign={'center'}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </Flex>
          </Flex>
          <Box width={'100%'} mt={'30px'}>
            <Flex>
              <Button
                text={'Continue'}
                nextPage={'/playing'}
                loading={false}
                style={{
                  borderRadius: '12px',
                  backgroundColor: '#526EA0',
                  width: '100%',
                }}
              />
            </Flex>
          </Box>
        </ModalBody>
        {/* <ModalFooter
          paddingInlineStart={'0px'}
          paddingInlineEnd={'0px'}
          pb={'0px'}
        >
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}

export default PaymentSuccessModal;