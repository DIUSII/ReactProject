import React from 'react';
import {Route} from 'react-router-dom';

const AuthNavigation = () => {
  return (
    <>
      <Route path={'/test'}>
        <div>Login</div>
      </Route>
    </>
  );
};

export default AuthNavigation;