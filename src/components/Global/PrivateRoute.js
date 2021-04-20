import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
  const { userInfo } = useSelector((state) => state.rootLogin);
  return userInfo && userInfo.token ? (
    <Route {...rest} />
  ) : (
    <Redirect to='/login' />
  );
};

export default PrivateRoute;
