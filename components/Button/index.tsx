import React from 'react';
import { Button as ChakraButton, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';

export interface InputProps {
  nextPage?: string;
  text?: string;
  loading?: boolean;
  style?: any;
  onClick?: any;
}

const Button = ({ text, onClick, nextPage, loading, style }: InputProps) => {
  return (
    <>
      <ChakraButton
        borderRadius={'24px'}
        backgroundColor={'primary.50'}
        color={'secondary.50'}
        colorScheme={'primary.50'}
        fontSize={'xxs'}
        height={'56px'}
        isLoading={loading}
        _hover={{ backgroundColor: 'primary.50', opacity: '0.8' }}
        sx={style}
      >
        {nextPage ? (
          <Link href={`${nextPage}`}>
            <Text>{text}</Text>
          </Link>
        ) : (
          <Box onClick={onClick}>
            <Text>{text}</Text>
          </Box>
        )}
      </ChakraButton>
    </>
  );
};

export default Button;