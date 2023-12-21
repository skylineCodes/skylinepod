'use client';

import React, { useEffect, useState } from 'react';
import { Box, Flex, Grid, Heading, Text, Button, Icon, chakra, shouldForwardProp } from '@chakra-ui/react';
import Navbar from '../Navbar';
import burnaBoy from '../../public/burna-boy3.jpg';
import Image from 'next/image';
import { Svgs } from '@/assets';
import './styles.css';
import { BsArrowRight, BsArrowRightShort, BsDot, BsGoogle, BsTwitter } from 'react-icons/bs';
import { RiArrowRightUpLine } from 'react-icons/ri';
import Input from '../Input';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import MobileNavbar from '../MobileNavbar';
import { motion, isValidMotionProp, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';

const ChakraBox: any = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox2: any = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox3: any = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MobileHomePage = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [date, setDate] = useState<any>(new Date());
  const { ref, inView } = useInView();
  const { ref:ref1, inView:inView1 } = useInView();
  const animation = useAnimation();
  const animationTwo = useAnimation();
  const animationThree = useAnimation();
  const animationFour = useAnimation();
  const animationFive = useAnimation();

  const openNavbar = () => setShowNavbar(true);
  const closeNavbar = () => setShowNavbar(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  const router = useRouter();
  
  const gotoDashboard = () => {
    try {
      setLoading(true);

      router.push('/dashboard');

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { ease: 'easeOut', duration: .5 },
      });
      
      animationTwo.start({
        y: 0,
        opacity: 1,
        transition: { ease: 'easeOut', duration: 1 },
      });
      
      animationThree.start({
        y: 0,
        opacity: 1,
        transition: { ease: 'easeOut', duration: 1.5 },
      });
    }

    if (!inView) {
      animation.start({
        y: 200,
        opacity: 0
      });
      
      animationTwo.start({
        y: 200,
        opacity: 0,
      });
      
      animationThree.start({
        y: 200,
        opacity: 0,
      });
    }
  }, [inView]);

  useEffect(() => {
    if (inView1) {
      animationFour.start({
        y: 0,
        opacity: 1,
        transition: { ease: 'easeOut', duration: 1.5 },
      });
      animationFive.start({
        y: 0,
        opacity: 1,
        transition: { ease: 'easeOut', duration: 1.5 },
      });
    }

    if (!inView1) {      
      animationFour.start({
        y: 100,
        opacity: 0,
      });
      animationFive.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [inView1]);

  return (
    <>
      <MobileNavbar isOpen={showNavbar} handleClose={closeNavbar} />
      <Box overflowX={'hidden'}>
        <Box
          position={'relative'}
          height={'auto'}
          width={'100%'}
          _after={{
            width: '100%',
            height: '100%',
            content: '""',
            position: 'absolute',
            zIndex: '10',
            top: '0',
            left: '0',
            backgroundColor: 'grey.0',
          }}
        >
          <Box
            position={'relative'}
            zIndex={'99'}
            maxWidth={'90%'}
            m={'auto'}
            pt={'1rem'}
          >
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'100%'}
            >
              <Box>
                <Svgs.LOGO />
              </Box>
              <Box>
                <Svgs.MENU_ICON onClick={() => openNavbar()} />
              </Box>
            </Flex>
          </Box>
          <Grid
            templateColumns={'1fr'}
            gridGap={'20px'}
            zIndex={'20'}
            maxWidth={'90%'}
            width={'100%'}
            height={'auto'}
            m={'auto'}
            mt={'2rem'}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              gap={'30px'}
              zIndex={'20'}
            >
              <Box>
                <Text
                  color={'primary.500'}
                  fontSize={'xs'}
                  lineHeight={'short'}
                  fontWeight={'medium'}
                >
                  New Session Available
                </Text>
              </Box>
              <Box>
                <Heading
                  color={'home.50'}
                  fontSize={'30px'}
                  lineHeight={'40px'}
                  fontWeight={'medium'}
                >
                  The Best Place To Listen To Your Favourite{' '}
                  <Text
                    as={'span'}
                    color={'primary.500'}
                    fontSize={'30px'}
                    fontWeight={'medium'}
                  >
                    Podcasts.
                  </Text>
                </Heading>
              </Box>
              <Box>
                <Text
                  as={'span'}
                  color={'secondary.10'}
                  fontSize={'13px'}
                  lineHeight={'10px'}
                  fontWeight={'medium'}
                >
                  Lorem ipsum dolor sit amet consectetur. Ornare nascetur odio
                  massa sagittis. Urna eu proin ut facilisis. Magna feugiat ante
                  id posuere ac ultricies dignissim nibh eget. Tincidunt
                  volutpat nisi nisl sed.
                </Text>
              </Box>
              <Flex gap={'5px'} justifyContent={'center'} alignItems={'center'}>
                <Button
                  backgroundColor={'primary.500'}
                  borderRadius={'4px'}
                  fontWeight={'500'}
                  lineHeight={'23px'}
                  _hover={{ opacity: 0.8 }}
                  onClick={gotoDashboard}
                >
                  <Text color={'#FFFFFF'} fontSize={'15px'}>
                    Proceed to dashboard
                  </Text>
                </Button>
                <Flex
                  gap={'5px'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  cursor={'pointer'}
                >
                  <Svgs.HOME_PLAYCIRCLE_SMALL className={'playcircle-small'} />
                  <Text color={'#1C1916C7'} fontSize={'15px'}>
                    How It Works
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'flex-end'}
              alignItems={'center'}
              zIndex={'20'}
            >
              <AnimatePresence>
                <ChakraBox
                  initial={{ x: 70, opacity: 0 }}
                  animate={{ x: 10, opacity: 1 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                  whileInView={{ opacity: 1 }}
                  position={'relative'}
                >
                  <Svgs.GIRL_PODCAST_MOBILE
                    style={{
                      zIndex: '20',
                      position: 'relative',
                    }}
                  />
                  <Box position={'absolute'} top={'10%'} left={'-80%'}>
                    <Svgs.GIRL_PODCAST_CARD_MOBILE />
                  </Box>
                </ChakraBox>
              </AnimatePresence>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'flex-start'}
              alignItems={'center'}
              zIndex={'20'}
            >
              <AnimatePresence>
                <ChakraBox2
                  position={'relative'}
                  initial={{ x: -70, opacity: 0 }}
                  animate={{ x: 10, opacity: 1 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                  whileInView={{ opacity: 1 }}
                >
                  <Svgs.BOY_PODCAST_MOBILE />
                  <Box position={'absolute'} bottom={'10%'} right={'10%'}>
                    <Svgs.MUSIC_WAVE_MOBILE />
                  </Box>
                </ChakraBox2>
              </AnimatePresence>
            </Box>
          </Grid>
        </Box>
        <Box
          position={'relative'}
          height={'auto'}
          width={'100%'}
          pt={'1rem'}
          pb={'1rem'}
          _after={{
            width: '100%',
            height: '100%',
            content: '""',
            position: 'absolute',
            zIndex: '10',
            top: '0',
            left: '0',
            backgroundColor: '#EEEEF8',
          }}
        >
          <Flex
            direction={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            pt={'10px'}
            gap={'15px'}
            zIndex={'20'}
          >
            <Heading
              color={'home.50'}
              fontSize={'30px'}
              fontWeight={'medium'}
              lineHeight={'33px'}
              zIndex={'20'}
            >
              Most popular creators
            </Heading>
            <Text zIndex={'20'} width={'100%'} textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur. Consectetur lectus sit
              eget dis amet lacus. Cras fringilla non faucibus et mi. Mi sit
              nibh{' '}
            </Text>
            <Button
              backgroundColor={'primary.500'}
              borderRadius={'4px'}
              fontWeight={'500'}
              lineHeight={'23px'}
              height={'45px'}
              width={'138.19px'}
              zIndex={'20'}
              display={'flex'}
              alignItems={'center'}
              gap={'12px'}
              _hover={{ opacity: 0.8 }}
            >
              <Text color={'#FFFFFF'} fontSize={'16px'}>
                View All
              </Text>
              <Icon as={BsArrowRightShort} color={'#FFFFFF'} />
            </Button>
          </Flex>
          <Grid
            templateColumns={'1fr'}
            gridGap={'50px'}
            maxWidth={'90%'}
            margin={'auto'}
            mt={'70px'}
            position={'relative'}
            zIndex={'20'}
            ref={ref}
          >
            <ChakraBox3 animate={animation}>
              <Grid
                templateColumns={'1fr 1fr'}
                gridGap={'15px'}
                height={'233px'}
                width={'100%'}
                backgroundColor={'#F4651C'}
                borderRadius={'20px'}
                zIndex={'20'}
                p={'14px'}
                position={'relative'}
              >
                <Box position={'absolute'} bottom={'0'} left={'-10%'}>
                  <Svgs.BOY_POINTING />
                </Box>
                <Box></Box>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
                  gap={'12px'}
                >
                  <Heading
                    fontSize={'18px'}
                    fontWeight={'semibold'}
                    color={'#000000'}
                    lineHeight={'20px'}
                  >
                    Get to know about user research
                  </Heading>
                  <Text
                    fontSize={'16px'}
                    fontWeight={'medium'}
                    color={'#000000'}
                    lineHeight={'20px'}
                  >
                    Lorem ipsum dolor sit amet consectetur. Lacus et eu.
                  </Text>
                  <Button
                    backgroundColor={'#1C1916'}
                    borderRadius={'6px'}
                    fontWeight={'500'}
                    lineHeight={'23px'}
                    height={'40px'}
                    width={'137px'}
                    _hover={{ opacity: 0.8 }}
                    zIndex={'25'}
                    display={'flex'}
                    alignItems={'center'}
                    gap={'10px'}
                  >
                    <Svgs.HOME_PLAYCIRCLE_SMALL />
                    <Text color={'#FFF'} fontSize={'18px'}>
                      Play Now
                    </Text>
                  </Button>
                </Flex>
              </Grid>
            </ChakraBox3>
            <ChakraBox3 animate={animationTwo}>
              <Grid
                templateColumns={'1fr 1fr'}
                gridGap={'15px'}
                height={'233px'}
                width={'100%'}
                backgroundColor={'#E7A72B'}
                borderRadius={'20px'}
                zIndex={'20'}
                p={'14px'}
                position={'relative'}
              >
                <Box position={'absolute'} bottom={'0'} left={'0%'}>
                  <Svgs.WOMAN_POINTING />
                </Box>
                <Box></Box>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
                  gap={'12px'}
                >
                  <Heading
                    fontSize={'18px'}
                    fontWeight={'semibold'}
                    color={'#000000'}
                    lineHeight={'20px'}
                  >
                    Get to know about user research
                  </Heading>
                  <Text
                    fontSize={'16px'}
                    fontWeight={'medium'}
                    color={'#000000'}
                    lineHeight={'20px'}
                  >
                    Lorem ipsum dolor sit amet consectetur. Lacus et eu.
                  </Text>
                  <Button
                    backgroundColor={'#1C1916'}
                    borderRadius={'6px'}
                    fontWeight={'500'}
                    lineHeight={'23px'}
                    height={'40px'}
                    width={'137px'}
                    _hover={{ opacity: 0.8 }}
                    zIndex={'25'}
                    display={'flex'}
                    alignItems={'center'}
                    gap={'10px'}
                  >
                    <Svgs.HOME_PLAYCIRCLE_SMALL />
                    <Text color={'#FFF'} fontSize={'18px'}>
                      Play Now
                    </Text>
                  </Button>
                </Flex>
              </Grid>
            </ChakraBox3>
            <ChakraBox3 animate={animationThree}>
              <Grid
                templateColumns={'1fr 1fr'}
                gridGap={'15px'}
                height={'233px'}
                width={'100%'}
                backgroundColor={'#20ADA2'}
                borderRadius={'20px'}
                zIndex={'20'}
                p={'14px'}
                position={'relative'}
              >
                <Box position={'absolute'} bottom={'0'} left={'0%'}>
                  <Svgs.MAN_POINTING />
                </Box>
                <Box></Box>
                <Flex
                  direction={'column'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
                  gap={'12px'}
                >
                  <Heading
                    fontSize={'18px'}
                    fontWeight={'semibold'}
                    color={'#000000'}
                    lineHeight={'20px'}
                  >
                    Get to know about user research
                  </Heading>
                  <Text
                    fontSize={'16px'}
                    fontWeight={'medium'}
                    color={'#000000'}
                    lineHeight={'20px'}
                  >
                    Lorem ipsum dolor sit amet consectetur. Lacus et eu.
                  </Text>
                  <Button
                    backgroundColor={'#1C1916'}
                    borderRadius={'6px'}
                    fontWeight={'500'}
                    lineHeight={'23px'}
                    height={'40px'}
                    width={'137px'}
                    _hover={{ opacity: 0.8 }}
                    zIndex={'25'}
                    display={'flex'}
                    alignItems={'center'}
                    gap={'10px'}
                  >
                    <Svgs.HOME_PLAYCIRCLE_SMALL />
                    <Text color={'#FFF'} fontSize={'18px'}>
                      Play Now
                    </Text>
                  </Button>
                </Flex>
              </Grid>
            </ChakraBox3>
          </Grid>
        </Box>
        <Box
          position={'relative'}
          minHeight={'80vh'}
          height={'auto'}
          width={'100%'}
          _after={{
            width: '100%',
            height: '100%',
            content: '""',
            position: 'absolute',
            zIndex: '10',
            top: '0',
            left: '0',
            backgroundColor: '#FCDDEC80',
          }}
        >
          <Grid
            templateColumns={'1fr'}
            gridGap={'30px'}
            zIndex={'20'}
            pt={'2rem'}
            pb={'5rem'}
            maxWidth={'90%'}
            margin={'auto'}
          >
            <Flex zIndex={'20'} direction={'column'} gap={'20px'}>
              <Flex
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'30px'}
              >
                <Heading
                  fontSize={'35px'}
                  color={'#1C1916'}
                  lineHeight={'34px'}
                  width={'75%'}
                  textAlign={'center'}
                >
                  What makes us{' '}
                  <Text as={'span'} color={'primary.500'}>
                    unique
                  </Text>{' '}
                  from others
                </Heading>
                <Text
                  as={'span'}
                  fontSize={'xxs'}
                  fontWeight={'medium'}
                  color={'#1C1916A8'}
                  width={'90%'}
                  lineHeight={'25px'}
                  textAlign={'center'}
                >
                  Lorem ipsum dolor sit amet consectetur. Consectetur lectus sit
                  eget dis amet lacus. Cras fringilla non faucibus et mi. Mi sit
                  nibh{' '}
                </Text>
              </Flex>
              <Flex direction={'column'} gap={'35px'}>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'17px'}
                >
                  <Svgs.CHECKMARK_CIRCLE />
                  <Text
                    fontSize={'xxs'}
                    color={'#1C1916'}
                    lineHeight={'21px'}
                    fontWeight={'medium'}
                  >
                    Record your episodesat any occassions.
                  </Text>
                </Flex>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'17px'}
                >
                  <Svgs.CHECKMARK_CIRCLE />
                  <Text
                    fontSize={'xxs'}
                    color={'#1C1916'}
                    lineHeight={'21px'}
                    fontWeight={'medium'}
                  >
                    Record your episodesat any occassions.
                  </Text>
                </Flex>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'17px'}
                >
                  <Svgs.CHECKMARK_CIRCLE />
                  <Text
                    fontSize={'xxs'}
                    color={'#1C1916'}
                    lineHeight={'21px'}
                    fontWeight={'medium'}
                  >
                    Record your episodesat any occassions.
                  </Text>
                </Flex>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'17px'}
                >
                  <Svgs.CHECKMARK_CIRCLE />
                  <Text
                    fontSize={'xxs'}
                    color={'#1C1916'}
                    lineHeight={'21px'}
                    fontWeight={'medium'}
                  >
                    Record your episodesat any occassions.
                  </Text>
                </Flex>
              </Flex>
              <Box mt={'20px'}>
                <Button
                  backgroundColor={'primary.500'}
                  borderRadius={'4px'}
                  fontWeight={'500'}
                  lineHeight={'23px'}
                  height={'45px'}
                  width={'138.19px'}
                  zIndex={'20'}
                  display={'flex'}
                  alignItems={'center'}
                  gap={'12px'}
                  _hover={{ opacity: 0.8 }}
                >
                  <Text color={'#FFFFFF'} fontSize={'18px'}>
                    Know All
                  </Text>
                  <Icon as={BsArrowRightShort} color={'#FFFFFF'} />
                </Button>
              </Box>
            </Flex>
            <Flex
              zIndex={'20'}
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              position={'relative'}
            >
              <Box position={'relative'} zIndex={'20'} ref={ref1}>
                <Svgs.WOMAN_MICROPHONE
                  style={{
                    position: 'relative',
                    zIndex: 20,
                  }}
                />
                <Box position={'absolute'} top={'20%'}>
                  <Svgs.WOMAN_MICROPHONE_WAVE />
                </Box>
                <ChakraBox3
                  animate={animationFour}
                  position={'absolute'}
                  left={'-20%'}
                  top={'30%'}
                  zIndex={'20'}
                >
                  <Svgs.WOMAN_MICROPHONE_LEFT_CARD />
                </ChakraBox3>
                <ChakraBox3
                  animate={animationFive}
                  position={'absolute'}
                  right={'-20%'}
                  bottom={'15%'}
                  zIndex={'20'}
                >
                  <Svgs.WOMAN_MICROPHONE_RIGHT_CARD />
                </ChakraBox3>
              </Box>
            </Flex>
          </Grid>
        </Box>
        <Box
          position={'relative'}
          minHeight={'80vh'}
          width={'100%'}
          _after={{
            width: '100%',
            height: '100%',
            content: '""',
            position: 'absolute',
            zIndex: '10',
            top: '0',
            left: '0',
            backgroundColor: '#FFFDFA',
          }}
        >
          <Box zIndex={'20'} position={'absolute'} top={'-5%'}>
            <Svgs.RECORD_PODCAST_SMALL_ICON
              style={{
                position: 'relative',
                zIndex: '20',
              }}
            />
          </Box>
          <Flex
            direction={'column'}
            gap={'20px'}
            zIndex={'20'}
            maxWidth={'90%'}
            margin={'auto'}
            pt={'3rem'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Heading
              zIndex={'20'}
              fontSize={'35px'}
              color={'#1C1916'}
              lineHeight={'34px'}
              textAlign={'center'}
              fontWeight={'semibold'}
              width={'100%'}
            >
              It&apos;s simple & quick to record your{' '}
              <Text as={'span'} color={'#514EB6'}>
                podcast
              </Text>
            </Heading>
            <Text
              zIndex={'20'}
              as={'span'}
              fontSize={'xxs'}
              fontWeight={'medium'}
              color={'#1C1916A8'}
              width={'90%'}
              lineHeight={'25px'}
              textAlign={'center'}
            >
              Lorem ipsum dolor sit amet consectetur. Consectetur lectus sit
              eget dis amet lacus. Cras fringilla non faucibus et mi. Mi sit
              nibh diam
            </Text>
          </Flex>
          <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'50px'}
            zIndex={'20'}
            maxWidth={'90%'}
            margin={'auto'}
            mt={'50px'}
            pb={'50px'}
          >
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'10px'}
              zIndex={'20'}
            >
              <Box>
                <Svgs.RECORD_PODCAST_ICON />
              </Box>
              <Heading
                color={'#1C1916'}
                lineHeight={'25px'}
                fontSize={'20px'}
                fontWeight={'medium'}
              >
                Record your podcast
              </Heading>
              <Text
                color={'#666666'}
                lineHeight={'20px'}
                fontSize={'xxs'}
                fontWeight={'medium'}
                textAlign={'center'}
                width={'100%'}
              >
                Lorem ipsum dolor sit amet consectetur. Consectetur lectus sit
                eget dis amet lacus.
              </Text>
            </Flex>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'10px'}
              zIndex={'20'}
            >
              <Box>
                <Svgs.EDIT_PODCAST_ICON />
              </Box>
              <Heading
                color={'#1C1916'}
                lineHeight={'25px'}
                fontSize={'20px'}
                fontWeight={'medium'}
              >
                Record your podcast
              </Heading>
              <Text
                color={'#666666'}
                lineHeight={'20px'}
                fontSize={'xxs'}
                fontWeight={'medium'}
                textAlign={'center'}
                width={'100%'}
              >
                Lorem ipsum dolor sit amet consectetur. Consectetur lectus sit
                eget dis amet lacus.
              </Text>
            </Flex>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'10px'}
              zIndex={'20'}
            >
              <Box>
                <Svgs.UPLOAD_PODCAST_ICON />
              </Box>
              <Heading
                color={'#1C1916'}
                lineHeight={'25px'}
                fontSize={'20px'}
                fontWeight={'medium'}
              >
                Record your podcast
              </Heading>
              <Text
                color={'#666666'}
                lineHeight={'20px'}
                fontSize={'xxs'}
                fontWeight={'medium'}
                textAlign={'center'}
                width={'100%'}
              >
                Lorem ipsum dolor sit amet consectetur. Consectetur lectus sit
                eget dis amet lacus.
              </Text>
            </Flex>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'10px'}
              zIndex={'20'}
            >
              <Box>
                <Svgs.PREMIUM_PODCAST_ICON />
              </Box>
              <Heading
                color={'#1C1916'}
                lineHeight={'25px'}
                fontSize={'20px'}
                fontWeight={'medium'}
              >
                Record your podcast
              </Heading>
              <Text
                color={'#666666'}
                lineHeight={'20px'}
                fontSize={'xxs'}
                fontWeight={'medium'}
                textAlign={'center'}
                width={'100%'}
              >
                Lorem ipsum dolor sit amet consectetur. Consectetur lectus sit
                eget dis amet lacus.
              </Text>
            </Flex>
          </Flex>
          {/* <Box position={'absolute'} top={'0'} left={'0'} zIndex={'20'}>
            <Svgs.MICROPHONE_SECTION_THREE />
          </Box> */}
        </Box>
        <Box
          position={'relative'}
          minHeight={'80vh'}
          width={'100%'}
          _after={{
            width: '100%',
            height: '100%',
            content: '""',
            position: 'absolute',
            zIndex: '10',
            top: '0',
            left: '0',
            backgroundColor: '#FCF3FF',
          }}
        >
          <Grid
            templateColumns={'1fr'}
            zIndex={'20'}
            maxWidth={'90%'}
            m={'auto'}
            pt={'35px'}
            pb={'1rem'}
          >
            <Flex direction={'column'} gap={'21px'} zIndex={'20'}>
              <Heading
                zIndex={'20'}
                fontSize={'35px'}
                color={'#1C1916'}
                lineHeight={'34px'}
                fontWeight={'semibold'}
                width={'100%'}
              >
                <Text as={'span'} color={'primary.500'}>
                  Explore
                </Text>{' '}
                our podcast by categories
              </Heading>
              <Text
                zIndex={'20'}
                as={'span'}
                fontSize={'xxs'}
                fontWeight={'medium'}
                color={'#1C1916A8'}
                width={'100%'}
                lineHeight={'25px'}
                textAlign={'left'}
              >
                Choosing the best web hosting for your membership site is very
                crucial so you can offer a quality service to visitors. If your
                membership site is...
              </Text>
            </Flex>
            <Flex
              gap={'24px'}
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              zIndex={'20'}
              wrap={'wrap'}
              mt={'40px'}
            >
              <Box
                p={'0px 30px'}
                border={'0.5px solid #1C1916'}
                borderRadius={'4px'}
                backgroundColor={'#FBFBFC'}
                cursor={'pointer'}
                _hover={{ backgroundColor: 'primary.500', color: '#FFFFFF' }}
              >
                All
              </Box>
              <Box
                p={'0px 30px'}
                border={'0.5px solid #1C1916'}
                borderRadius={'4px'}
                backgroundColor={'#FBFBFC'}
                cursor={'pointer'}
                _hover={{ backgroundColor: 'primary.500', color: '#FFFFFF' }}
              >
                Music
              </Box>
              <Box
                p={'0px 30px'}
                border={'0.5px solid #1C1916'}
                borderRadius={'4px'}
                backgroundColor={'#FBFBFC'}
                cursor={'pointer'}
                _hover={{ backgroundColor: 'primary.500', color: '#FFFFFF' }}
              >
                Technology
              </Box>
              <Box
                p={'0px 30px'}
                border={'0.5px solid #1C1916'}
                borderRadius={'4px'}
                backgroundColor={'#FBFBFC'}
                cursor={'pointer'}
                _hover={{ backgroundColor: 'primary.500', color: '#FFFFFF' }}
              >
                Motivational
              </Box>
              <Box
                p={'0px 30px'}
                border={'0.5px solid #1C1916'}
                borderRadius={'4px'}
                backgroundColor={'#FBFBFC'}
                cursor={'pointer'}
                _hover={{ backgroundColor: 'primary.500', color: '#FFFFFF' }}
              >
                Fitness
              </Box>
              <Box
                p={'0px 30px'}
                border={'0.5px solid #1C1916'}
                borderRadius={'4px'}
                backgroundColor={'#FBFBFC'}
                cursor={'pointer'}
                _hover={{ backgroundColor: 'primary.500', color: '#FFFFFF' }}
              >
                Mental
              </Box>
            </Flex>
          </Grid>
          <Grid
            templateColumns={'1fr'}
            gridGap={'30px'}
            zIndex={'20'}
            maxWidth={'90%'}
            m={'auto'}
            pt={'78px'}
            placeItems={'center'}
          >
            <Flex
              p={'15px'}
              width={'80vw'}
              boxShadow={'0px 4px 23px rgba(0, 0, 0, 0.12)'}
              backgroundColor={'#FFFFFF'}
              borderRadius={'6px'}
              zIndex={'25'}
              gap={'12px'}
            >
              <Box width={'88px'} height={'84px'} zIndex={'20'}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                  }}
                  src={burnaBoy}
                  alt='Fluffybun the destroyer'
                />
              </Box>
              <Flex direction={'column'} gap={'10px'} zIndex={'20'}>
                <Heading
                  fontSize={'xxs'}
                  fontWeight={'semibold'}
                  color={'#1C1916'}
                  lineHeight={'20px'}
                >
                  Product Designer
                </Heading>
                <Flex
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'5px'}
                >
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    12 episodes
                  </Text>
                  <Icon as={BsDot} color={'#666666'} />
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    120 members
                  </Text>
                </Flex>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Svgs.PLAY_ROUND_PURPLE />
                  <Text
                    color={'#1C1916'}
                    fontWeight={'semibold'}
                    fontSize={'13px'}
                    lineHeight={'16px'}
                  >
                    Play Now
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              p={'15px'}
              width={'80vw'}
              boxShadow={'0px 4px 23px rgba(0, 0, 0, 0.12)'}
              backgroundColor={'#FFFFFF'}
              borderRadius={'6px'}
              zIndex={'25'}
              gap={'12px'}
            >
              <Box width={'88px'} height={'84px'} zIndex={'20'}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                  }}
                  src={burnaBoy}
                  alt='Fluffybun the destroyer'
                />
              </Box>
              <Flex direction={'column'} gap={'10px'} zIndex={'20'}>
                <Heading
                  fontSize={'xxs'}
                  fontWeight={'semibold'}
                  color={'#1C1916'}
                  lineHeight={'20px'}
                >
                  Product Designer
                </Heading>
                <Flex
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'5px'}
                >
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    12 episodes
                  </Text>
                  <Icon as={BsDot} color={'#666666'} />
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    120 members
                  </Text>
                </Flex>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Svgs.PLAY_ROUND_PURPLE />
                  <Text
                    color={'#1C1916'}
                    fontWeight={'semibold'}
                    fontSize={'13px'}
                    lineHeight={'16px'}
                  >
                    Play Now
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              p={'15px'}
              width={'80vw'}
              boxShadow={'0px 4px 23px rgba(0, 0, 0, 0.12)'}
              backgroundColor={'#FFFFFF'}
              borderRadius={'6px'}
              zIndex={'25'}
              gap={'12px'}
            >
              <Box width={'88px'} height={'84px'} zIndex={'20'}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                  }}
                  src={burnaBoy}
                  alt='Fluffybun the destroyer'
                />
              </Box>
              <Flex direction={'column'} gap={'10px'} zIndex={'20'}>
                <Heading
                  fontSize={'xxs'}
                  fontWeight={'semibold'}
                  color={'#1C1916'}
                  lineHeight={'20px'}
                >
                  Product Designer
                </Heading>
                <Flex
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'5px'}
                >
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    12 episodes
                  </Text>
                  <Icon as={BsDot} color={'#666666'} />
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    120 members
                  </Text>
                </Flex>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Svgs.PLAY_ROUND_PURPLE />
                  <Text
                    color={'#1C1916'}
                    fontWeight={'semibold'}
                    fontSize={'13px'}
                    lineHeight={'16px'}
                  >
                    Play Now
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              p={'15px'}
              width={'80vw'}
              boxShadow={'0px 4px 23px rgba(0, 0, 0, 0.12)'}
              backgroundColor={'#FFFFFF'}
              borderRadius={'6px'}
              zIndex={'25'}
              gap={'12px'}
            >
              <Box width={'88px'} height={'84px'} zIndex={'20'}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                  }}
                  src={burnaBoy}
                  alt='Fluffybun the destroyer'
                />
              </Box>
              <Flex direction={'column'} gap={'10px'} zIndex={'20'}>
                <Heading
                  fontSize={'xxs'}
                  fontWeight={'semibold'}
                  color={'#1C1916'}
                  lineHeight={'20px'}
                >
                  Product Designer
                </Heading>
                <Flex
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'5px'}
                >
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    12 episodes
                  </Text>
                  <Icon as={BsDot} color={'#666666'} />
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    120 members
                  </Text>
                </Flex>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Svgs.PLAY_ROUND_PURPLE />
                  <Text
                    color={'#1C1916'}
                    fontWeight={'semibold'}
                    fontSize={'13px'}
                    lineHeight={'16px'}
                  >
                    Play Now
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Grid>
          <Grid
            templateColumns={'1fr'}
            gridGap={'30px'}
            zIndex={'20'}
            maxWidth={'90%'}
            m={'auto'}
            pt={'22px'}
            pb={'1rem'}
            placeItems={'center'}
          >
            <Flex
              p={'15px'}
              width={'80vw'}
              boxShadow={'0px 4px 23px rgba(0, 0, 0, 0.12)'}
              backgroundColor={'#FFFFFF'}
              borderRadius={'6px'}
              zIndex={'25'}
              gap={'12px'}
            >
              <Box width={'88px'} height={'84px'} zIndex={'20'}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                  }}
                  src={burnaBoy}
                  alt='Fluffybun the destroyer'
                />
              </Box>
              <Flex direction={'column'} gap={'10px'} zIndex={'20'}>
                <Heading
                  fontSize={'xxs'}
                  fontWeight={'semibold'}
                  color={'#1C1916'}
                  lineHeight={'20px'}
                >
                  Product Designer
                </Heading>
                <Flex
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'5px'}
                >
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    12 episodes
                  </Text>
                  <Icon as={BsDot} color={'#666666'} />
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    120 members
                  </Text>
                </Flex>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Svgs.PLAY_ROUND_PURPLE />
                  <Text
                    color={'#1C1916'}
                    fontWeight={'semibold'}
                    fontSize={'13px'}
                    lineHeight={'16px'}
                  >
                    Play Now
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              p={'15px'}
              width={'80vw'}
              boxShadow={'0px 4px 23px rgba(0, 0, 0, 0.12)'}
              backgroundColor={'#FFFFFF'}
              borderRadius={'6px'}
              zIndex={'25'}
              gap={'12px'}
            >
              <Box width={'88px'} height={'84px'} zIndex={'20'}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                  }}
                  src={burnaBoy}
                  alt='Fluffybun the destroyer'
                />
              </Box>
              <Flex direction={'column'} gap={'10px'} zIndex={'20'}>
                <Heading
                  fontSize={'xxs'}
                  fontWeight={'semibold'}
                  color={'#1C1916'}
                  lineHeight={'20px'}
                >
                  Product Designer
                </Heading>
                <Flex
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'5px'}
                >
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    12 episodes
                  </Text>
                  <Icon as={BsDot} color={'#666666'} />
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    120 members
                  </Text>
                </Flex>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Svgs.PLAY_ROUND_PURPLE />
                  <Text
                    color={'#1C1916'}
                    fontWeight={'semibold'}
                    fontSize={'13px'}
                    lineHeight={'16px'}
                  >
                    Play Now
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              p={'15px'}
              width={'80vw'}
              boxShadow={'0px 4px 23px rgba(0, 0, 0, 0.12)'}
              backgroundColor={'#FFFFFF'}
              borderRadius={'6px'}
              zIndex={'25'}
              gap={'12px'}
            >
              <Box width={'88px'} height={'84px'} zIndex={'20'}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                  }}
                  src={burnaBoy}
                  alt='Fluffybun the destroyer'
                />
              </Box>
              <Flex direction={'column'} gap={'10px'} zIndex={'20'}>
                <Heading
                  fontSize={'xxs'}
                  fontWeight={'semibold'}
                  color={'#1C1916'}
                  lineHeight={'20px'}
                >
                  Product Designer
                </Heading>
                <Flex
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'5px'}
                >
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    12 episodes
                  </Text>
                  <Icon as={BsDot} color={'#666666'} />
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    120 members
                  </Text>
                </Flex>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Svgs.PLAY_ROUND_PURPLE />
                  <Text
                    color={'#1C1916'}
                    fontWeight={'semibold'}
                    fontSize={'13px'}
                    lineHeight={'16px'}
                  >
                    Play Now
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              p={'15px'}
              width={'80vw'}
              boxShadow={'0px 4px 23px rgba(0, 0, 0, 0.12)'}
              backgroundColor={'#FFFFFF'}
              borderRadius={'6px'}
              zIndex={'25'}
              gap={'12px'}
            >
              <Box width={'88px'} height={'84px'} zIndex={'20'}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                  }}
                  src={burnaBoy}
                  alt='Fluffybun the destroyer'
                />
              </Box>
              <Flex direction={'column'} gap={'10px'} zIndex={'20'}>
                <Heading
                  fontSize={'xxs'}
                  fontWeight={'semibold'}
                  color={'#1C1916'}
                  lineHeight={'20px'}
                >
                  Product Designer
                </Heading>
                <Flex
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'5px'}
                >
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    12 episodes
                  </Text>
                  <Icon as={BsDot} color={'#666666'} />
                  <Text
                    color={'#666666'}
                    fontSize={'13px'}
                    fontWeight={'medium'}
                    lineHeight={'20px'}
                  >
                    120 members
                  </Text>
                </Flex>
                <Flex
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Svgs.PLAY_ROUND_PURPLE />
                  <Text
                    color={'#1C1916'}
                    fontWeight={'semibold'}
                    fontSize={'13px'}
                    lineHeight={'16px'}
                  >
                    Play Now
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Grid>
        </Box>
        <Box
          position={'relative'}
          minHeight={'60vh'}
          width={'100%'}
          backgroundColor={'#FCF3FF'}
        >
          <Flex pt={'5rem'}>
            <Flex
              height={'auto'}
              width={'100%'}
              borderRadius={'20px'}
              backgroundColor={'#FAAE2A'}
              zIndex={'20'}
              maxWidth={'90%'}
              m={'auto'}
              position={'relative'}
            >
              <Grid templateColumns={'1fr'} position={'relative'}>
                <Flex
                  direction={'column'}
                  p={'15px'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
                  gap={'30px'}
                  zIndex={'20'}
                >
                  <Heading
                    fontSize={'20px'}
                    lineHeight={'23px'}
                    fontWeight={'semibold'}
                    width={'100%'}
                    color={'#1C1916'}
                  >
                    Ready to enjoy the most popular podcast in your city
                  </Heading>
                  <Text
                    fontSize={'18px'}
                    lineHeight={'24px'}
                    fontWeight={'medium'}
                    width={'100%'}
                  >
                    Lorem ipsum dolor sit amet consectetur. Urna egestas.
                  </Text>
                  <Button
                    backgroundColor={'#191614'}
                    borderRadius={'10px'}
                    fontWeight={'500'}
                    lineHeight={'23px'}
                    height={'35px'}
                    width={'100px'}
                    zIndex={'20'}
                    display={'flex'}
                    alignItems={'center'}
                    gap={'12px'}
                    _hover={{ opacity: 0.8 }}
                  >
                    <Text color={'#FFFFFF'} fontSize={'16px'}>
                      Sign Up
                    </Text>
                    <Icon as={RiArrowRightUpLine} color={'#FFFFFF'} />
                  </Button>
                </Flex>
                <Box position={'absolute'}>
                  <Svgs.WAVE_BANNER />
                </Box>
              </Grid>
            </Flex>
          </Flex>
        </Box>
        <Box
          position={'relative'}
          minHeight={'80vh'}
          width={'100%'}
          backgroundColor={'#FCF3FF'}
        >
          <Flex
            pt={'2rem'}
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'30px'}
          >
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              width={'100%'}
            >
              <Heading
                fontSize={'35px'}
                color={'#1C1916'}
                lineHeight={'34px'}
                textAlign={'center'}
                fontWeight={'semibold'}
                width={'100%'}
              >
                Affordable way to tell your{' '}
                <Text as={'span'} color={'primary.500'}>
                  stories
                </Text>{' '}
                professionally
              </Heading>
            </Flex>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'20px'}
            >
              <Flex>
                <Box
                  boxShadow={'0px 4px 23px rgba(0, 0, 0, 0.12)'}
                  backgroundColor={'#FFFFFF'}
                  pt={'10px'}
                  pb={'10px'}
                  pl={'30px'}
                  pr={'30px'}
                  cursor={'pointer'}
                  _hover={{ backgroundColor: 'primary.500', color: '#FFFFFF' }}
                >
                  <Text
                    fontWeight={'semibold'}
                    fontSize={'20px'}
                    lineHeight={'25px'}
                    color={'#666666'}
                    _hover={{ color: '#FFFFFF' }}
                  >
                    Monthly
                  </Text>
                </Box>
                <Box
                  boxShadow={'0px 4px 23px rgba(0, 0, 0, 0.12)'}
                  backgroundColor={'#FFFFFF'}
                  pt={'10px'}
                  pb={'10px'}
                  pl={'30px'}
                  pr={'30px'}
                  cursor={'pointer'}
                  _hover={{ backgroundColor: 'primary.500', color: '#FFFFFF' }}
                >
                  <Text
                    fontWeight={'semibold'}
                    fontSize={'20px'}
                    lineHeight={'25px'}
                    color={'#666666'}
                    _hover={{ color: '#FFFFFF' }}
                  >
                    Yearly
                  </Text>
                </Box>
              </Flex>
              <Flex
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={'24px'}
                mt={'20px'}
                mb={'40px'}
              >
                <Flex
                  direction={'column'}
                  height={'auto'}
                  width={'394px'}
                  borderRadius={'20px'}
                  backgroundColor={'primary.500'}
                  gap={'15px'}
                  justifyContent={'flex-start'}
                  alignItems={'flex-start'}
                  p={'1rem'}
                  pt={'1rem'}
                >
                  <Flex
                    direction={'column'}
                    gap={'15px'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    width={'100%'}
                  >
                    <Text
                      fontSize={'25px'}
                      lineHeight={'32px'}
                      color={'#FFFFFF'}
                    >
                      Basic
                    </Text>
                    <Text
                      fontWeight={'bold'}
                      fontSize={'44px'}
                      lineHeight={'81px'}
                      color={'#FFFFFF'}
                    >
                      NGN 8,200
                    </Text>
                  </Flex>
                  <Flex direction={'column'} gap={'25px'} mt={'20px'}>
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'flex-start'}
                      gap={'17px'}
                    >
                      <Svgs.CHECKMARK_CIRCLE_WHITE />
                      <Text
                        fontSize={'xxs'}
                        color={'#FFFFFF'}
                        lineHeight={'21px'}
                        fontWeight={'medium'}
                      >
                        Up to 3 devices
                      </Text>
                    </Flex>
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'flex-start'}
                      gap={'17px'}
                    >
                      <Svgs.CHECKMARK_CIRCLE_WHITE />
                      <Text
                        fontSize={'xxs'}
                        color={'#FFFFFF'}
                        lineHeight={'21px'}
                        fontWeight={'medium'}
                      >
                        Unlimited episodes
                      </Text>
                    </Flex>
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'flex-start'}
                      gap={'17px'}
                    >
                      <Svgs.CHECKMARK_CIRCLE_WHITE />
                      <Text
                        fontSize={'xxs'}
                        color={'#FFFFFF'}
                        lineHeight={'21px'}
                        fontWeight={'medium'}
                      >
                        50,000 monthly downloads
                      </Text>
                    </Flex>
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'flex-start'}
                      gap={'17px'}
                    >
                      <Svgs.CHECKMARK_CIRCLE_WHITE />
                      <Text
                        fontSize={'xxs'}
                        color={'#FFFFFF'}
                        lineHeight={'21px'}
                        fontWeight={'medium'}
                        width={'70%'}
                      >
                        Price shown after 40% discount applied. Discount
                        applicable for first 12 months
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    direction={'column'}
                    width={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    mt={'3rem'}
                  >
                    <Button
                      backgroundColor={'#191614'}
                      borderRadius={'10px'}
                      fontWeight={'500'}
                      lineHeight={'23px'}
                      height={'45px'}
                      width={'236.05px'}
                      zIndex={'20'}
                      display={'flex'}
                      alignItems={'center'}
                      gap={'12px'}
                      _hover={{ opacity: 0.8 }}
                    >
                      <Text color={'#FFFFFF'} fontSize={'18px'}>
                        Start 7 days free trial
                      </Text>
                      <Icon as={BsArrowRightShort} color={'#FFFFFF'} />
                    </Button>
                  </Flex>
                </Flex>
                <Flex
                  direction={'column'}
                  height={'auto'}
                  width={'394px'}
                  borderRadius={'20px'}
                  backgroundColor={'grey.0'}
                  border={'0.5px solid #514EB6'}
                  gap={'15px'}
                  justifyContent={'flex-start'}
                  alignItems={'flex-start'}
                  p={'1rem'}
                  pt={'1rem'}
                >
                  <Flex
                    direction={'column'}
                    gap={'15px'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    width={'100%'}
                  >
                    <Text
                      fontSize={'25px'}
                      lineHeight={'32px'}
                      color={'#666666'}
                    >
                      Popular
                    </Text>
                    <Text
                      fontWeight={'bold'}
                      fontSize={'44px'}
                      lineHeight={'81px'}
                      color={'#666666'}
                    >
                      NGN 10,500
                    </Text>
                  </Flex>
                  <Flex direction={'column'} gap={'25px'} mt={'20px'}>
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'flex-start'}
                      gap={'17px'}
                    >
                      <Svgs.CHECKMARK_CIRCLE />
                      <Text
                        fontSize={'xxs'}
                        color={'#666666'}
                        lineHeight={'21px'}
                        fontWeight={'medium'}
                      >
                        Up to 3 devices
                      </Text>
                    </Flex>
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'flex-start'}
                      gap={'17px'}
                    >
                      <Svgs.CHECKMARK_CIRCLE />
                      <Text
                        fontSize={'xxs'}
                        color={'#666666'}
                        lineHeight={'21px'}
                        fontWeight={'medium'}
                      >
                        Unlimited episodes
                      </Text>
                    </Flex>
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'flex-start'}
                      gap={'17px'}
                    >
                      <Svgs.CHECKMARK_CIRCLE />
                      <Text
                        fontSize={'xxs'}
                        color={'#666666'}
                        lineHeight={'21px'}
                        fontWeight={'medium'}
                      >
                        50,000 monthly downloads
                      </Text>
                    </Flex>
                    <Flex
                      justifyContent={'flex-start'}
                      alignItems={'flex-start'}
                      gap={'17px'}
                    >
                      <Svgs.CHECKMARK_CIRCLE />
                      <Text
                        fontSize={'xxs'}
                        color={'#666666'}
                        lineHeight={'21px'}
                        fontWeight={'medium'}
                        width={'70%'}
                      >
                        Price shown after 40% discount applied. Discount
                        applicable for first 12 months
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    direction={'column'}
                    width={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    mt={'3rem'}
                  >
                    <Button
                      backgroundColor={'#191614'}
                      borderRadius={'10px'}
                      fontWeight={'500'}
                      lineHeight={'23px'}
                      height={'45px'}
                      width={'236.05px'}
                      zIndex={'20'}
                      display={'flex'}
                      alignItems={'center'}
                      gap={'12px'}
                      _hover={{ opacity: 0.8 }}
                    >
                      <Text color={'#FFFFFF'} fontSize={'18px'}>
                        Get Subscription
                      </Text>
                      <Icon as={BsArrowRightShort} color={'#FFFFFF'} />
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box
          position={'relative'}
          minHeight={'60vh'}
          width={'100%'}
          backgroundColor={'#FCF3FF'}
          pt={'1rem'}
        >
          <Flex
            height={'276px'}
            width={'100%'}
            borderRadius={'20px'}
            backgroundColor={'#1FBEB3'}
            zIndex={'20'}
            maxWidth={'100%'}
            p={'51px'}
            position={'relative'}
            direction={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            gap={'40px'}
            mt={'4rem'}
          >
            <Heading
              fontSize={'27px'}
              fontWeight={'medium'}
              textAlign={'center'}
            >
              Get notified every time web post a new episode
            </Heading>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              width={'100%'}
              position={'relative'}
              zIndex={'20'}
            >
              <Input
                type='text'
                placeholder='Enter your email address here'
                element={
                  <Icon
                    as={BsArrowRight}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                }
                style={{
                  boxShadow: '0px 4px 23px rgba(0, 0, 0, 0.12)',
                  borderRadius: '10px',
                }}
              />
            </Flex>
            <Flex
              direction={'column'}
              alignItems={'center'}
              gap={'10px'}
              position={'absolute'}
              right={'15px'}
              top={'45px'}
            >
              <Svgs.NEWSLETTER_ONE />
              <Svgs.NEWSLETTER_ONE_IMAGE />
            </Flex>
            <Flex
              direction={'column'}
              alignItems={'center'}
              gap={'10px'}
              position={'absolute'}
              left={'-8px'}
              bottom={'30px'}
            >
              <Svgs.NEWSLETTER_ONE />
              <Svgs.NEWSLETTER_ONE_IMAGE />
            </Flex>
          </Flex>
        </Box>
        <Box
          position={'relative'}
          minHeight={'40vh'}
          width={'100%'}
          backgroundColor={'#FFFFFF'}
        >
          <Grid
            templateColumns={'1fr'}
            gridGap={'30px'}
            maxWidth={'90%'}
            m={'auto'}
            pt={'49px'}
            pb={'49px'}
          >
            <Flex
              direction={'column'}
              justifyContent={'flex-start'}
              gap={'10px'}
            >
              <Svgs.LOGO />
              <Text
                fontSize={'15px'}
                lineHeight={'18px'}
                color={'#8C97AC'}
                fontWeight={'medium'}
              >
                Lorem ipsum dolor sit amet consectetur. Ultricies morbi diam
                convallis eu diam varius lectus sed morbi. At quam eu augue dui
                sollicitudin enim orci adipiscing. Quis semper non nibh aliquet
                morbi congue. Felis adipiscing venenatis pellentesque ac
                sollicitudin id sed sed. Eget tempor tortor blandit quis massa
                risus imperdiet.
              </Text>
            </Flex>
            <Flex
              direction={'row'}
              gap={'15px'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Flex direction={'column'} justifyContent={'flex-start'}>
                <Heading fontSize={'18px'} fontWeight={'500'} color={'#8C97AC'}>
                  Quick Links
                </Heading>
                <Flex direction={'column'} gap={'10px'} pt={'20px'}>
                  <Link href={'/'}>
                    <Text
                      color={'#C5CBD5'}
                      fontSize={'16px'}
                      lineHeight={'20px'}
                    >
                      Features
                    </Text>
                  </Link>
                  <Link href={'/'}>
                    <Text
                      color={'#C5CBD5'}
                      fontSize={'16px'}
                      lineHeight={'20px'}
                    >
                      How It Works
                    </Text>
                  </Link>
                  <Link href={'/'}>
                    <Text
                      color={'#C5CBD5'}
                      fontSize={'16px'}
                      lineHeight={'20px'}
                    >
                      Pricing
                    </Text>
                  </Link>
                  <Link href={'/'}>
                    <Text
                      color={'#C5CBD5'}
                      fontSize={'16px'}
                      lineHeight={'20px'}
                    >
                      Categories
                    </Text>
                  </Link>
                  <Link href={'/'}>
                    <Text
                      color={'#C5CBD5'}
                      fontSize={'16px'}
                      lineHeight={'20px'}
                    >
                      About
                    </Text>
                  </Link>
                </Flex>
              </Flex>
              <Flex direction={'column'} justifyContent={'flex-start'}>
                <Heading fontSize={'18px'} fontWeight={'500'} color={'#8C97AC'}>
                  Other Links
                </Heading>
                <Flex direction={'column'} gap={'10px'} pt={'20px'}>
                  <Link href={'/'}>
                    <Text
                      color={'#C5CBD5'}
                      fontSize={'16px'}
                      lineHeight={'20px'}
                    >
                      Privacy
                    </Text>
                  </Link>
                  <Link href={'/'}>
                    <Text
                      color={'#C5CBD5'}
                      fontSize={'16px'}
                      lineHeight={'20px'}
                    >
                      Terms & Conditions
                    </Text>
                  </Link>
                  <Link href={'/'}>
                    <Text
                      color={'#C5CBD5'}
                      fontSize={'16px'}
                      lineHeight={'20px'}
                    >
                      Disclaimer
                    </Text>
                  </Link>
                  <Link href={'/'}>
                    <Text
                      color={'#C5CBD5'}
                      fontSize={'16px'}
                      lineHeight={'20px'}
                    >
                      FAQs
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              direction={'row'}
              gap={'15px'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Flex direction={'column'} justifyContent={'flex-start'}>
                <Heading fontSize={'18px'} fontWeight={'500'} color={'#8C97AC'}>
                  Contacts
                </Heading>
                <Flex direction={'column'} gap={'10px'} pt={'20px'}>
                  <Text color={'#FFD166'} fontSize={'16px'} lineHeight={'20px'}>
                    +2349066432526
                  </Text>
                  <Text color={'#FFD166'} fontSize={'16px'} lineHeight={'20px'}>
                    hello@skylinetalk.org
                  </Text>
                </Flex>
              </Flex>
              <Flex direction={'column'}>
                <Flex
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'15px'}
                >
                  <Icon as={BsTwitter} size={'lg'} />
                  <Icon as={FaFacebookF} size={'lg'} />
                  <Icon as={BsGoogle} size={'lg'} />
                </Flex>
              </Flex>
            </Flex>
          </Grid>
          <Flex
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'40px'}
          >
            <Text
              color={'#C5CBD5'}
              fontSize={'16px'}
              lineHeight={'20px'}
              pb={'10px'}
            >
              Copyright© Skylinetalk {date?.getFullYear()}
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default MobileHomePage;
