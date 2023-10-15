import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

function PrivateRoute({ path, ...props }) {
  const auth = getAuth();
  const isAuthenticated = auth.currentUser !== null; // Check if the user is authenticated

  return isAuthenticated ? 
    <Outlet /> : <Navigate to="/JulioJimenez/login" />;
}



/*
const PrivateRoute = () => {
    const auth = null; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/JulioJimenez/login" />;
}

*/

export default PrivateRoute;
