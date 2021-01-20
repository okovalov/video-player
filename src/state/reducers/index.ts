import { combineReducers } from 'redux';
import videosReducer from './videosReducer';

const reducers = combineReducers({
  videos: videosReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
