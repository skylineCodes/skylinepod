import React from 'react';
import { Button, IconButton, Text } from '@chakra-ui/react';

export interface InputProps {
  Icon?: any;
  ArialLabel?: string;
  onClick?: any;
  size?: string;
}

const BackButton = ({ Icon, ArialLabel, onClick, size }: InputProps) => {
  return (
    <>
      <IconButton
        size={size}
        icon={Icon}
        aria-label={`${ArialLabel}`}
        isRound
        onClick={onClick}
      />
    </>
  );
};

export default BackButton;
