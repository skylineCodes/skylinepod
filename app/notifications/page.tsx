'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import BottomNavigation from '@/components/BottomNavigation';
import { Svgs } from '@/assets';

import './styles.css';
import { useRouter } from 'next/navigation';
import BackButton from '@/components/BackButton';
import { BsArrowLeft } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import CommentModal from '@/components/CommentModal';
import { RxDotFilled } from 'react-icons/rx';

const Notifications = () => {
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

  const player: any = useSelector((state: any) => state.player.player);

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
        backgroundColor={'primary.50'}
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
              Notifications
            </Heading>
          </Flex>
          <Flex justifyContent={'center'} alignItems={'center'}>
            <Box>{/* <Svgs.COMMENT_ICON onClick={onOpen} /> */}</Box>
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
            <Box width={'100%'} mt={'10px'}>
              <Flex direction={'column'} gap={'20px'}>
                <Heading fontSize={'xxs'} color={'#9CA4AB'}>
                  Today
                </Heading>
                <Flex direction={'column'} gap={'10px'}>
                  <Grid
                    templateColumns={'35px 1fr'}
                    gridGap={'12px'}
                    placeItems={'center'}
                  >
                    <Flex>
                      <Avatar
                        name='Ryan Florence'
                        size={'md'}
                        src='https://bit.ly/ryan-florence'
                      />
                    </Flex>
                    <Flex direction={'column'}>
                      <Flex
                        direction={'column'}
                        wrap={'wrap'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                      >
                        <Text
                          fontSize={'xs'}
                          fontWeight={'semibold'}
                          color={'secondary.10'}
                          letterSpacing={'tighter'}
                          lineHeight={'shortest'}
                        >
                          John posted a podcast called let's chill now
                        </Text>
                      </Flex>
                      <Flex
                        direction={'row'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        gap={'2px'}
                      >
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            26, Nov 2023
                          </Text>
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Icon as={RxDotFilled} color={'#9CA4AB'} />
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            08:45pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Grid>
                  <Grid
                    templateColumns={'35px 1fr'}
                    gridGap={'12px'}
                    placeItems={'center'}
                  >
                    <Flex>
                      <Avatar
                        name='Ryan Florence'
                        size={'md'}
                        src='https://bit.ly/ryan-florence'
                      />
                    </Flex>
                    <Flex direction={'column'}>
                      <Flex
                        direction={'column'}
                        wrap={'wrap'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                      >
                        <Text
                          fontSize={'xs'}
                          fontWeight={'semibold'}
                          color={'secondary.10'}
                          letterSpacing={'tighter'}
                          lineHeight={'shortest'}
                        >
                          John posted a podcast called let's chill now
                        </Text>
                      </Flex>
                      <Flex
                        direction={'row'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        gap={'2px'}
                      >
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            26, Nov 2023
                          </Text>
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Icon as={RxDotFilled} color={'#9CA4AB'} />
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            08:45pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Grid>
                </Flex>
              </Flex>
              <Flex direction={'column'} gap={'20px'} mt={'24px'}>
                <Heading fontSize={'xxs'} color={'#9CA4AB'}>
                  Yesterday
                </Heading>
                <Flex direction={'column'} gap={'10px'}>
                  <Grid
                    templateColumns={'35px 1fr'}
                    gridGap={'12px'}
                    placeItems={'center'}
                  >
                    <Flex>
                      <Avatar
                        name='Ryan Florence'
                        size={'md'}
                        src='https://bit.ly/ryan-florence'
                      />
                    </Flex>
                    <Flex direction={'column'}>
                      <Flex
                        direction={'column'}
                        wrap={'wrap'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                      >
                        <Text
                          fontSize={'xs'}
                          fontWeight={'semibold'}
                          color={'secondary.10'}
                          letterSpacing={'tighter'}
                          lineHeight={'shortest'}
                        >
                          John posted a podcast called let's chill now
                        </Text>
                      </Flex>
                      <Flex
                        direction={'row'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        gap={'2px'}
                      >
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            26, Nov 2023
                          </Text>
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Icon as={RxDotFilled} color={'#9CA4AB'} />
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            08:45pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Grid>
                  <Grid
                    templateColumns={'35px 1fr'}
                    gridGap={'12px'}
                    placeItems={'center'}
                  >
                    <Flex>
                      <Avatar
                        name='Ryan Florence'
                        size={'md'}
                        src='https://bit.ly/ryan-florence'
                      />
                    </Flex>
                    <Flex direction={'column'}>
                      <Flex
                        direction={'column'}
                        wrap={'wrap'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                      >
                        <Text
                          fontSize={'xs'}
                          fontWeight={'semibold'}
                          color={'secondary.10'}
                          letterSpacing={'tighter'}
                          lineHeight={'shortest'}
                        >
                          John posted a podcast called let's chill now
                        </Text>
                      </Flex>
                      <Flex
                        direction={'row'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        gap={'2px'}
                      >
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            26, Nov 2023
                          </Text>
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Icon as={RxDotFilled} color={'#9CA4AB'} />
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            08:45pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Grid>
                  <Grid
                    templateColumns={'35px 1fr'}
                    gridGap={'12px'}
                    placeItems={'center'}
                  >
                    <Flex>
                      <Avatar
                        name='Ryan Florence'
                        size={'md'}
                        src='https://bit.ly/ryan-florence'
                      />
                    </Flex>
                    <Flex direction={'column'}>
                      <Flex
                        direction={'column'}
                        wrap={'wrap'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                      >
                        <Text
                          fontSize={'xs'}
                          fontWeight={'semibold'}
                          color={'secondary.10'}
                          letterSpacing={'tighter'}
                          lineHeight={'shortest'}
                        >
                          John posted a podcast called let's chill now
                        </Text>
                      </Flex>
                      <Flex
                        direction={'row'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        gap={'2px'}
                      >
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            26, Nov 2023
                          </Text>
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Icon as={RxDotFilled} color={'#9CA4AB'} />
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            08:45pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Grid>
                </Flex>
              </Flex>
              <Flex direction={'column'} gap={'20px'} mt={'24px'}>
                <Heading fontSize={'xxs'} color={'#9CA4AB'}>
                  Last Week
                </Heading>
                <Flex direction={'column'} gap={'10px'}>
                  <Grid
                    templateColumns={'35px 1fr'}
                    gridGap={'12px'}
                    placeItems={'center'}
                  >
                    <Flex>
                      <Avatar
                        name='Ryan Florence'
                        size={'md'}
                        src='https://bit.ly/ryan-florence'
                      />
                    </Flex>
                    <Flex direction={'column'}>
                      <Flex
                        direction={'column'}
                        wrap={'wrap'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                      >
                        <Text
                          fontSize={'xs'}
                          fontWeight={'semibold'}
                          color={'secondary.10'}
                          letterSpacing={'tighter'}
                          lineHeight={'shortest'}
                        >
                          John posted a podcast called let's chill now
                        </Text>
                      </Flex>
                      <Flex
                        direction={'row'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        gap={'2px'}
                      >
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            26, Nov 2023
                          </Text>
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Icon as={RxDotFilled} color={'#9CA4AB'} />
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            08:45pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Grid>
                  <Grid
                    templateColumns={'35px 1fr'}
                    gridGap={'12px'}
                    placeItems={'center'}
                  >
                    <Flex>
                      <Avatar
                        name='Ryan Florence'
                        size={'md'}
                        src='https://bit.ly/ryan-florence'
                      />
                    </Flex>
                    <Flex direction={'column'}>
                      <Flex
                        direction={'column'}
                        wrap={'wrap'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                      >
                        <Text
                          fontSize={'xs'}
                          fontWeight={'semibold'}
                          color={'secondary.10'}
                          letterSpacing={'tighter'}
                          lineHeight={'shortest'}
                        >
                          John posted a podcast called let's chill now
                        </Text>
                      </Flex>
                      <Flex
                        direction={'row'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        gap={'2px'}
                      >
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            26, Nov 2023
                          </Text>
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Icon as={RxDotFilled} color={'#9CA4AB'} />
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            08:45pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Grid>
                  <Grid
                    templateColumns={'35px 1fr'}
                    gridGap={'12px'}
                    placeItems={'center'}
                  >
                    <Flex>
                      <Avatar
                        name='Ryan Florence'
                        size={'md'}
                        src='https://bit.ly/ryan-florence'
                      />
                    </Flex>
                    <Flex direction={'column'}>
                      <Flex
                        direction={'column'}
                        wrap={'wrap'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                      >
                        <Text
                          fontSize={'xs'}
                          fontWeight={'semibold'}
                          color={'secondary.10'}
                          letterSpacing={'tighter'}
                          lineHeight={'shortest'}
                        >
                          John posted a podcast called let's chill now
                        </Text>
                      </Flex>
                      <Flex
                        direction={'row'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        gap={'2px'}
                      >
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            26, Nov 2023
                          </Text>
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Icon as={RxDotFilled} color={'#9CA4AB'} />
                        </Flex>
                        <Flex
                          direction={'column'}
                          justifyContent={'flex-start'}
                          alignItems={'center'}
                        >
                          <Text fontSize={'xxs'} color={'#9CA4AB'}>
                            08:45pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Grid>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <BottomNavigation />
      </Flex>
    </>
  );
};

export default Notifications;
