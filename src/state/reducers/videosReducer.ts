import { ActionType } from '../action-types';
import { Action } from '../actions';
import { FetchedVideoItem } from '../types';

interface VideosState {
  loading: boolean;
  error: string | null;
  data: FetchedVideoItem[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: VideosState = initialState,
  action: Action,
): VideosState => {
  switch (action.type) {
    case ActionType.SEARCH_VIDEOS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_VIDEOS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_VIDEOS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case ActionType.SEARCH_VIDEOS_ERROR_RESET:
      return { loading: false, error: null, data: [] };
    default:
      return state;
  }
};

export default reducer;
