import { ActionType } from '../action-types';
import { FetchedVideoItem } from '../types';

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: FetchedVideoItem[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export interface SearchRepositoriesErrorResetAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR_RESET;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction
  | SearchRepositoriesErrorResetAction;
