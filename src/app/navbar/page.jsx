"use client"
import {  XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {

    const [Open, setOpen] = useState(false)

    return (
        <div className=' py-4 px-2 bg-[#11235A] text-white'>
            <span className='lg:hidden' onClick={() => setOpen(!Open)}>
                {
                    Open ? <XMarkIcon className="h-6 w-6 text-blue-500 cursor-pointer" /> :
                        <Bars3Icon className="h-6 w-6 text-blue-500 cursor-pointer" />

                }
            </span>

            <ul className={` lg:flex  justify-between items-center absolute z-10  md:static ${Open? "left-6" : "-left-28 "} duration-500`}>
                <ul>
                    <li className='font-bold text-xl '><a href="#">Himaloy</a></li>
                </ul>
                <ul className='lg:flex gap-3'>
                    <li className='font-bold text-xl butons'><Link href="#home">Home</Link></li>
                    <li className='font-bold text-xl butons'><Link href="#about">About</Link></li>
                    <li className='font-bold text-xl butons'><Link href="#education">Education</Link></li>
                    <li className='font-bold text-xl butons'><Link href="#skills">Skills</Link></li>
                    <li className='font-bold text-xl butons'><Link href="#contact">Contact</Link></li>
                </ul>
            </ul>
        </div>
    );
};

export default Navbar;