import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideos, resetError } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ searchVideos, resetError }, dispatch);
};
