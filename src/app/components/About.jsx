'use client';

import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '../../../assets/assets.js';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const About = () => {
    return (
        <motion.div
            id="aboutme"
            className="w-full px-[12%] py-10 scroll-mt-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
        >
            <motion.h4
                variants={fadeUp}
                className="text-center mb-2 text-lg font-ovo"
            >
                Introduction
            </motion.h4>

            <motion.h2
                variants={fadeUp}
                className="text-center text-5xl font-ovo"
            >
                About me
            </motion.h2>

            <div className="flex flex-col w-full lg:flex-row items-center gap-20 my-20">
                <motion.div
                    variants={fadeUp}
                    className="w-64 sm:w-80 rounded-3xl max-w-none"
                >
                    <Image
                        alt=""
                        src={assets.profile_img}
                        className="w-full rounded-3xl"
                    />
                </motion.div>

                <div className="flex-1">
                    <motion.p
                        variants={fadeUp}
                        className="mb-10 max-w-2xl font-ovo"
                    >
                        I’m a Computer Science student at PEC Chandigarh who
                        enjoys building full-stack web applications from the
                        ground up. I focus on creating clean interfaces,
                        designing robust backend logic, and writing code that is
                        easy to maintain and scale. I actively improve my skills
                        by working on practical, hands-on projects.
                    </motion.p>

                    <motion.ul
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
                    >
                        {infoList.map(
                            ({ icon, iconDark, title, description }, index) => (
                                <motion.li
                                    key={index}
                                    variants={fadeUp}
                                    className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover-light hover:-translate-y-1 duration-500 hover-shadow-light"
                                >
                                    <Image
                                        alt={title}
                                        src={icon}
                                        className="w-7 mt-3"
                                    />
                                    <h3 className="my-4 font-semibold text-gray-700">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {description}
                                    </p>
                                </motion.li>
                            )
                        )}
                    </motion.ul>

                    <motion.h4
                        variants={fadeUp}
                        className="my-6 text-gray-700 font-ovo"
                    >
                        Tools I use
                    </motion.h4>

                    <motion.ul
                        variants={staggerContainer}
                        className="flex gap-3 sm:gap-5 items-center"
                    >
                        {toolsData.map((tool, index) => (
                            <motion.li
                                key={index}
                                variants={fadeUp}
                                whileHover={{ y: -6 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer"
                            >
                                <Image
                                    alt=""
                                    src={tool}
                                    className="w-5 sm:w-7"
                                />
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
