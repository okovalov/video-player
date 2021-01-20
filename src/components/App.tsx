/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import MainPage from './MainPage';
import { store } from '../state';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
