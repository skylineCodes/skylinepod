import {
  Flex,
  Icon,
  Grid,
  Text,
  Box,
  Radio,
} from '@chakra-ui/react';
import React from 'react';

interface PlanProps {
  name?: string;
  plan?: string;
  deviceCount?: string;
  price?: string;
  isChecked?: boolean;
  onChange?: any;
  perCharge?: string;
}

const Plan = ({ name, deviceCount, price, isChecked, onChange, perCharge }: PlanProps) => {

  const onClickWrapper = () => {
    onChange()
  }

  console.log(isChecked)

  return (
    <Box
      border={`${
        isChecked === true ? '1px solid #526EA0' : '1px solid #E3E7EC'
      }`}
      borderRadius={'8px'}
      p={'13px'}
      onClick={onClickWrapper}
      backgroundColor={`${isChecked === true ? '#F0EFFF' : 'transparent'}`}
    >
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Flex direction={'column'} gap={'7px'}>
          <Text
            fontSize={'xs'}
            lineHeight={'shorter'}
            fontWeight={'semibold'}
            color={'secondary.10'}
          >
            {name}
          </Text>
          <Text
            fontSize={'xxs'}
            lineHeight={'shortest'}
            fontWeight={'medium'}
            color={'#78828A'}
          >
            {deviceCount}
          </Text>
        </Flex>
        <Flex gap={'20px'} justifyContent={'center'} alignItems={'center'}>
          <Flex
            direction={'column'}
            justifyContent={'flex-end'}
            alignItems={'flex-end'}
            gap={'7px'}
          >
            <Text
              fontSize={'md'}
              lineHeight={'shorter'}
              fontWeight={'bold'}
              color={'secondary.10'}
            >
              {price}
            </Text>
            <Text
              fontSize={'xxs'}
              lineHeight={'shortest'}
              fontWeight={'medium'}
              color={'#78828A'}
            >
              {perCharge}
            </Text>
          </Flex>
          <Radio
            size='lg'
            name={name}
            isChecked={isChecked}
            onChange={onChange}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Plan;