import { ActionType } from '../action-types';
import { FetchedVideoItem } from '../types';

interface SearchVideosAction {
  type: ActionType.SEARCH_VIDEOS;
}

interface SearchVideosSuccessAction {
  type: ActionType.SEARCH_VIDEOS_SUCCESS;
  payload: FetchedVideoItem[];
}

interface SearchVideosErrorAction {
  type: ActionType.SEARCH_VIDEOS_ERROR;
  payload: string;
}

export interface SearchVideosErrorResetAction {
  type: ActionType.SEARCH_VIDEOS_ERROR_RESET;
}

export type Action =
  | SearchVideosAction
  | SearchVideosSuccessAction
  | SearchVideosErrorAction
  | SearchVideosErrorResetAction;
