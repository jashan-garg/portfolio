'use client';

import React from 'react';
import Image from 'next/image';
import { assets, projectList } from '../../../assets/assets.js';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const Projects = () => {
    return (
        <motion.div
            id="mywork"
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
                My Work
            </motion.h4>

            <motion.h2
                variants={fadeUp}
                className="text-center text-5xl font-ovo"
            >
                Projects & Applied Practice
            </motion.h2>

            <motion.div
                variants={staggerContainer}
                className="flex flex-col w-full items-center gap-20 my-20"
            >
                <motion.p
                    variants={fadeUp}
                    className="max-w-2xl text-center font-ovo text-gray-600"
                >
                    This section showcases projects and hands-on practice that
                    demonstrate my understanding of full-stack development
                    concepts and real-world application design.
                </motion.p>

                <motion.ul
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
                >
                    {projectList.map(
                        (
                            {
                                icon,
                                title,
                                description,
                                github,
                                demo,
                                leetcode,
                                platformIcon,
                            },
                            index
                        ) => (
                            <motion.li
                                key={index}
                                variants={fadeUp}
                                whileHover={{ y: -6 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer transition duration-500 hover-shadow-light hover-light"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between">
                                    <Image
                                        src={icon}
                                        alt={title}
                                        className="w-8"
                                    />
                                </div>

                                <h3 className="my-4 font-semibold text-gray-700">
                                    {title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4">
                                    {description}
                                </p>

                                {/* Links */}
                                <div className="flex flex-wrap items-center gap-3 mt-4">
                                    {github && (
                                        <a
                                            href={github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-1.5 text-sm leading-none rounded-full border border-gray-300 text-gray-700 bg-white transition duration-500 hover:bg-black hover:text-white hover-shadow-light"
                                        >
                                            GitHub
                                        </a>
                                    )}

                                    {demo && (
                                        <a
                                            href={demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-1.5 text-sm leading-none rounded-full border border-gray-300 text-gray-700 bg-white transition duration-500 hover:bg-black hover:text-white hover-shadow-light"
                                        >
                                            Live Demo
                                        </a>
                                    )}

                                    {leetcode && (
                                        <a
                                            href={leetcode}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-1.5 text-sm leading-none rounded-full border border-gray-300 text-gray-700 bg-white transition duration-500 hover:bg-black hover:text-white hover-shadow-light"
                                        >
                                            LeetCode
                                        </a>
                                    )}
                                </div>
                            </motion.li>
                        )
                    )}
                </motion.ul>
            </motion.div>
        </motion.div>
    );
};

export default Projects;
