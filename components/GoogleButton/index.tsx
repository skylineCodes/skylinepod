import React from 'react';
import { Button as ChakraButton, Flex, Text } from '@chakra-ui/react';
import { Svgs } from '@/assets';

export interface InputProps {
  placeholder?: string;
  text?: string;
  label?: string;
}

const GoogleButton = ({ text, placeholder, label }: InputProps) => {
  return (
    <>
      <ChakraButton
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
          <Svgs.GOOGLE_ICON />
          <Text>{text}</Text>
        </Flex>
      </ChakraButton>
    </>
  );
};

export default GoogleButton;