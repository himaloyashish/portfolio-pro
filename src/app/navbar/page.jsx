import React from 'react';

const Navbar = () => {
    return (
        <div className=' py-4 px-2 bg-[#304D30] text-white'>
            <ul className=' lg:flex  justify-between items-center '>
                <ul>
                    <li><a href="#">Himaloy</a></li>
                </ul>
                <ul className='lg:flex gap-3'>
                    <li className='font-bold text-xl '><a href="#home">Home</a></li>
                    <li className='font-bold text-xl '><a href="#about">About</a></li>
                    <li className='font-bold text-xl '><a href="#education">Education</a></li>
                    <li className='font-bold text-xl '><a href="#skills">Skills</a></li>
                    <li className='font-bold text-xl '><a href="#contact">Contact</a></li>
                </ul>
            </ul>
        </div>
    );
};

export default Navbar;