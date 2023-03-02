'use client';

import { createSlice } from '@reduxjs/toolkit';
import Crypto from '../../utils/crypto';
import useStorage from '@/hooks/useStorage';

const { getItem, setItem, removeItem } = useStorage();

const audioPayload = getItem('audio');

let decryptData = {};

if (audioPayload) {
  decryptData = JSON?.parse(audioPayload);
  // decryptData = Crypto.decrypt(audioPayload);
}

const initialState = {
  audioToggle: false,
  player: decryptData,
  currentSong: 0,
  songslist: 'song_list',
  repeat: false,
  random: false,
  playing: false,
  audio: null,
  items: [],
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {

    currentPlayer: (state, action) => {
      const item = {
        audio: action.payload.item?.audio,
      };

      state.player = item;

      state.audioToggle = !state.audioToggle;

      removeItem('audio');

      setItem(
        'audio',
        JSON.stringify(state.player)
        // Crypto.encrypt(JSON.stringify(state.player))
      );
    },
  },
});

export const {
  currentPlayer,
} = playerSlice.actions;

export default playerSlice.reducer;