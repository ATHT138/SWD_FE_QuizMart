import React from 'react';
const Footer: React.FC  = () => {
    return (
        <div className='py-12 bg-gray-50 xl:pt-24 dark:bg-gray-800'>
            <div className='w-full px-4 mx-auto max-w-8xl'>
                <div className='col-span-2'>
                <a href="https://flowbite.com/" className="flex mb-5">
                    <img src="../image/logo.jpg" className="h-8 mr-3" alt="Flowbite Logo"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;