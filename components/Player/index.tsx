import React, { useState, useRef, useEffect } from 'react';
import { Box, Flex, Heading, Text, Icon, Divider, Grid, Stack, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import Image from 'next/image';
import { BsShuffle, BsVolumeUp } from 'react-icons/bs';
import { FiRepeat } from 'react-icons/fi';
import burnaBoy from '../../public/burna-boy3.jpg';
import { FaBackward, FaForward, FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export interface InputProps {
  //
}

const Player = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioPlayer: any = useRef<any>(); // reference our audio component
  const progressBar: any = useRef<any>(); // reference our progress bar
  const animationRef: any = useRef<any>(); // reference the animation

  const player: any = useSelector((state: any) => state.player.player);

  const [currentAudio, setCurrentAudio] = useState<string>('');

  const audioToggle: any = useSelector(
    (state: any) => state.player.audioToggle
  );

  // console.log(player);
  // console.log(calculateTime(duration));
  // console.log(audioPlayer);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current?.duration);
    setDuration(seconds);

    if (progressBar?.current !== undefined) {
      progressBar.current.max = seconds;
    }
  }, [
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
  ]);

  useEffect(() => {
    console.log(audioToggle)
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
      audioPlayer.current.play();
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
                  src={currentAudio}
                  // src='https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3'
                  preload='metadata'
                ></audio>
                <Icon
                  as={BsShuffle}
                  color={'secondary.50'}
                  cursor={'pointer'}
                  height={'15px'}
                  width={'15px'}
                />
                <Icon
                  as={FaStepBackward}
                  color={'secondary.50'}
                  cursor={'pointer'}
                  height={'20px'}
                  width={'20px'}
                  // onClick={backThirty}
                />
                <Icon
                  as={FaBackward}
                  color={'secondary.50'}
                  cursor={'pointer'}
                  height={'25px'}
                  width={'25px'}
                  onClick={backThirty}
                />
                {isPlaying ? (
                  <Icon
                    as={FaPause}
                    color={'secondary.50'}
                    cursor={'pointer'}
                    height={'30px'}
                    width={'30px'}
                    onClick={togglePlayPause}
                  />
                ) : (
                  <Icon
                    as={FaPlay}
                    color={'secondary.50'}
                    cursor={'pointer'}
                    height={'30px'}
                    width={'30px'}
                    onClick={togglePlayPause}
                  />
                )}
                <Icon
                  as={FaForward}
                  color={'secondary.50'}
                  cursor={'pointer'}
                  height={'25px'}
                  width={'25px'}
                  onClick={forwardThirty}
                />
                <Icon
                  as={FaStepForward}
                  color={'secondary.50'}
                  cursor={'pointer'}
                  height={'20px'}
                  width={'20px'}
                  // onClick={forwardThirty}
                />
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
                    <SliderFilledTrack />
                  </SliderTrack>
                  {/* <SliderThumb /> */}
                </Slider>
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
    </>
  );
};

export default Player;