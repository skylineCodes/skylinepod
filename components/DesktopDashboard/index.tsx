'use client';

import React from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Stack,
  useColorModeValue,
  useMediaQuery,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import burnaBoy from '../../public/burna-boy3.jpg';
import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';
import Featured from '@/components/Featured';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import RecentlyPlayed from '@/components/RecentlyPlayed';

const DesktopDashboard = () => {
  return (
    <Stack height={'100vh'}>
      <Box height={'87vh'}>
        <Grid templateColumns='250px 1fr 300px' gap={0} height={'inherit'}>
          <Sidebar />
          <Box
            backgroundColor={'grey.500'}
            p={'1rem'}
            pb={'1rem'}
            overflowY={'auto'}
            sx={{
              '::-webkit-scrollbar': {
                width: '0.5rem',
                backgroundColor: '#e5e5e5',
                borderRadius: '0.5rem',
              },
              '::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
              },
              '::-webkit-scrollbar-thumb': {
                backgroundColor: '#e5e5e5',
                borderRadius: '0.5rem',
              },
              '::-webkit-scrollbar-thumb:hover': {
                backgroundColor: 'grey.800',
              },
            }}
          >
            <Flex
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'inherit'}
              height={'6vh'}
            >
              <Heading
                as='h1'
                fontSize={'lg'}
                fontWeight={'bold'}
                color={'secondary.50'}
                lineHeight={'base'}
                noOfLines={1}
                height={'inherit'}
                width={'inherit'}
                textAlign={'center'}
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'flex-end'}
                pb={'2px'}
              >
                Good Morning, Korede.
              </Heading>
              <Menu>
                <MenuButton
                  as={Button}
                  backgroundColor={'grey.400'}
                  borderRadius={'25px'}
                  borderWidth={'none'}
                  _hover={{ bg: 'grey.400' }}
                  _expanded={{ bg: 'grey.400' }}
                  _focus={{ outline: 'none' }}
                  rightIcon={
                    <Icon as={IoChevronDownOutline} color={'secondary.50'} />
                  }
                >
                  <Flex
                    direction={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                  >
                    <Image
                      style={{
                        borderRadius: '25px',
                        marginRight: '12px',
                      }}
                      src={burnaBoy}
                      alt='Fluffybuns the destroyer'
                      width={30}
                      height={30}
                    />
                    <Text fontSize={'xs'} color={'secondary.50'}>
                      Korede
                    </Text>
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem minH='48px'>
                    <Text>Profile</Text>
                  </MenuItem>
                  <MenuItem minH='40px'>
                    <Text>Log Out</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Flex
              flexDirection={'column'}
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              mt={10}
            >
              <Heading
                as={'h4'}
                fontSize={'md'}
                fontWeight={'bold'}
                color={'secondary.50'}
                lineHeight={'base'}
                noOfLines={1}
                height={'inherit'}
                width={'inherit'}
                textAlign={'center'}
                pb={'2px'}
              >
                New episodes
              </Heading>
              <Flex gap={'15px'} mt={5}>
                <Box position={'relative'} width={350} height={250}>
                  <Image
                    style={{
                      objectFit: 'cover',
                      borderRadius: '4px',
                      height: 'inherit',
                      width: 'inherit',
                    }}
                    src={burnaBoy}
                    alt='Fluffybuns the destroyer'
                  />
                  <Box
                    position={'absolute'}
                    top={'0'}
                    width={'100%'}
                    height={'100%'}
                    backgroundColor={'rgba(0, 0, 0, 0.3)'}
                  ></Box>
                  <Box
                    position={'absolute'}
                    bottom={'0'}
                    width={'100%'}
                    pl={'10px'}
                    pr={'10px'}
                  >
                    <Heading
                      fontSize={'md'}
                      fontWeight={'semibold'}
                      color={'secondary.50'}
                      lineHeight={'base'}
                      noOfLines={1}
                    >
                      New episodes
                    </Heading>
                    <Text
                      fontSize={'sm'}
                      fontWeight={'medium'}
                      color={'secondary.50'}
                      lineHeight={'base'}
                      noOfLines={1}
                    >
                      34 new episodes
                    </Text>
                  </Box>
                </Box>
                <Box position={'relative'} width={280} height={150}>
                  <Image
                    style={{
                      objectFit: 'cover',
                      borderRadius: '4px',
                      height: 'inherit',
                      width: 'inherit',
                    }}
                    src={burnaBoy}
                    alt='Fluffybuns the destroyer'
                  />
                  <Box
                    position={'absolute'}
                    top={'0'}
                    width={'100%'}
                    height={'100%'}
                    backgroundColor={'rgba(0, 0, 0, 0.3)'}
                  ></Box>
                  <Box width={'100%'} pl={'10px'} pr={'10px'} mt={5}>
                    <Heading
                      fontSize={'md'}
                      fontWeight={'semibold'}
                      color={'secondary.50'}
                      lineHeight={'base'}
                      noOfLines={1}
                    >
                      Emotional Intelligence
                    </Heading>
                    <Text
                      fontSize={'xs'}
                      fontWeight={'medium'}
                      color={'grey.100'}
                      lineHeight={'base'}
                      noOfLines={1}
                    >
                      Mental
                    </Text>
                  </Box>
                </Box>
                <Box position={'relative'} width={280} height={150}>
                  <Image
                    style={{
                      objectFit: 'cover',
                      borderRadius: '4px',
                      height: 'inherit',
                      width: 'inherit',
                    }}
                    src={burnaBoy}
                    alt='Fluffybuns the destroyer'
                  />
                  <Box
                    position={'absolute'}
                    top={'0'}
                    width={'100%'}
                    height={'100%'}
                    backgroundColor={'rgba(0, 0, 0, 0.3)'}
                  ></Box>
                  <Box width={'100%'} pl={'10px'} pr={'10px'} mt={5}>
                    <Heading
                      fontSize={'md'}
                      fontWeight={'semibold'}
                      color={'secondary.50'}
                      lineHeight={'base'}
                      noOfLines={1}
                    >
                      How to sell
                    </Heading>
                    <Text
                      fontSize={'xs'}
                      fontWeight={'medium'}
                      color={'grey.100'}
                      lineHeight={'base'}
                      noOfLines={1}
                    >
                      Business
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </Flex>
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'100%'}
              mt={5}
            >
              <Heading
                as='h3'
                fontSize={'lg'}
                fontWeight={'medium'}
                color={'secondary.50'}
                lineHeight={'base'}
                noOfLines={1}
              >
                Recently played
              </Heading>
              <Flex justifyContent={'flex-end'} alignItems={'center'}>
                <Link
                  href={'/'}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '7px',
                  }}
                >
                  <Text
                    fontSize={'xs'}
                    fontWeight={'medium'}
                    color={'secondary.50'}
                    lineHeight={'base'}
                  >
                    View all
                  </Text>
                  <Icon as={FiArrowUpRight} color={'secondary.50'} />
                </Link>
              </Flex>
            </Flex>
            <Flex
              direction={'column'}
              gap={'20px'}
              width={'100%'}
              mt={5}
              mb={'2rem'}
            >
              {[1, 2, 3, 4, 5].map((items: any, index: number) => (
                <RecentlyPlayed key={index} no={index + 1} />
              ))}
            </Flex>
          </Box>
          <Featured />
        </Grid>
      </Box>
      <Player />
    </Stack>
  );
};

export default DesktopDashboard;
