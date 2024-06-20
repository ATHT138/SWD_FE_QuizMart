import React from 'react';
import LoginForm from '../login/LoginForm';


const LoginPage: React.FC = () => {
  return (
    <main className="flex min-h-screen">
      {/* Left side with the image */}
      <div className="relative w-1/2">
        <img
          src="../image/image 12.jpg"
          alt="Hello O"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-4 left-4">
          <text className="left-0 font-bold text-white text-7xl">
            Learn today, build a brighter tomorrow
          </text>
        </div>
      </div>

      {/* Right side with the login form */}
      <div className="items-center justify-center w-1/2 p-8">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img
              src="../image/logo.jpg"
              alt=""
              className="h-12"
            />
          </div>
          <h1 className="mb-6 text-2xl font-bold text-center">SIGN IN</h1>
            <LoginForm />
          <div className="mt-4 text-sm text-center">
            Don&apos;t have an account?{" "}
            {/* <link href="#" className="underline">
            Sign up
          </link> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;