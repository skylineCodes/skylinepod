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

const LogoutModal = ({ isOpen, onClose }: any) => {
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
        <ModalBody
          paddingInlineStart={'0px'}
          paddingInlineEnd={'0px'}
          overflowX={'hidden'}
          overflowY={'auto'}
        >
          <Flex direction={'column'} gap={'24px'} mt={'24px'}>
            <Flex
              direction={'column'}
              gap={'30px'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Flex>
                <Text
                  fontSize={'xs'}
                  fontWeight={'semibold'}
                  lineHeight={'shorter'}
                  color={'secondary.10'}
                >
                  Are you sure you want to logout?
                </Text>
              </Flex>
              <Flex direction={'column'} width={'100%'} gap={'10px'} justifyContent={'center'} alignItems={'center'}>
                <Button
                  text={'Cancel'}
                  onClick={onClose}
                  loading={false}
                  style={{
                    width: '70%',
                    border: '1px solid #526EA0',
                    borderRadius: '20px',
                  }}
                />
                <Button
                  text={'Log Out'}
                  onClick={() => console.log('Yes, please')}
                  loading={false}
                  style={{
                    width: '70%',
                    // border: '1px solid #526EA0',
                    backgroundColor: 'transparent',
                    color: '#E53935',
                  }}
                />
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default LogoutModal;