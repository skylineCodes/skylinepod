'use client';

import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Svgs } from '@/assets';

import './styles.css';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';
import ProfilePictureModal from '@/components/ProfilePictureModal';
import { BiHide, BiShow } from 'react-icons/bi';

const Explore = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => setShow(!show);
  const handleClickConfirm = () => setShowConfirm(!showConfirm);

  return (
    <>
      <Box backgroundColor={'grey.0'} p={'12px'}>
        <Box
          display={'grid'}
          gridTemplateColumns={'40px 1fr 35px'}
          gridGap={'10px'}
          width={'100%'}
          mt={'1rem'}
        >
          <Flex justifyContent={'center'} alignItems={'center'}>
            <Svgs.ARROW_BACK_WHITE onClick={() => router.back()} />
          </Flex>
          <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'8px'}
          >
            <Heading
              as='h1'
              fontSize={'xs'}
              fontWeight={'bold'}
              color={'secondary.10'}
              lineHeight={'base'}
              noOfLines={1}
            >
              Change Password
            </Heading>
          </Flex>
        </Box>
        <Box mt={'15px'}>
          <Flex justifyContent={'flex-start'}>
            <Text
              fontSize={'xs'}
              fontWeight={'550'}
              lineHeight={'26px'}
              color='secondary.10'
              textAlign={'center'}
            >
              The new password must be different from the current password
            </Text>
          </Flex>
        </Box>
        <Box mt={'35px'} minHeight={'60vh'}>
          <Flex direction={'column'} gap={'24px'}>
            <Input
              label='Enter Password'
              type={show ? 'text' : 'password'}
              placeholder='Enter your password'
              element={
                show ? (
                  <BiHide onClick={handleClick} cursor={'pointer'} />
                ) : (
                  <BiShow onClick={handleClick} cursor={'pointer'} />
                )
              }
            />
            <Input
              label='Confirm Password'
              type={showConfirm ? 'text' : 'password'}
              placeholder='Enter your password'
              element={
                showConfirm ? (
                  <BiHide onClick={handleClickConfirm} cursor={'pointer'} />
                ) : (
                  <BiShow onClick={handleClickConfirm} cursor={'pointer'} />
                )
              }
            />
          </Flex>
        </Box>
        <Box>
          <Button
            text={'Save Changes'}
            nextPage='/subscribe'
            loading={false}
            style={{
              width: '100%',
              border: '1px solid #526EA0',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Explore;
