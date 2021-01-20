import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action, SearchRepositoriesErrorResetAction } from '../actions';
import youtube from '../../apis/youtube';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
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
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: 'No videos found',
        });

        return;
      }

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: videos,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};

export const resetError = (): SearchRepositoriesErrorResetAction => ({
  type: ActionType.SEARCH_REPOSITORIES_ERROR_RESET,
});
