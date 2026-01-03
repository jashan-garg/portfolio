'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '../../../assets/assets';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const Header = () => {
    return (
        <motion.div
            id="home"
            className="w-11/12 max-w-3xl text-center mx-auto min-h-screen pt-28 flex flex-col items-center justify-center gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={fadeUp}>
                <Image
                    src={assets.profile_img}
                    alt=""
                    className="rounded-full w-48"
                />
            </motion.div>

            <motion.h3
                variants={fadeUp}
                className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
            >
                Hi! I&apos;m Jashan Garg
                <Image alt="" src={assets.hand_icon} className="w-6" />
            </motion.h3>

            <motion.h1
                variants={fadeUp}
                className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
            >
                Full-stack web developer
            </motion.h1>

            <motion.p variants={fadeUp}>
                I’m a Computer Science student at PEC Chandigarh with a strong
                interest in building clean, scalable web applications. I enjoy
                turning ideas into real-world products using modern web
                technologies. Currently, I’m focused on strengthening my
                full-stack skills, writing maintainable code, and learning how
                real systems are designed and scaled.
            </motion.p>

            <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center gap-4 mt-4"
            >
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
                >
                    contact me
                    <Image
                        src={assets.right_arrow_white}
                        alt=""
                        className="w-4"
                    />
                </motion.a>

                <motion.a
                    href="/Jashan_Garg_Resume(1).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
                >
                    my resume
                    <Image src={assets.download_icon} alt="" className="w-4" />
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default Header;
