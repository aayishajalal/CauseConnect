// http://localhost:5000/api/users/login
// route for login

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/Button'; 

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-blue-900 mb-6">Login to Your Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
          <Button text="Log In" type="submit" />
            
            <Link to="/signup" className="inline-block align-baseline font-bold text-sm text-blue-900 hover:text-blue-800">
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
