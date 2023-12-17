import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElementLogin = ({ element: Component, ...props  }) => {

  return (
    props.isLoggedIn ? <Navigate to="/" replace/> : <Component {...props} />
)}

export default ProtectedRouteElementLogin; 