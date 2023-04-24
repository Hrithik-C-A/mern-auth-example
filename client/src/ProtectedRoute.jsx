// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const ProtectedRoutes = ({ redirectTo, component: Component, ...rest }) => {
  const token = cookies.get('TOKEN');

  return token ? <Component {...rest} /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoutes;
