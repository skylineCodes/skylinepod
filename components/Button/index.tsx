import React from 'react';
import { Button, Text } from '@chakra-ui/react';

export interface InputProps {
  placeholder?: string;
  text?: string;
  label?: string;
}

const ButtonWrapper = ({ text, placeholder, label }: InputProps) => {
  return (
    <>
      <Button
        borderRadius={'24px'}
        backgroundColor={'primary.50'}
        color={'secondary.50'}
        fontSize={'xxs'}
        height={'56px'}
        _hover={{ backgroundColor: 'primary.50', opacity: '0.8' }}
      >
        <Text>{text}</Text>
      </Button>
    </>
  );
};

export default ButtonWrapper;