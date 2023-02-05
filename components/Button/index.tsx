import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import Link from 'next/link';

export interface InputProps {
  nextPage?: string;
  text?: string;
  loading?: boolean;
}

const ButtonWrapper = ({ text, nextPage, loading }: InputProps) => {
  return (
    <>
      <Button
        borderRadius={'24px'}
        backgroundColor={'primary.50'}
        color={'secondary.50'}
        colorScheme={'primary.50'}
        fontSize={'xxs'}
        height={'56px'}
        isLoading={loading}
        _hover={{ backgroundColor: 'primary.50', opacity: '0.8' }}
      >
        <Link href={`${nextPage}`}>
          <Text>{text}</Text>
        </Link>
      </Button>
    </>
  );
};

export default ButtonWrapper;