import {
  Flex,
  Icon,
  Grid,
  Text,
  Box,
  Radio,
} from '@chakra-ui/react';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface PaymentMethodProps {
  //
}

const PaymentMethod = ({ }: PaymentMethodProps) => {

  return (
    <Box width={'100%'}>
      <Flex justifyContent={'space-between'}>
        <Flex direction={'column'}>
          <Text
            color={'secondary.10'}
            fontWeight={'semibold'}
            fontSize={'xxs'}
            lineHeight={'shortest'}
          >
            Visa Card - Onakoya Florin
          </Text>
          <Text
            color={'#9CA4AB'}
            fontWeight={'medium'}
            fontSize={'12px'}
            lineHeight={'20px'}
          >
            **** **** **** 1254
          </Text>
        </Flex>
        <Flex direction={'column'}>
          <Icon as={FiArrowRight} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default PaymentMethod;