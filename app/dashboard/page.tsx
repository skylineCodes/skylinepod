'use client';

import React, { useEffect, useRef, useState } from 'react';
import { IoCloseOutline, IoChevronDownOutline } from 'react-icons/io5';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';
import {
  Box,
  Button,
  Flex,
  Grid,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
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
import { BsShuffle, BsVolumeUp } from 'react-icons/bs';
import Sidebar from '@/components/Sidebar';

const page = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const formBackground = useColorModeValue('secondary.50', 'grey.500');

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioPlayer: any = useRef<any>(); // reference our audio component
  const progressBar: any = useRef<any>(); // reference our progress bar
  const animationRef: any = useRef<any>(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current?.duration);
    setDuration(seconds);

    if (progressBar?.current !== undefined) {
      progressBar.current.max = seconds;
    }
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrentTime(progressBar.current.value);
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;

    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const backThirty = () => {
    if (progressBar?.current !== undefined) {
      progressBar.current.value = Number(progressBar.current.value) - 30;
      
      changeRange();
    }
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;
    changeRange();
  };

  return (
    <Stack height={'100vh'}>
      <Box height={'87vh'}>
        <Grid templateColumns='250px 1fr 300px' gap={0} height={'inherit'}>
          <Sidebar />
          <Box backgroundColor={'grey.500'} p={'1rem'}>
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
          </Box>
          <Box backgroundColor={'grey.800'} p={'1rem'}>
            <Flex
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'inherit'}
              height={'6vh'}
            >
              <Heading
                as='h3'
                fontSize={'sm'}
                fontWeight={'bold'}
                color={'secondary.50'}
                lineHeight={'base'}
                noOfLines={1}
                height={'inherit'}
                width={'inherit'}
                textAlign={'center'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                pb={'2px'}
              >
                Featured
              </Heading>
              <Icon
                pb={'2px'}
                color={'secondary.50'}
                fontSize={'md'}
                fontWeight={'bold'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                cursor={'pointer'}
                as={IoCloseOutline}
              />
            </Flex>
          </Box>
        </Grid>
      </Box>
      <Box
        height={'15vh'}
        borderRadius={'none'}
        w={{ base: '100vw' }}
        mt={'0rem !important'}
      >
        <Grid
          templateColumns='350px 1fr 300px'
          gridGap={'50px'}
          height={'inherit'}
          position={'absolute'}
          bottom={'0'}
          right={'0'}
          left={'0'}
          placeItems={'center'}
          backgroundColor={'primary.800'}
          overflowX={'hidden'}
        >
          <Box
            p={'1rem'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <Flex
              direction={'row'}
              justifyContent={'flex-start'}
              alignItems={'center'}
              gap={'10px'}
            >
              <Image
                style={{
                  borderRadius: '4px',
                }}
                src={burnaBoy}
                alt='Fluffybuns the destroyer'
                width={80}
                height={80}
              />
              <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
                <Text fontSize={'sm'} color={'secondary.50'}>
                  Cowboy Be-bop Influences
                </Text>
                <Text fontSize={'xxs'} color={'grey.100'} fontWeight={'thin'}>
                  Anime Talks
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            p={'1rem'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            width={'100%'}
          >
            <Stack width={'inherit'}>
              <Flex
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'25px'}
              >
                <audio
                  ref={audioPlayer}
                  src='https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3'
                  preload='metadata'
                ></audio>
                <Icon
                  as={BsShuffle}
                  color={'secondary.50'}
                  cursor={'pointer'}
                  height={'15px'}
                  width={'15px'}
                />
                {/* <Tooltip label='Skip back 30 seconds'> */}
                <Icon
                  as={FaStepBackward}
                  color={'secondary.50'}
                  cursor={'pointer'}
                  height={'20px'}
                  width={'20px'}
                  onClick={backThirty}
                />
                {/* </Tooltip> */}
                {isPlaying ? (
                  <Icon
                    as={FaPause}
                    color={'secondary.50'}
                    cursor={'pointer'}
                    height={'25px'}
                    width={'25px'}
                    onClick={togglePlayPause}
                  />
                ) : (
                  <Icon
                    as={FaPlay}
                    color={'secondary.50'}
                    cursor={'pointer'}
                    height={'25px'}
                    width={'25px'}
                    onClick={togglePlayPause}
                  />
                )}
                {/* <Tooltip label='Skip forward 30 seconds'> */}
                  <Icon
                    as={FaStepForward}
                    color={'secondary.50'}
                    cursor={'pointer'}
                    height={'20px'}
                    width={'20px'}
                    onClick={forwardThirty}
                  />
                {/* </Tooltip> */}
                <Icon
                  as={FiRepeat}
                  color={'secondary.50'}
                  cursor={'pointer'}
                  height={'15px'}
                  width={'15px'}
                />
              </Flex>
              <Flex
                direction={'row'}
                justifyContent={'space-around'}
                gap={'10px'}
                marginTop={'0px'}
              >
                <Text fontSize={'xs'} color={'secondary.50'}>
                  {calculateTime(currentTime)}
                </Text>
                <input
                  type='range'
                  defaultValue='0'
                  ref={progressBar}
                  onChange={changeRange}
                  style={{
                    width: '100%'
                  }}
                />
                <Text fontSize={'xs'} color={'secondary.50'}>
                  {duration && !isNaN(duration) && calculateTime(duration)}
                </Text>
              </Flex>
            </Stack>
          </Box>
          <Box p={'1rem'} width={'100%'}>
            <Flex width={'100%'}>
              <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                gap={'10px'}
                width={'50%'}
              >
                <Icon
                  as={BsVolumeUp}
                  color={'secondary.50'}
                  cursor={'pointer'}
                  height={'25px'}
                  width={'25px'}
                />
                <Slider aria-label='slider-ex-1' defaultValue={55}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </Stack>
  );
};

export default page;
