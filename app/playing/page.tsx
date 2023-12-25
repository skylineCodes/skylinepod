'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  chakra,
  Flex,
  Grid,
  Heading,
  IconButton,
  Icon,
  shouldForwardProp,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import BottomNavigation from '@/components/BottomNavigation';
import { Svgs } from '@/assets';

import './styles.css';
import burnaBoy from '../../public/burna-boy3.jpg';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PodcastList from '@/components/PodcastList';
import { motion, isValidMotionProp } from 'framer-motion';
import Podcast from '@/components/Podcast';
import BackButton from '@/components/BackButton';
import { BsArrowLeft } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import CommentModal from '@/components/CommentModal';
import { FaPause } from 'react-icons/fa';

const Playing = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [width, setWidth] = useState<number>(0);
  const [categoriesWidth, setCategoriesWidth] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioPlayer: any = useRef<any>(); // reference our audio component
  const progressBar: any = useRef<any>(); // reference our progress bar
  const animationRef: any = useRef<any>(); // reference the animation

  const player: any = useSelector((state: any) => state?.player?.player);

  const [currentAudio, setCurrentAudio] = useState<string>('');

  const audioToggle: any = useSelector(
    (state: any) => state.player.audioToggle
  );
  const carousel = useRef<any>();
  const categoriesRef = useRef<any>();
  
  useEffect(() => {
    setWidth(carousel?.current?.scrollWidth - carousel?.current?.offsetWidth);
    setCategoriesWidth(
      categoriesRef?.current?.scrollWidth - categoriesRef?.current?.offsetWidth
    );
  }, []);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current?.duration);
    setDuration(seconds);

    if (progressBar?.current !== undefined) {
      progressBar.current.max = seconds;
    }
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    console.log(audioToggle);
    setCurrentAudio(player?.audio);
  }, [audioToggle, player]);

  useEffect(() => {
    togglePlay();
  }, [currentAudio]);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  // console.log(isPlaying);
  const togglePlay = () => {
    const prevValue = isPlaying;
    setIsPlaying(true);

    // if (prevValue) {
    audioPlayer.current?.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
    // }
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
    progressBar.current.value = audioPlayer.current?.currentTime;

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
    <>
      <CommentModal isOpen={isOpen} onClose={onClose} />
      <Flex
        height={'100vh'}
        direction={'column'}
        justifyContent={isMobile ? 'flex-start' : 'center'}
        alignItems={isMobile ? 'flex-start' : 'center'}
        gap={'20px'}
        backgroundColor={'grey.500'}
      >
        <Box
          display={'grid'}
          gridTemplateColumns={'35px 1fr 35px'}
          gridGap={'10px'}
          width={'100%'}
          p={'0px 10px 10px 10px'}
          mt={'2rem'}
        >
          <Flex justifyContent={'center'} alignItems={'center'}>
            <BackButton
              size={'sm'}
              Icon={<BsArrowLeft />}
              ArialLabel={'Navigate left'}
              onClick={() => router.back()}
            />
          </Flex>
          <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'8px'}
          >
            <Heading
              as='h1'
              fontSize={'md'}
              fontWeight={'bold'}
              color={'secondary.50'}
              lineHeight={'base'}
              noOfLines={1}
            >
              Now Playing
            </Heading>
          </Flex>
          <Flex justifyContent={'center'} alignItems={'center'}>
            <Box>
              <Svgs.COMMENT_ICON onClick={onOpen} />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex
            direction={'column'}
            gap={'24px'}
            backgroundColor={'grey.10'}
            p={4}
            rounded={6}
            position={'absolute'}
            bottom={'0'}
            right={'0'}
            left={'0'}
            borderRadius={'30px 30px 0px 0px'}
            w={{ base: '100vw' }}
            height={'85vh'}
            overflowX={'hidden'}
            overflowY={'auto'}
            pb={'12vh'}
          >
            <Box
              borderRadius={'24px 24px 0px 0px'}
              minHeight={'30vh'}
              width={'100%'}
              position={'relative'}
              backgroundColor={'#526EA0'}
              p={'23px 19px'}
            >
              {player?.image !== undefined && (
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '24px 24px 0px 0px',
                  }}
                  src={`${player?.image}`}
                  alt={player?.title}
                  fill={true}
                />
              )}
            </Box>
            <Box width={'100%'} mt={'10px'}>
              <Flex
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'6px'}
              >
                <Heading
                  fontSize={'sm'}
                  color={'secondary.10'}
                  fontWeight={'semibold'}
                  lineHeight={'shorter'}
                  letterSpacing={'tighter'}
                >
                  {player?.title}
                </Heading>
                <Text
                  fontSize={'xxs'}
                  color={'#78828A'}
                  fontWeight={'medium'}
                  lineHeight={'shorter'}
                  letterSpacing={'tighter'}
                >
                  By {player?.name}
                </Text>
              </Flex>
              <audio
                ref={audioPlayer}
                src={currentAudio}
                preload='metadata'
              ></audio>
              <Flex
                direction={'row'}
                justifyContent={'space-around'}
                gap={'10px'}
                mt={'25px'}
              >
                {/* <input
                  type='range'
                  defaultValue='0'
                  ref={progressBar}
                  onChange={changeRange}
                  style={{
                    width: '100%',
                  }}
                /> */}
                <Slider
                  aria-label='slider-ex-1'
                  defaultValue={0}
                  ref={progressBar}
                  onChange={changeRange}
                  value={currentTime}
                >
                  <SliderTrack>
                    <SliderFilledTrack backgroundColor={'#171725'} />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                  <Text fontSize={'xxs'} color={'primary.50'}>
                    {calculateTime(currentTime)}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={'xxs'} color={'#9CA4AB'}>
                    {duration && !isNaN(duration) && calculateTime(duration)}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box width={'100%'} mt={'0px'}>
              <Flex
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'15px'}
                height={'5vh'}
              >
                <Box>
                  <Svgs.PREV_ICON_GREY onClick={backThirty} />
                </Box>
                {isPlaying ? (
                  <Icon
                    as={FaPause}
                    color={'grey.500'}
                    cursor={'pointer'}
                    height={'30px'}
                    width={'30px'}
                    onClick={togglePlayPause}
                  />
                ) : (
                  <Box>
                    <Svgs.PLAY_ROUND_BLUE_BIG onClick={togglePlayPause} />
                  </Box>
                )}
                <Box>
                  <Svgs.NEXT_ICON_GREY onClick={forwardThirty} />
                </Box>
              </Flex>
            </Box>
            <Box width={'100%'} mt={'20px'}>
              <Grid
                templateColumns={'80px 1fr 1fr'}
                backgroundColor={'secondary.50'}
                boxShadow={'0px 30px 60px rgba(103, 103, 103, 0.15)'}
                // p={'20px'}
              >
                <Box width={'70px'} height={'70px'}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '0px 0px 0px 0px',
                    }}
                    src={burnaBoy}
                    alt='Fluffybun the destroyer'
                  />
                </Box>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
                >
                  <Heading
                    fontSize={'xxs'}
                    fontWeight={'bold'}
                    color={'secondary.10'}
                  >
                    Emilion garcia
                  </Heading>
                  <Text
                    color={'#78828A'}
                    fontSize={'12px'}
                    fontWeight={'medium'}
                  >
                    This podcast discusses...
                  </Text>
                </Flex>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'flex-end'}
                  mr={'10px'}
                >
                  <AvatarGroup size='sm' max={3}>
                    <Avatar
                      name='Ryan Florence'
                      src='https://bit.ly/ryan-florence'
                    />
                    <Avatar
                      name='Segun Adebayo'
                      src='https://bit.ly/sage-adebayo'
                    />
                    <Avatar
                      name='Kent Dodds'
                      src='https://bit.ly/kent-c-dodds'
                    />
                    <Avatar
                      name='Prosper Otemuyiwa'
                      src='https://bit.ly/prosper-baba'
                    />
                    <Avatar
                      name='Christian Nwamba'
                      src='https://bit.ly/code-beast'
                    />
                    <Avatar
                      name='Christian Nwamba'
                      src='https://bit.ly/code-beast'
                    />
                    <Avatar
                      name='Christian Nwamba'
                      src='https://bit.ly/code-beast'
                    />
                    <Avatar
                      name='Christian Nwamba'
                      src='https://bit.ly/code-beast'
                    />
                    <Avatar
                      name='Christian Nwamba'
                      src='https://bit.ly/code-beast'
                    />
                    <Avatar
                      name='Christian Nwamba'
                      src='https://bit.ly/code-beast'
                    />
                    <Avatar
                      name='Christian Nwamba'
                      src='https://bit.ly/code-beast'
                    />
                  </AvatarGroup>
                </Flex>
              </Grid>
            </Box>
          </Flex>
        </Box>

        <BottomNavigation />
      </Flex>
    </>
  );
};

export default Playing;
