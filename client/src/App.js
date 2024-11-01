import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from './Pages/Login/LoginScreen';
import RegisterScreen from './Pages/Register/RegisterScreen';
import ChatScreen from './Pages/Chat/ChatScreen';

const App = () => {

  const PrivateRoute = ({ element: Element, ...rest }) => {
    const token = localStorage.getItem('token');
    if (token) {
      return <Element {...rest} />;
    } else {
      return <Navigate to="/login" replace={true} />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/chat"
          element={<PrivateRoute element={ChatScreen} />} 
        />
        <Route
          path="/login"
          element={<LoginScreen />}
        />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
