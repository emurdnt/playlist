import { State, createReducer, createSelector, on } from '@ngrx/store';
import {
  add,
  transport,
  // addToPlaylist,
  // decrementPlaylistCount,
  // incrementPlaylistCount,
  // removeFromPlaylist,
} from './playlist.actions';
import { IMusicData } from '../music-data.interface';
import { create } from 'domain';

// interface iMusicInPlaylist extends IMusicData {
//   id: number;
// }

// export interface iPlaylist {
//   count: number;
//   items: iMusicInPlaylist[];
// }

// export const initialState: iPlaylist = {
//   count: 0,
//   items: [],
// };

// export const playlistReducer = createReducer(
//   initialState,
//   on(incrementPlaylistCount, (state) => {
//     console.log('HERE IN REDUCER');
//     return {
//       ...state,
//       count: state.count + 1,
//     };
//   }),
//   on(decrementPlaylistCount, (state) => {
//     return {
//       ...state,
//       count: state.count - 1,
//     };
//   }),
//   on(addToPlaylist, (state, action) => {
//     return {
//       ...state,
//       items: [...state.items],
//     };
//   })
// );

// export const selectItems = (state: iPlaylist) => state;

// export const selectCount = createSelector(
//   selectItems,
//   (state: iPlaylist) => state.count
// );

export const initialState: { count: number; message: string } = {
  count: 0,
  message: '',
};

export const playlistReducer = createReducer(
  initialState,
  on(add, (state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(transport, (state, payload) => {
    return {
      ...state,
      message: payload.message,
    };
  })
);
