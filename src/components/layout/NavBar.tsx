import React from 'react';
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { Search } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const NavBar: React.FC  = () => {
    // const dispatch = useAppDispatch();
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     dispatch(userActions.logout());
    //     navigate("/sign-in");
    //   };
    return (
        <body className="flex min-h-screen w-full flex-col">
            {/* <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"> */}
            <header className="py-10">
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"'>
                    {/* <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"> */}
                    <nav className="relative z-50 flex justify-between">
                        <div className="flex items-center md:gap-x-12 ">
                            <a
                                href="/homepage"
                                className="flex items-center gap-2 text-lg font-semibold md:text-base"
                            >
                            {/* <div className="mb-6 flex justify-center"> */}
                                <div>
                                <img 
                                    src="./src/asset/image/logo1.svg" 
                                    alt="" 
                                    className="h-12" 
                                />
                                </div>
                            </a>
                            <div className='hidden md:flex md:gap-x-6"'>
                                <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="#homepages">Homepage</a>
                                <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="#studytools">
                                    {/* When not sign in the website */}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>Study Tools</DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>Profile</DropdownMenuItem>
                                            <DropdownMenuItem>Billing</DropdownMenuItem>
                                            <DropdownMenuItem>Team</DropdownMenuItem>
                                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </a>
                                <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="#quiz">
                                {/* When already signed in the website */}
                                <DropdownMenu>
                                        <DropdownMenuTrigger>My History</DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>Profile</DropdownMenuItem>
                                            <DropdownMenuItem>Billing</DropdownMenuItem>
                                            <DropdownMenuItem>Team</DropdownMenuItem>
                                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </a>
                                <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="#subjects">Subject</a>
                            </div>           
                        </div>
                        {/* <form className="ml-auto flex-1 sm:flex-initial"> */}
                        <form className="relative z-50 flex justify-between">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                />
                            </div>
                        </form>
                        <div className="flex items-center gap-x-5 md:gap-x-8">
                            <div className='hidden md:block'>
                                <a href ="/login" className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                                    Sign In
                                </a>
                            </div>
                            <a href ="/register"className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600" color="blue" >
                                <span>
                                    Get started <span className="hidden lg:inline">today</span>
                                </span>
                            </a>

                        </div>
                    </nav>
                </div>
            </header>
        </body>
    );
};

export default NavBar;