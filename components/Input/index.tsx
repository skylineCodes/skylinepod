import React from 'react';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';

export interface InputProps {
  placeholder?: string;
  type?: string;
  label?: string;
}

const InputWrapper = ({ type, placeholder, label }: InputProps) => {
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
        <Input
          type={type}
          placeholder={placeholder}
          _placeholder={{
            color: '#9CA4AB',
            fontWeight: 'medium',
            fontSize: '16px',
          }}
          variant='filled'
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
            padding: '0px 0px 0px 16px',
            backgroundColor: 'secondary.500',
          }}
        />
      </FormControl>
    </>
  );
};

export default InputWrapper;