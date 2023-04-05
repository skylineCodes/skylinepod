'use client';

import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Svgs } from '@/assets';

import './styles.css';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';
import ProfilePictureModal from '@/components/ProfilePictureModal';
import { BiHide, BiShow } from 'react-icons/bi';

const Explore = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => setShow(!show);
  const handleClickConfirm = () => setShowConfirm(!showConfirm);

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
              Legal and Policies
            </Heading>
          </Flex>
        </Box>
        <Flex
          gap={'20px'}
          height={'80vh'}
          direction={'column'}
          mt={'24px'}
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
          <Flex direction={'column'} gap={'10px'}>
            <Heading
              fontSize={'xxs'}
              fontWeight={'bold'}
              lineHeight={'24px'}
              color={'secondary.10'}
            >
              Terms
            </Heading>
            <Text
              fontSize={'14px'}
              fontWeight={'medium'}
              lineHeight={'22px'}
              color={'#66707A'}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              ornare quam vel facilisis feugiat amet sagittis arcu, tortor.
              Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor
              ut etiam est, amet aliquet ut vivamus. Odio vulputate est id
              tincidunt fames. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Eget ornare quam vel facilisis feugiat amet
              sagittis arcu, tortor. Sapien, consequat ultrices morbi orci
              semper sit nulla. Leo auctor ut etiam est, amet aliquet ut
              vivamus. Odio vulputate est id tincidunt fames.
            </Text>
          </Flex>
          <Flex direction={'column'} gap={'10px'}>
            <Heading
              fontSize={'xxs'}
              fontWeight={'bold'}
              lineHeight={'24px'}
              color={'secondary.10'}
            >
              Changes to the Service and/or Terms:
            </Heading>
            <Text
              fontSize={'14px'}
              fontWeight={'medium'}
              lineHeight={'22px'}
              color={'#66707A'}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              ornare quam vel facilisis feugiat amet sagittis arcu, tortor.
              Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor
              ut etiam est, amet aliquet ut vivamus. Odio vulputate est id
              tincidunt fames. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Eget ornare quam vel facilisis feugiat amet
              sagittis arcu, tortor. Sapien, consequat ultrices morbi orci
              semper sit nulla. Leo auctor ut etiam est, amet aliquet ut
              vivamus. Odio vulputate est id tincidunt fames. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Eget ornare quam vel
              facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat
              ultrices morbi orci semper sit nulla. Leo auctor ut etiam est,
              amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              ornare quam vel facilisis feugiat amet sagittis arcu, tortor.
              Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor
              ut etiam est, amet aliquet ut vivamus. Odio vulputate est id
              tincidunt fames.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Explore;
