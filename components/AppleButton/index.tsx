import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { Svgs } from '@/assets';

export interface InputProps {
  placeholder?: string;
  text?: string;
  label?: string;
}

const AppleButtonWrapper = ({ text, placeholder, label }: InputProps) => {
  return (
    <>
      <Button
        borderRadius={'24px'}
        backgroundColor={'transparent'}
        border={'1px solid #111111'}
        color={'secondary.10'}
        fontSize={'xxs'}
        height={'56px'}
        _hover={{ backgroundColor: 'transparent', opacity: '0.8' }}
      >
        <Flex
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'12px'}
        >
          <Svgs.APPLE_ICON />
          <Text>{text}</Text>
        </Flex>
      </Button>
    </>
  );
};

export default AppleButtonWrapper;