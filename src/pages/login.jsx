import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <div className="ml-5 mt-5">
        <button className="text-xl font-semibold ml-5">
          <a href="/">Go Back</a>
        </button>
      </div>

      <div className="flex justify-center items-center min-h-screen sm:pt-0">
        <div className="w-2/3 p-6 m-auto bg-gray-800 rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-5">
            Log in
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="login" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-gray-600 transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {' '}
            Don't have an account?{' '}
            <a
              href="sign-up"
              className="font-medium text-purple-600 hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
