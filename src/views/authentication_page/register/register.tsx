import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const Register: React.FC = () => {
  return (
    <main className="min-h-screen flex">
      {/* Left side with the image */}
      <div className="w-1/2 relative">
        <img 
          src="../image/image 12.jpg" 
          alt="Hello O" 
          className="object-cover w-full h-full" 
        />
        <div className="absolute top-4 left-4">
          <text className="text-white text-7xl font-bold left-0">
            Learn today, build a brighter tomorrow
          </text>
        </div>
      </div>
      
      {/* Right side with the login form */}
      <div className="w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center">
          <img 
            src="../image/logo.jpg" 
            alt="" 
            className="h-12" 
          />
        </div>
          <h1 className="text-2xl font-bold mb-6 text-center">SIGN IN</h1>
          <form>
          <div className="mb-6">
              <Label className="block text-gray-700 text-sm font-bold mb-2"htmlFor="username">
                FullName
              </Label>
              <Input 
                id="fullname" 
                type="fullname" 
                className="w-full h-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-full" 
                placeholder='Full Name'
              />
            </div>
            <div className="mb-6">
              <Label className="block text-gray-700 text-sm font-bold mb-2"htmlFor="username">
                Email address
              </Label>
              <Input 
                id="email" 
                type="email" 
                className="w-full h-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-full" 
                placeholder='Email or Username'
              />
            </div>
            <div className="mb-6">
              <Label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </Label>
              <Input 
                id="password" 
                type="password" 
                className="w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline rounded-full" 
                placeholder='******************'
              />
            </div>

            <div className="items-top flex space-x-2 ">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
            <div className="items-center justify-between">
              <Button 
                // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full w-full h-full leading-tight focus:outline-none focus:shadow-outline "
                type="button"
              >
                Sign In
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
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

export default Register;