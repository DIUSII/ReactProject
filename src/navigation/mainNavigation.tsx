import React from 'react';
import {Route, Switch} from 'react-router-dom';

import MainPage from 'pages/mainPage/MainPage';

import AuthNavigation from './components/authNavigation';

const MainNavigation = () => {
  return (
    <Switch>
      <Route exact path={'/'}>
        <MainPage />
      </Route>
      <AuthNavigation />
    </Switch>
  );
};

export default MainNavigation;