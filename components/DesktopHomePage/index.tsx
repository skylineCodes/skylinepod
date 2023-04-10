'use client';

import React from 'react';
import { Box, Flex, Grid, Heading, Text, Button, Icon } from '@chakra-ui/react';
import Navbar from '../Navbar';
import burnaBoy from '../../public/burna-boy3.jpg';
import Image from 'next/image';
import { Svgs } from '@/assets';
import './styles.css';
import { BsArrowRightShort, BsDot } from 'react-icons/bs';

const DesktopHomePage = () => {
  return (
    <Box>
      <Box
        position={'relative'}
        height={'90vh'}
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
        <Navbar />
        <Grid
          templateColumns={'1fr 1fr'}
          zIndex={'20'}
          maxWidth={'90%'}
          width={'100%'}
          height={'83vh'}
          margin={'auto'}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
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
                fontSize={'78px'}
                lineHeight={'75px'}
                fontWeight={'medium'}
              >
                The Best Place To Listen To Your Favourite{' '}
                <Text
                  as={'span'}
                  color={'primary.500'}
                  fontSize={'78px'}
                  fontWeight={'medium'}
                >
                  Podcasts.
                </Text>
              </Heading>
            </Box>
            <Box>
              <Text
                color={'secondary.10'}
                fontSize={'xs'}
                fontWeight={'medium'}
              >
                Lorem ipsum dolor sit amet consectetur. Ornare nascetur odio
                massa sagittis. Urna eu proin ut facilisis. Magna feugiat ante
                id posuere ac ultricies dignissim nibh eget. Tincidunt volutpat
                nisi nisl sed.
              </Text>
            </Box>
            <Flex gap={'30px'} justifyContent={'center'} alignItems={'center'}>
              <Button
                backgroundColor={'primary.500'}
                borderRadius={'4px'}
                fontWeight={'500'}
                lineHeight={'23px'}
                _hover={{ opacity: 0.8 }}
              >
                <Text color={'#FFFFFF'} fontSize={'18px'}>
                  Start trial for free
                </Text>
              </Button>
              <Flex gap={'7px'} cursor={'pointer'}>
                <Svgs.HOME_PLAYCIRCLE />
                <Text color={'#1C1916C7'} fontSize={'18px'}>
                  How It Works
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            zIndex={'20'}
            position={'relative'}
          >
            <Box position={'absolute'} bottom={'0px'}>
              <Svgs.BOY_PODCAST />
            </Box>
            <Box position={'absolute'} bottom={'0px'} right={'57px'}>
              <Svgs.MUSIC_WAVE />
            </Box>
          </Box>
        </Grid>
      </Box>
      <Box
        position={'relative'}
        height={'400px'}
        width={'100%'}
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
          pt={'64px'}
          gap={'15px'}
          zIndex={'20'}
        >
          <Heading
            color={'home.50'}
            fontSize={'45px'}
            fontWeight={'medium'}
            lineHeight={'57px'}
            zIndex={'20'}
          >
            Most popular creators
          </Heading>
          <Text zIndex={'20'} width={'40%'} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur. Consectetur lectus sit eget
            dis amet lacus. Cras fringilla non faucibus et mi. Mi sit nibh{' '}
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
            <Text color={'#FFFFFF'} fontSize={'18px'}>
              View All
            </Text>
            <Icon as={BsArrowRightShort} color={'#FFFFFF'} />
          </Button>
        </Flex>
        <Grid
          templateColumns={'1fr 1fr 1fr'}
          gridGap={'24px'}
          maxWidth={'90%'}
          margin={'auto'}
          mt={'70px'}
        >
          <Grid
            templateColumns={'1fr 1fr'}
            gridGap={'15px'}
            height={'233px'}
            width={'30vw'}
            backgroundColor={'#F4651C'}
            borderRadius={'20px'}
            zIndex={'20'}
            p={'14px'}
            position={'relative'}
          >
            <Box position={'absolute'} bottom={'0'} left={'-30px'}>
              <Svgs.BOY_POINTING />
            </Box>
            <Box></Box>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'flex-start'}
              gap={'24px'}
            >
              <Heading
                fontSize={'21px'}
                fontWeight={'semibold'}
                color={'#000000'}
                lineHeight={'26px'}
              >
                Get to know about user research
              </Heading>
              <Text
                fontSize={'18px'}
                fontWeight={'medium'}
                color={'#000000'}
                lineHeight={'22px'}
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
          <Grid
            templateColumns={'1fr 1fr'}
            gridGap={'15px'}
            height={'233px'}
            width={'30vw'}
            backgroundColor={'#E7A72B'}
            borderRadius={'20px'}
            zIndex={'20'}
            p={'14px'}
            position={'relative'}
          >
            <Box position={'absolute'} bottom={'0'} left={'30px'}>
              <Svgs.WOMAN_POINTING />
            </Box>
            <Box></Box>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'flex-start'}
              gap={'24px'}
            >
              <Heading
                fontSize={'21px'}
                fontWeight={'semibold'}
                color={'#000000'}
                lineHeight={'26px'}
              >
                Get to know about user research
              </Heading>
              <Text
                fontSize={'18px'}
                fontWeight={'medium'}
                color={'#000000'}
                lineHeight={'22px'}
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
          <Grid
            templateColumns={'1fr 1fr'}
            gridGap={'15px'}
            height={'233px'}
            width={'30vw'}
            backgroundColor={'#20ADA2'}
            borderRadius={'20px'}
            zIndex={'20'}
            p={'14px'}
            position={'relative'}
          >
            <Box position={'absolute'} bottom={'0'} left={'30px'}>
              <Svgs.MAN_POINTING />
            </Box>
            <Box></Box>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'flex-start'}
              gap={'24px'}
            >
              <Heading
                fontSize={'21px'}
                fontWeight={'semibold'}
                color={'#000000'}
                lineHeight={'26px'}
              >
                Get to know about user research
              </Heading>
              <Text
                fontSize={'18px'}
                fontWeight={'medium'}
                color={'#000000'}
                lineHeight={'22px'}
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
          backgroundColor: '#FCDDEC80',
        }}
      >
        <Grid
          templateColumns={'1fr 1fr'}
          zIndex={'20'}
          pt={'18rem'}
          pb={'5rem'}
          maxWidth={'90%'}
          margin={'auto'}
        >
          <Flex zIndex={'20'} direction={'column'} gap={'20px'}>
            <Heading
              fontSize={'58px'}
              color={'#1C1916'}
              lineHeight={'64px'}
              width={'70%'}
            >
              What makes us{' '}
              <Text as={'span'} color={'primary.500'}>
                unique
              </Text>{' '}
              from others
            </Heading>
            <Text
              fontSize={'xxs'}
              fontWeight={'medium'}
              color={'#1C1916A8'}
              width={'90%'}
            >
              Lorem ipsum dolor sit amet consectetur. Consectetur lectus sit
              eget dis amet lacus. Cras fringilla non faucibus et mi. Mi sit
              nibh{' '}
            </Text>
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
            <Box position={'absolute'} left={'0'}>
              <Svgs.WOMAN_MICROPHONE_WAVE />
            </Box>
            <Box position={'absolute'}>
              <Svgs.WOMAN_MICROPHONE />
            </Box>
            <Box position={'absolute'} left={'0'} bottom={'14%'}>
              <Svgs.WOMAN_MICROPHONE_LEFT_CARD />
            </Box>
            <Box position={'absolute'} right={'10%'}>
              <Svgs.WOMAN_MICROPHONE_RIGHT_CARD />
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
            color={'#1C1916'}
            lineHeight={'71px'}
            fontSize={'56px'}
            fontWeight={'semibold'}
            width={'55%'}
            textAlign={'center'}
          >
            It&apos;s simple & quick to record your{' '}
            <Text as={'span'} color={'#514EB6'}>
              podcast
            </Text>
          </Heading>
          <Text
            zIndex={'20'}
            width={'50%'}
            color={'#1C1916'}
            lineHeight={'21px'}
            fontSize={'17px'}
            fontWeight={'medium'}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur. Consectetur lectus sit eget
            dis amet lacus. Cras fringilla non faucibus et mi. Mi sit nibh diam
          </Text>
        </Flex>
        <Flex zIndex={'20'} maxWidth={'90%'} margin={'auto'} mt={'125px'}>
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
              width={'60%'}
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
              width={'60%'}
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
              width={'60%'}
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
              width={'60%'}
            >
              Lorem ipsum dolor sit amet consectetur. Consectetur lectus sit
              eget dis amet lacus.
            </Text>
          </Flex>
        </Flex>
        <Box position={'absolute'} top={'0'} left={'0'} zIndex={'20'}>
          <Svgs.MICROPHONE_SECTION_THREE />
        </Box>
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
          templateColumns={'1fr 1fr'}
          zIndex={'20'}
          maxWidth={'90%'}
          m={'auto'}
          pt={'78px'}
          pb={'1rem'}
        >
          <Flex direction={'column'} gap={'21px'} zIndex={'20'}>
            <Heading
              fontSize={'44px'}
              fontWeight={'semibold'}
              lineHeight={'140%'}
              color={'#1C1916'}
              width={'70%'}
            >
              <Text as={'span'} color={'primary.500'}>
                Explore
              </Text>{' '}
              our podcast by categories
            </Heading>
            <Text
              color={'#666666'}
              fontSize={'xs'}
              fontWeight={'medium'}
              width={'70%'}
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
          templateColumns={'1fr 1fr 1fr 1fr'}
          gridGap={'30px'}
          zIndex={'20'}
          maxWidth={'90%'}
          m={'auto'}
          pt={'78px'}
        >
          <Flex
            p={'15px'}
            width={'300px'}
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
            width={'300px'}
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
            width={'300px'}
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
            width={'300px'}
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
          templateColumns={'1fr 1fr 1fr 1fr'}
          gridGap={'30px'}
          zIndex={'20'}
          maxWidth={'90%'}
          m={'auto'}
          pt={'22px'}
          pb={'1rem'}
        >
          <Flex
            p={'15px'}
            width={'300px'}
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
            width={'300px'}
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
            width={'300px'}
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
            width={'300px'}
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
        minHeight={'80vh'}
        width={'100%'}
        backgroundColor={'#FCF3FF'}
      >
        <Flex pt={'10rem'}>
          <Box
            height={'327px'}
            width={'100%'}
            borderRadius={'20px'}
            backgroundColor={'#FAAE2A'}
            zIndex={'20'}
            maxWidth={'90%'}
            m={'auto'}
          >
            Hello
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default DesktopHomePage;
