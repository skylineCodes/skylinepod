'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Grid,
  Heading,
  Radio,
  RadioGroup,
  Text,
  Textarea,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Svgs } from '@/assets';

import './styles.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Input from '@/components/Input';
import Button from '@/components/Button';
import ProfilePictureModal from '@/components/ProfilePictureModal';

const Explore = () => {
  const router = useRouter();
  const [value, setValue] = useState('1');
  const [textareaValue, setTextareaValue] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setTextareaValue(inputValue);
  };

  return (
    <>
      <ProfilePictureModal isOpen={isOpen} onClose={onClose} />
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
              Profile
            </Heading>
          </Flex>
        </Box>
        <Box mt={'15px'}>
          <Flex
            direction={'column'}
            width={'100%'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            gap={'18px'}
            position={'relative'}
          >
            <Box
              borderRadius={'8px'}
              backgroundColor={'secondary.100'}
              minHeight={'120px'}
              width={'100%'}
              position={'relative'}
            >
              <Box
                style={{
                  borderRadius: '8px',
                  objectFit: 'cover',
                  background:
                    'linear-gradient(180deg, rgba(82, 110, 160, 0) 0%, #526EA0 88.54%)',
                  height: '100%',
                  zIndex: '20',
                }}
                position={'absolute'}
                top={'0'}
                right={'0'}
                left={'0'}
              ></Box>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  transform: 'scaleX(-1)',
                  objectFit: 'cover',
                }}
                src={`https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
                fill={true}
                alt='Fluffybuns the destroyer'
              />
            </Box>

            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'flex-start'}
              position={'absolute'}
              bottom={'-60px'}
              right={'0'}
              left={'50%'}
              transform={'translate(-15%, -26%)'}
              zIndex={'25'}
            >
              <Wrap position={'relative'}>
                <WrapItem
                  border={'4px solid #FEFEFE'}
                  borderRadius={'50%'}
                  width={'100%'}
                >
                  <Avatar
                    size={'lg'}
                    name='Segun Adebayo'
                    src='https://bit.ly/ryan-florence'
                  />{' '}
                </WrapItem>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
                  position={'absolute'}
                  top={'75%'}
                  right={'-10px'}
                  transform={'translate(-15%, -50%)'}
                  zIndex={'25'}
                >
                  <Svgs.PROFILE_EDIT_ICON onClick={onOpen} />
                </Flex>
              </Wrap>
            </Flex>

            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'flex-start'}
              position={'absolute'}
              top={'20%'}
              right={'0'}
              transform={'translate(-15%, -50%)'}
              zIndex={'25'}
            >
              <Svgs.PROFILE_EDIT_ICON onClick={onOpen} />
            </Flex>
          </Flex>
        </Box>
        <Box mt={'35px'}>
          <Flex direction={'column'} gap={'24px'}>
            <Input
              label='First Name'
              type='text'
              placeholder='Enter your first name'
              style={{
                border: '1px solid #526EA0',
                backgroundColor: '#FEFEFE',
              }}
            />
            <Input
              label='Last Name'
              type='text'
              placeholder='Enter your last name'
              style={{
                border: '1px solid #526EA0',
                backgroundColor: '#FEFEFE',
              }}
            />
            <Input
              label='Email'
              type='email'
              placeholder='Enter your email address'
              style={{
                border: '1px solid #526EA0',
                backgroundColor: '#FEFEFE',
              }}
            />
            <Input
              label='Date of birth'
              type='datetime-local'
              placeholder='Enter your dob'
              style={{
                border: '1px solid #526EA0',
                backgroundColor: '#FEFEFE',
              }}
            />
            <Box>
              <Text
                fontSize={'14px'}
                fontWeight={'medium'}
                lineHeight={'22px'}
                color='#78828A'
              >
                Gender
              </Text>
              <RadioGroup onChange={setValue} value={value}>
                <Grid
                  templateColumns={'1fr 1fr'}
                  gridGap={'15px'}
                  width={'100%'}
                >
                  <Flex
                    border={'1px solid #526EA0'}
                    borderRadius={'24px'}
                    backgroundColor={'#FEFEFE'}
                    height={'35px'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    pl={'10px'}
                  >
                    <Radio value='1' size={'md'} gap={'15px'}>
                      <Text
                        fontSize={'16px'}
                        fontWeight={'semibold'}
                        lineHeight={'24px'}
                        color='secondary.10'
                      >
                        Male
                      </Text>
                    </Radio>
                  </Flex>
                  <Flex
                    border={'1px solid #526EA0'}
                    borderRadius={'24px'}
                    backgroundColor={'#FEFEFE'}
                    height={'35px'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    pl={'10px'}
                  >
                    <Radio value='2' size={'md'} gap={'15px'}>
                      <Text
                        fontSize={'16px'}
                        fontWeight={'semibold'}
                        lineHeight={'24px'}
                        color='secondary.10'
                      >
                        Female
                      </Text>
                    </Radio>
                  </Flex>
                </Grid>
              </RadioGroup>
            </Box>

            <Box>
              <Text
                mb='8px'
                fontSize={'14px'}
                fontWeight={'medium'}
                lineHeight={'22px'}
                color='#78828A'
              >
                Address
              </Text>
              <Textarea
                value={textareaValue}
                onChange={handleInputChange}
                placeholder='Enter address here...'
                _placeholder={{
                  color: '#9CA4AB',
                  fontWeight: 'medium',
                  fontSize: '16px',
                }}
                size='md'
                sx={{
                  fontSize: '16px',
                }}
              />
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
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Explore;
