import React, { useEffect, useRef } from 'react'
import InnerPage from './InnerPage';
import Homescreen from '../home/home.screen';
import Modal from 'ui-component/Modal/Modal';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';


function InnerPageAuthentication() {
  //const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = (JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [location]);

  return (
    <>
      {isAuthenticated ? (
        <InnerPage />
      ) :
        (
          <Homescreen />
        )}
    </>

  )


}
export default InnerPageAuthentication