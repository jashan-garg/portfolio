'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '../../../assets/assets';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import TextType from '../../components/TextType.jsx';
import SplitText from '../../components/SplitText.jsx';
import TrueFocus from '../../components/TrueFocus.jsx';

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
                <TextType
                    text={["Hi! I'm Jashan Garg"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    texts={["Hi! I'm Jashan Garg"]}
                    deletingSpeed={50}
                    variableSpeedEnabled={false}
                    cursorBlinkDuration={0.5}
                />
            </motion.h3>

            <motion.h1
                variants={fadeUp}
                className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
            >
                <TrueFocus
                    sentence="Full-stack web developer"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#D9A6A6"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                />
            </motion.h1>

            <SplitText
                text="I’m a Computer Science student at PEC Chandigarh with a strong interest in building clean, scalable web applications. I enjoy turning ideas into real-world products using modern web technologies. Currently, I’m focused on strengthening my full-stack skills, writing maintainable code, and learning how real systems are designed and scaled."
                delay={5}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                showCallback
            />

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
                    href="/Jashan-Garg-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white/60 backdrop-blur-sm"
                >
                    my resume
                    <Image src={assets.download_icon} alt="" className="w-4" />
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default Header;
