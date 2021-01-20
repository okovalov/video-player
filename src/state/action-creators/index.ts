import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action, SearchVideosErrorResetAction } from '../actions';
import youtube from '../../apis/youtube';

export const searchVideos = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_VIDEOS,
    });

    try {
      const response = await youtube.get('/search', {
        params: {
          q: term,
        },
      });

      const videos = response.data.items;

      if (!videos.length) {
        dispatch({
          type: ActionType.SEARCH_VIDEOS_ERROR,
          payload: 'No videos found',
        });

        return;
      }

      dispatch({
        type: ActionType.SEARCH_VIDEOS_SUCCESS,
        payload: videos,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_VIDEOS_ERROR,
        payload: err.message,
      });
    }
  };
};

export const resetError = (): SearchVideosErrorResetAction => ({
  type: ActionType.SEARCH_VIDEOS_ERROR_RESET,
});
