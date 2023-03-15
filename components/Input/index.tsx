import React from 'react';
import { Input as ChakraInput, FormControl, FormLabel, InputRightElement, InputGroup, InputLeftElement } from '@chakra-ui/react';

export interface InputProps {
  placeholder?: string;
  type?: string;
  label?: string;
  element?: any;
  height?: string;
  leftElement?: any;
}

const Input = ({
  type,
  placeholder,
  label,
  element,
  height,
  leftElement,
}: InputProps) => {
  return (
    <>
      <FormControl>
        <FormLabel
          fontSize={'14px'}
          fontWeight={'medium'}
          lineHeight={'22px'}
          color='#78828A'
        >
          {label}
        </FormLabel>
        <InputGroup size='md'>
          <InputLeftElement top={'5px'} color={'#9CA4AB'}>
            {leftElement}
          </InputLeftElement>
          <ChakraInput
            type={type}
            placeholder={placeholder}
            _placeholder={{
              color: '#9CA4AB',
              fontWeight: 'medium',
              fontSize: '16px',
            }}
            variant='filled'
            height={height}
            size={'lg'}
            _focus={{
              outline: 'none',
              border: 'none',
              backgroundColor: 'secondary.500',
            }}
            sx={{
              fontSize: '16px',
              outline: 'none',
              border: 'none',
              borderRadius: '24px',
              padding: '0px 0px 0px 0px',
              paddingLeft: leftElement ? '36px' : '16px',
              paddingRight: element ? '36px' : '16px',
              backgroundColor: 'secondary.500',
            }}
          />
          <InputRightElement top={'5px'} color={'#9CA4AB'} width='4.5rem'>
            {element}
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

export default Input;