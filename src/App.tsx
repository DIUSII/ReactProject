import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from './store/store';

import MainNavigation from 'navigation/mainNavigation';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainNavigation />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
