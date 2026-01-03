'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '../../../assets/assets';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const [popup, setPopup] = useState({ show: false, message: '', type: '' });

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);

        const formData = new FormData(event.target);
        formData.append('access_key', 'f6950232-ff1e-4a42-a1a6-01e779c3624b');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                event.target.reset();
                setPopup({
                    show: true,
                    message: 'Message sent successfully',
                    type: 'success',
                });
            } else {
                setPopup({
                    show: true,
                    message:
                        data.message ||
                        'Something went wrong. Please try again.',
                    type: 'error',
                });
            }
        } catch (error) {
            setPopup({
                show: true,
                message: 'Network error. Please check your connection.',
                type: 'error',
            });
        } finally {
            setIsSending(false);
            setTimeout(() => {
                setPopup({ show: false, message: '', type: '' });
            }, 3000);
        }
    };

    return (
        <motion.div
            id="contact"
            className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-size-[90%_auto]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
        >
            <motion.h4
                variants={fadeUp}
                className="text-center mb-2 text-lg font-ovo"
            >
                Contact me
            </motion.h4>

            <motion.h2
                variants={fadeUp}
                className="text-center text-5xl font-ovo"
            >
                Get in touch
            </motion.h2>

            <motion.p
                variants={fadeUp}
                className="text-center mb-12 max-w-2xl font-ovo mx-auto mt-5"
            >
                I’d love to hear from you! If you have any questions, comments,
                or feedback, please use the form below.
            </motion.p>

            <motion.form
                variants={fadeUp}
                className="max-w-2xl mx-auto"
                onSubmit={onSubmit}
            >
                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
                        name="name"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
                        name="email"
                        required
                    />
                </div>

                <textarea
                    rows="6"
                    placeholder="Enter your message"
                    className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
                    name="message"
                    required
                ></textarea>

                <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={!isSending ? { scale: 1.04 } : {}}
                    whileTap={!isSending ? { scale: 0.96 } : {}}
                    className={`py-3 px-8 w-max flex items-center justify-center gap-2 rounded-full mx-auto transition duration-500
                        ${
                            isSending
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-black/80 text-white hover:bg-black'
                        }`}
                >
                    {isSending ? 'Sending…' : 'Submit'}
                    {!isSending && (
                        <Image
                            alt=""
                            src={assets.right_arrow_white}
                            className="w-4"
                        />
                    )}
                </motion.button>
            </motion.form>

            <motion.div variants={fadeUp} className="mt-4 text-center">
                <a
                    href="https://wa.me/916284706101?text=Hi%20Jashan,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-md hover:-translate-y-0.5 group"
                >
                    <svg
                        className="w-5 h-5 fill-current text-[#25D366] group-hover:text-white transition-colors duration-300"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span className="font-medium">Connect on WhatsApp</span>
                </a>
            </motion.div>

            {popup.show && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-lg
                        ${
                            popup.type === 'success'
                                ? 'bg-black text-white'
                                : 'bg-red-600 text-white'
                        }`}
                >
                    {popup.message}
                </motion.div>
            )}
        </motion.div>
    );
};

export default Contact;
