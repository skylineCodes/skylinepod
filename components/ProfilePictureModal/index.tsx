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
  Heading,
  ModalHeader,
  ModalCloseButton,
  Divider,
} from '@chakra-ui/react';
import React from 'react'
import { IoClose } from 'react-icons/io5';
import { Svgs } from '@/assets';
import Input from '../Input';
import { AiOutlineSend, AiTwotoneFolderOpen } from 'react-icons/ai';
import Button from '../Button';
import { BsCameraFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';

const ProfilePictureModal = ({ isOpen, onClose }: any) => {
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
      <ModalContent m={'10px'} p={'12px'} backgroundColor={'#FEFEFE'}>
        <ModalHeader>
          <Flex
            direction={'column'}
            gap={'10px'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Heading
              color={'secondary.10'}
              fontWeight={'semibold'}
              fontSize={'md'}
              lineHeight={'shortest'}
            >
              Change your picture
            </Heading>
          </Flex>
          <Divider />
        </ModalHeader>
        <ModalBody
          paddingInlineStart={'0px'}
          paddingInlineEnd={'0px'}
          overflowX={'hidden'}
          overflowY={'auto'}
        >
          <Flex direction={'column'} gap={'24px'} mt={'24px'}>
            <Flex
              direction={'column'}
              gap={'10px'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Flex
                width={'100%'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                gap={'15px'}
                p={'20px'}
                backgroundColor={'#F5F5F5'}
                borderRadius={'8px'}
              >
                <Box width={'22px'} height={'24px'}>
                  <Icon as={BsCameraFill} width={'100%'} height={'100%'} />
                </Box>
                <Text
                  color={'secondary.10'}
                  fontWeight={'semibold'}
                  fontSize={'xs'}
                  lineHeight={'shortest'}
                >
                  Take a photo
                </Text>
              </Flex>
              <Flex
                width={'100%'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                gap={'15px'}
                p={'20px'}
                backgroundColor={'#F5F5F5'}
                borderRadius={'8px'}
              >
                <Box width={'22px'} height={'24px'}>
                  <Icon
                    as={AiTwotoneFolderOpen}
                    width={'100%'}
                    height={'100%'}
                  />
                </Box>
                <Text
                  color={'secondary.10'}
                  fontWeight={'semibold'}
                  fontSize={'xs'}
                  lineHeight={'shortest'}
                >
                  Choose from your file
                </Text>
              </Flex>
              <Flex
                width={'100%'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                gap={'15px'}
                p={'20px'}
                backgroundColor={'#F5F5F5'}
                borderRadius={'8px'}
              >
                <Box width={'18px'} height={'20px'}>
                  <Icon
                    as={FaTrash}
                    width={'100%'}
                    height={'100%'}
                    color={'error.500'}
                  />
                </Box>
                <Text
                  color={'error.500'}
                  fontWeight={'semibold'}
                  fontSize={'xs'}
                  lineHeight={'shortest'}
                >
                  Delete photo
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ProfilePictureModal;