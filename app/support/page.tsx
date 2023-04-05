'use client';

import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Switch,
  useDisclosure,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Svgs } from '@/assets';

import './styles.css';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';

const Explore = () => {
  const router = useRouter();

  return (
    <>
      <Box backgroundColor={'grey.0'} p={'12px'}>
        <Box
          display={'grid'}
          gridTemplateColumns={'40px 1fr 35px'}
          gridGap={'10px'}
          width={'100%'}
          mt={'1rem'}
        >
          <Flex justifyContent={'center'} alignItems={'center'}>
            <Svgs.ARROW_BACK_WHITE onClick={() => router.back()} />
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
              Help and Support
            </Heading>
          </Flex>
        </Box>
        <Flex direction={'column'} mt={'20px'} p={'12px'} gap={'20px'}>
          <Box width={'100%'}>
            <Input
              type='text'
              height={'52px'}
              placeholder='Search...'
              leftElement={<Svgs.SEARCH_ICON_GREY />}
              element={<Svgs.FILTER_OUTLINE />}
            />
          </Box>
          <Box width={'100%'}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text
                        fontSize={'xxs'}
                        fontWeight={'semibold'}
                        color={'secondary.10'}
                        lineHeight={'base'}
                      >
                        How do I retrieve my account
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text
                        fontSize={'xxs'}
                        fontWeight={'semibold'}
                        color={'secondary.10'}
                        lineHeight={'base'}
                      >
                        How do I add multiple devices
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text
                        fontSize={'xxs'}
                        fontWeight={'semibold'}
                        color={'secondary.10'}
                        lineHeight={'base'}
                      >
                        How do I listen to a podcast
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text
                        fontSize={'xxs'}
                        fontWeight={'semibold'}
                        color={'secondary.10'}
                        lineHeight={'base'}
                      >
                        Can I subscribe to a channel
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text
                        fontSize={'xxs'}
                        fontWeight={'semibold'}
                        color={'secondary.10'}
                        lineHeight={'base'}
                      >
                        How do I pay?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Explore;
