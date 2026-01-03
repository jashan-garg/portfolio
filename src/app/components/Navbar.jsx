import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '../../../assets/assets.js';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <motion.nav
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="fixed z-50 w-full px-5 lg:px-8 xl:px-[8%] pt-4 pb-3 md:pb-0 flex items-center justify-between top-0 bg-transparent "
            >
                {/* Logo */}
                <div className="rounded-full pl-7 md:pl-13 md:pr-4 py-2 bg-white/60 backdrop-blur-sm mr-2">
                    <a href="#top" className="flex items-center ml-0 md:-ml-9">
                        <Image
                            src={assets.logo}
                            alt="Logo"
                            className="w-28 cursor-pointer -ml-4 md:ml-0"
                            priority
                        />
                    </a>
                </div>

                {/* Desktop menu */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/60 backdrop-blur-sm shadow-sm mt-1 ml-19">
                    {['Home', 'About me', 'My Work', 'Contact'].map((item) => (
                        <li key={item} className="group">
                            <a
                                className="font-ovo relative px-1 text-gray-700 transition-colors duration-200 hover:text-black"
                                href={`#${item.toLowerCase().replace(' ', '')}`}
                            >
                                {item}
                                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right actions */}
                <div className="flex items-center gap-4">
                    <button>
                        <Image src={assets.moon_icon} alt="" className="w-6" />
                    </button>

                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-400 rounded-full font-ovo"
                    >
                        Contact
                        <Image src={assets.arrow_icon} alt="" className="w-3" />
                    </a>

                    <button
                        className="block md:hidden"
                        onClick={() => setMenuOpen(true)}
                    >
                        <Image src={assets.menu_black} alt="" className="w-6" />
                    </button>
                </div>
            </motion.nav>

            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 z-60 bg-black/30 transition-opacity duration-300 ${
                    menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setMenuOpen(false)}
            />

            <aside
                className={`fixed top-0 right-0 h-screen w-64 bg-rose-50 z-70 transform transition-transform duration-500 ease-in-out
                ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div
                    className="absolute right-6 top-6"
                    onClick={() => setMenuOpen(false)}
                >
                    <Image
                        src={assets.close_black}
                        alt=""
                        className="w-5 cursor-pointer"
                    />
                </div>

                <ul className="flex flex-col gap-6 py-24 px-10">
                    {['Home', 'About me', 'My Work', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                className="font-ovo text-gray-700 transition-colors duration-200 active:text-black"
                                href={`#${item.toLowerCase().replace(' ', '')}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}

export default NavBar;
