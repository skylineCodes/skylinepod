import React from 'react';
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { TiHome } from 'react-icons/ti';
import Link from 'next/link';

export interface InputProps {
  IconValue?: any;
  text?: string;
}

const SidebarItem = ({ IconValue, text }: InputProps) => {
  return (
    <>
      <Flex
        direction={'row'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        gap={'10px'}
        _hover={{ opacity: '0.8' }}
      >
        <Icon
          as={IconValue}
          color={'secondary.50'}
          cursor={'pointer'}
          height={'25px'}
          width={'25px'}
        />
        <Link href='/'>
          <Text color={'secondary.50'}>{text}</Text>
        </Link>
      </Flex>
    </>
  );
};

export default SidebarItem;