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
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Svgs } from '@/assets';
import Button from '../Button';
import { AiOutlineRight } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';
import LogoutModal from '../ProfilePictureModal copy';

export interface ProfileDrawerProps {
  isOpen?: boolean;
  onClose?: any;
}

const ProfileDrawer = ({ isOpen, onClose }: ProfileDrawerProps) => {
  const { isOpen: isLogoutOpen, onOpen, onClose: onLogoutClose } = useDisclosure();

  return (
    <>
      <LogoutModal isOpen={isLogoutOpen} onClose={onLogoutClose} />
      <Drawer
        isOpen={isOpen === true ? isOpen : false}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
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
            mt={'10px'}
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
                      <Box width={'25px'}>
                        <Svgs.PERSON_ICON />
                      </Box>
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                        lineHeight={'24px'}
                      >
                        <Link href={'/profile'}>Profile</Link>
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
                      <Box>
                        <Svgs.WALLET_ICON />
                      </Box>
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                        lineHeight={'24px'}
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
                      <Box>
                        <Svgs.LOCK_ICON />
                      </Box>
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                        lineHeight={'24px'}
                      >
                        <Link href={'/change-password'}>Change Password</Link>
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
                      <Box>
                        <Svgs.UNLOCK_ICON />
                      </Box>
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                        lineHeight={'24px'}
                      >
                        <Link href={'/profile/forgot-password'}>
                          Forgot Password
                        </Link>
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
                      <Box width={'26px'} height={'21px'}>
                        <Icon
                          as={IoSettingsOutline}
                          width={'100%'}
                          height={'100%'}
                        />
                      </Box>
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                        lineHeight={'24px'}
                      >
                        <Link href={'/notifications-settings'}>Settings</Link>
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
                      <Box>
                        <Svgs.SHIELD_EMPTY_ICON />
                      </Box>
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                        lineHeight={'24px'}
                      >
                        <Link href={'/terms-and-conditions'}>
                          Legal and Policies
                        </Link>
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
                      <Box>
                        <Svgs.SUPPORT_ICON />
                      </Box>
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                        lineHeight={'24px'}
                      >
                        <Link href={'/support'}>Help & Support</Link>
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
                      <Box>
                        <Svgs.ACTIVITY_ICON />
                      </Box>
                      <Text
                        fontSize={'xxs'}
                        color={'secondary.10'}
                        fontWeight={'semibold'}
                        lineHeight={'24px'}
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

          <DrawerFooter>
            <Box width={'100%'}>
              <Button
                text={'Log Out'}
                onClick={onOpen}
                loading={false}
                style={{
                  width: '100%',
                  border: '1px solid #526EA0',
                  backgroundColor: 'transparent',
                  color: '#526EA0',
                }}
              />
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;