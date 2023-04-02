import React from 'react';
import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  Icon,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Switch,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Svgs } from '@/assets';
import Button from '../Button';
import { AiOutlineRight } from 'react-icons/ai';

export interface ProfileDrawerProps {
  isOpen?: boolean;
  onClose?: any;
}

const ProfileDrawer = ({ isOpen, onClose }: ProfileDrawerProps) => {
  return (
    <>
      <Drawer
        isOpen={isOpen === true ? isOpen : false}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}
          <Box
            display={'grid'}
            gridTemplateColumns={'45px 1fr 35px'}
            gridGap={'10px'}
            width={'100%'}
            p={'0px 10px 10px 10px'}
            mt={'1rem'}
          >
            <Flex justifyContent={'center'} alignItems={'center'}>
              <Svgs.ARROW_BACK_WHITE />
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
                Settings
              </Heading>
            </Flex>
          </Box>
          <Box
            width={'auto'}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            gap={'15px'}
            p={'0px 10px 10px 10px'}
            mt={'24px'}
          >
            <Wrap>
              <WrapItem>
                <Avatar
                  name='Dan Abrahmov'
                  size='md'
                  src='https://bit.ly/dan-abramov'
                />
              </WrapItem>
            </Wrap>
            <Flex direction={'column'} gap={'4px'}>
              <Heading
                as={'h4'}
                fontSize={'xs'}
                lineHeight={'20px'}
                fontWeight={'semibold'}
                color={'secondary.10'}
              >
                Dan Abramov
              </Heading>
              <Text
                fontSize={'xxs'}
                color={'#66707A'}
                lineHeight={'20px'}
                fontWeight={'medium'}
              >
                @dan_abramov
              </Text>
            </Flex>
          </Box>
          <Box width={'100%'} p={'0px 10px 10px 10px'} mt={'10px'}>
            <Button
              text={'Subscribe'}
              nextPage='/subscribe'
              loading={false}
              style={{
                borderRadius: '8px',
                width: '100%',
                height: '50px',
                border: '1px solid #526EA0',
                backgroundColor: '#526EA0',
                color: '#fff',
              }}
            />
          </Box>

          <DrawerBody paddingInlineStart={'0px'} paddingInlineEnd={'0px'}>
            <Box
              width={'100%'}
              p={'0px 10px 10px 10px'}
              mt={'10px'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              gap={'10px'}
            >
              <Flex direction={'column'} gap={'0px'} width={'100%'}>
                <Text
                  fontSize={'12px'}
                  color={'secondary.10'}
                  fontWeight={'medium'}
                >
                  Personal Info
                </Text>
                <Flex direction={'column'} gap={'10px'} width={'100%'}>
                  <Flex
                    width={'100%'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'center'}
                      gap={'10px'}
                    >
                      <Svgs.PERSON_ICON />
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                      >
                        Profile
                      </Text>
                    </Flex>
                    <Flex justifyContent={'flex-end'} alignItems={'center'}>
                      <Icon as={AiOutlineRight} opacity={'0.5'} />
                    </Flex>
                  </Flex>
                  <Flex
                    width={'100%'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'center'}
                      gap={'10px'}
                    >
                      <Svgs.WALLET_ICON />
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                      >
                        Payment Method
                      </Text>
                    </Flex>
                    <Flex justifyContent={'flex-end'} alignItems={'center'}>
                      <Icon as={AiOutlineRight} opacity={'0.5'} />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction={'column'} gap={'0px'} width={'100%'}>
                <Text
                  fontSize={'12px'}
                  color={'secondary.10'}
                  fontWeight={'medium'}
                >
                  Security
                </Text>
                <Flex direction={'column'} gap={'10px'}>
                  <Flex
                    width={'100%'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'center'}
                      gap={'10px'}
                    >
                      <Svgs.LOCK_ICON />
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                      >
                        Change Password
                      </Text>
                    </Flex>
                    <Flex justifyContent={'flex-end'} alignItems={'center'}>
                      <Icon as={AiOutlineRight} opacity={'0.5'} />
                    </Flex>
                  </Flex>
                  <Flex
                    width={'100%'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'center'}
                      gap={'10px'}
                    >
                      <Svgs.UNLOCK_ICON />
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                      >
                        Forgot Password
                      </Text>
                    </Flex>
                    <Flex justifyContent={'flex-end'} alignItems={'center'}>
                      <Icon as={AiOutlineRight} opacity={'0.5'} />
                    </Flex>
                  </Flex>
                  <Flex
                    width={'100%'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'center'}
                      gap={'10px'}
                    >
                      <Svgs.SHIELD_ICON />
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                      >
                        Security
                      </Text>
                    </Flex>
                    <Flex justifyContent={'flex-end'} alignItems={'center'}>
                      <Icon as={AiOutlineRight} opacity={'0.5'} />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction={'column'} gap={'0px'} width={'100%'}>
                <Text
                  fontSize={'12px'}
                  color={'secondary.10'}
                  fontWeight={'medium'}
                >
                  About
                </Text>
                <Flex direction={'column'} gap={'10px'}>
                  <Flex
                    width={'100%'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'center'}
                      gap={'10px'}
                    >
                      <Svgs.SHIELD_EMPTY_ICON />
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                      >
                        Legal and Policies
                      </Text>
                    </Flex>
                    <Flex justifyContent={'flex-end'} alignItems={'center'}>
                      <Icon as={AiOutlineRight} opacity={'0.5'} />
                    </Flex>
                  </Flex>
                  <Flex
                    width={'100%'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'center'}
                      gap={'10px'}
                    >
                      <Svgs.SUPPORT_ICON />
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                      >
                        Help & Support
                      </Text>
                    </Flex>
                    <Flex justifyContent={'flex-end'} alignItems={'center'}>
                      <Icon as={AiOutlineRight} opacity={'0.5'} />
                    </Flex>
                  </Flex>
                  <Flex
                    width={'100%'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'center'}
                      gap={'10px'}
                    >
                      <Svgs.ACTIVITY_ICON />
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                      >
                        Dark Mode
                      </Text>
                    </Flex>
                    <Flex justifyContent={'flex-end'} alignItems={'center'}>
                      <Switch size='md' />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;