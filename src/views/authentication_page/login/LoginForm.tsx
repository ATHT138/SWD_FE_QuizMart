import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const LoginForm:React.FC = props => {
    const navigate = useNavigate();

    // const onSubmit = () => {
    //     console.log("submit");
    //     dispatch(
    //       userActions.login({ email: values.email, password: values.password })
    //     );
    //   };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/dashboard')
    }
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-6">
              <Label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                className="w-full h-full px-4 py-2 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
                placeholder='Email or Username'
              />
            </div>
            <div className="mb-6">
              <Label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                className="w-full px-4 py-2 mb-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
                placeholder='******************'
              />
            </div>

            <div className="flex space-x-2 items-top ">
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
                // className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" 
                className="w-full h-full px-4 py-2 font-bold leading-tight text-white rounded-full bg-lime-600 hover:bg-lime-700 focus:outline-none focus:shadow-outline "
                type="button"
              >
                Sign In
              </Button>
            </div>
          </form>
  )
}

export default LoginForm;

