import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function PrivateRoute({ path, ...props }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe(); 
  }, [auth]);

  if (isAuthenticated === null) {
    return null; 
  }
  return isAuthenticated ? <Outlet /> : <Navigate to="/JulioJimenez/login" />;
}

export default PrivateRoute;