import React, { useState } from 'react';
import './App.css'; 
import logo from './logo.png'; 

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset email error message
    setEmailError('');

    if (!validateEmail(email)) {
      setEmailError('Invalid email!');
      return;
    }

    // Log form submission details (not shown to users)
    console.log('Form submitted:', { email, password });
  };

  return (
    <div className="flex h-screen relative">
      {/* Left Side: Color Block */}
      <div className="w-[600px] h-full bg-[#EDF8ED]"></div> {/* Fixed width of 600px for the left side */}

      {/* Logo Positioned at specific coordinates */}
      <img
        src={logo}
        alt="Logo"
        style={{
          position: 'absolute',
          left: '67px',
          top: '73.18px',
          width: '74.89px',
          height: '49.58px'
        }}
      />

      {/* Right Side: Login Form */}
      <div className="w-[calc(100%-600px)] flex justify-center items-center bg-white"> {/* Right side takes the remaining space */}
        <div className="max-w-md w-full flex flex-col justify-center items-center"> {/* Center the content in the white box */}
          <h2 className="text-2xl font-semibold text-center mb-6">Welcome back!</h2>
          <p className="text-center text-gray-600 mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>

          <form className="space-y-4 flex flex-col items-center" onSubmit={handleSubmit}> {/* Centering form items */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700"
                style={{ textAlign: 'left' }} // Align label to the start (left)
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[520px] h-[42px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
                placeholder="address@example.com.au"
              />
              {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>} {/* Error message */}
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700"
                style={{ textAlign: 'left' }} // Align label to the start (left)
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[520px] h-[42px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-[94px] h-[42px] bg-green-600 text-white rounded-md hover:bg-green-700 focus:ring focus:ring-green-300"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-green-600 hover:underline">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


