'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '../../../assets/assets';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

const Footer = () => {
    return (
        <motion.footer
            className="w-full px-[12%] py-6 border-t border-gray-200"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
                {/* Left */}
                <p className="text-center md:text-left">
                    © {new Date().getFullYear()} Jashan Garg. All rights
                    reserved.
                </p>

                {/* Right */}
                <div className="flex flex-wrap items-center justify-center gap-5">
                    <a
                        href="https://www.linkedin.com/in/jashan-garg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-black transition"
                    >
                        <Image
                            src={assets.linkedin}
                            alt="LinkedIn"
                            className="w-4.5 h-4.5"
                        />
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/jashan-garg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-black transition"
                    >
                        <Image
                            src={assets.git}
                            alt="GitHub"
                            className="w-4 h-4"
                        />
                        GitHub
                    </a>

                    <a
                        href="mailto:jashangarg961@example.com"
                        className="flex items-center gap-1 hover:text-black transition"
                    >
                        <Image
                            src={assets.mail_icon}
                            alt="Email"
                            className="w-3 h-3"
                        />
                        jashangarg961@gmail.com
                    </a>

                    <a
                        href="tel:+916284706101"
                        className="hover:text-black transition"
                    >
                        +91&nbsp;62874&nbsp;06101
                    </a>

                    <span className="hidden md:inline text-gray-300">|</span>

                    <a href="#top" className="hover:text-black transition">
                        Back to top
                    </a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
