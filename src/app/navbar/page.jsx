"use client"
import {  XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Navbar = () => {

    const [Open, setOpen] = useState(false)

    return (
        <div className=' py-4 px-2 bg-[#304D30] text-white'>
            <span className='lg:hidden' onClick={() => setOpen(!Open)}>
                {
                    Open ? <XMarkIcon className="h-6 w-6 text-blue-500 cursor-pointer" /> :
                        <Bars3Icon className="h-6 w-6 text-blue-500 cursor-pointer" />

                }
            </span>

            <ul className={` lg:flex  justify-between items-center absolute z-10  md:static ${Open? "left-6" : "-left-28 duration-500"} `}>
                <ul>
                    <li className='font-bold text-xl '><a href="#">Himaloy</a></li>
                </ul>
                <ul className='lg:flex gap-3'>
                    <li className='font-bold text-xl butons'><a href="#home">Home</a></li>
                    <li className='font-bold text-xl butons'><a href="#about">About</a></li>
                    <li className='font-bold text-xl butons'><a href="#education">Education</a></li>
                    <li className='font-bold text-xl butons'><a href="#skills">Skills</a></li>
                    <li className='font-bold text-xl butons'><a href="#contact">Contact</a></li>
                </ul>
            </ul>
        </div>
    );
};

export default Navbar;