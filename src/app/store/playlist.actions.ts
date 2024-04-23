import { createAction } from '@ngrx/store';

// export const incrementPlaylistCount = createAction(
//   '[Music] Increment Playlist Count'
// );
// export const decrementPlaylistCount = createAction(
//   '[Music] Decrement Playlist Count'
// );
// export const addToPlaylist = createAction('[Music] Add to Playlist');
// export const removeFromPlaylist = createAction('[Music] Remove from Playlist');

export const add = createAction('add');
export const transport = createAction(
  'transport',
  (payload: { message: string }) => payload
);
