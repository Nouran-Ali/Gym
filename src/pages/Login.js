import React from 'react';
import '../styles/Login.css';
import LoginForm from '../Components/login/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log("🚀 ~ Login ~ isAuthenticated:", isAuthenticated)

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3">
        <div dir="rtl" className="flex justify-center mt-44 relative">
          <LoginForm />
        </div>
        <div className="p-5 pr-0 relative">
          <img
            src="login/left_section2.png"
            className="login_image rounded-3xl"
            alt="login"
          />
          <img
            src="login/White Logo.png"
            width={400}
            height={320}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="login"
          />
          <img
            src="login/dots.png"
            width={120}
            height={100}
            className="absolute bottom-14 -right-16"
            alt="dots"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
