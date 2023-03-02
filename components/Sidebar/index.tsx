import React from 'react';
import { Box, Flex, Heading, Text, Icon, Divider } from '@chakra-ui/react';
import { TiHome } from 'react-icons/ti';
import { CiSearch } from 'react-icons/ci';
import { RiDownloadLine } from 'react-icons/ri';
import { MdFavoriteBorder } from 'react-icons/md';
import SidebarItem from '../SidebarItem';
import { IoBarChartSharp } from 'react-icons/io5';
import { BsSoundwave } from 'react-icons/bs';
import { AiOutlineClockCircle, AiOutlinePlus } from 'react-icons/ai';
import { Svgs } from '@/assets';

export interface InputProps {
  //
}

const Sidebar = () => {
  return (
    <>
      <Box
        backgroundColor={'grey.800'}
        p={'1rem'}
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
          justifyContent={'flex-start'}
          alignItems={'flex-end'}
          width={'inherit'}
          height={'6vh'}
        >
          <Box
            height={'inherit'}
            width={'inherit'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
          >
            <Svgs.LOGO width={'inherit'} height={'inherit'} />
          </Box>
        </Flex>
        <Box mt={'2rem'}>
          <Flex
            direction={'column'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            gap={'1rem'}
            pb={'1rem'}
          >
            <SidebarItem IconValue={TiHome} text={'Home'} />
            <SidebarItem IconValue={CiSearch} text={'Discover'} />
            <SidebarItem IconValue={IoBarChartSharp} text={'Charts'} />
          </Flex>
          <Divider />
          <Flex
            direction={'column'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            gap={'1rem'}
            pt={'1rem'}
            pb={'1rem'}
          >
            <SidebarItem IconValue={BsSoundwave} text={'Podcasts'} />
            <SidebarItem IconValue={RiDownloadLine} text={'Download'} />
            <SidebarItem IconValue={MdFavoriteBorder} text={'Favorites'} />
            <SidebarItem
              IconValue={AiOutlineClockCircle}
              text={'Latest updates'}
            />
          </Flex>
          <Divider />
          <Flex
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={'1rem'}
            pt={'1rem'}
            pb={'1rem'}
          >
            <Heading
              color={'secondary.50'}
              fontSize={'sm'}
              fontWeight={'medium'}
            >
              PLAYLISTS
            </Heading>
            <Icon
              as={AiOutlinePlus}
              color={'secondary.50'}
              cursor={'pointer'}
              height={'20px'}
              width={'20px'}
            />
          </Flex>
          <Flex direction={'column'} justifyContent={'flex-start'} gap={'15px'}>
            <Text color={'secondary.50'}>Listen later</Text>
            <Text color={'secondary.50'}>Daily recommendations</Text>
            <Text color={'secondary.50'}>Sleep</Text>
            <Text color={'secondary.50'}>Meditation</Text>
            <Text color={'secondary.50'}>English Practice</Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;