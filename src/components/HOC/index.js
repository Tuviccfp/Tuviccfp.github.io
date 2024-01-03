import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase';

const PrivateRoute = ({ element }) => {
  return auth.currentUser ? element : <Navigate to="/artigo" />;
};

export default PrivateRoute;
// Router security with user.
