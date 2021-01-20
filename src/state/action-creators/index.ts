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
      // const { data } = await axios.get(
      //   'https://registry.npmjs.org/-/v1/search',
      //   {
      //     params: {
      //       text: term,
      //     },
      //   },
      // );

      const response = await youtube.get('/search', {
        params: {
          q: term,
        },
      });

      // const names = data.objects.map((result: any) => {
      //   return result.package.name;
      // });
      const videos = response.data.items;

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
