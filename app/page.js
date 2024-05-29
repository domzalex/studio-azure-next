/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useRef, useState } from 'react'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Page() {

    const [scrollPosition, setScrollPosition] = useState({ scrollTop: 0, scrollLeft: 0 })
    const scrollDemoRef = useRef(null)

    const initFormValues = { name: "", email: "", message: "" }
    const initFormState = { values: initFormValues }

    const [state, setState] = useState(initFormState)
    const [errorText, setErrorText] = useState("")
    const [loading, setLoading] = useState(false)
    const [submitText, setSubmitText] = useState("Let's chat! 🎉")
    const [messageSent, setMessageSent] = useState(false)

    const { values } = state

    const handleScroll = () => {
        if (scrollDemoRef.current) {
            const { scrollTop, scrollLeft } = scrollDemoRef.current
            setScrollPosition({ scrollTop, scrollLeft })
        }
    }

    const handleChange = ({ target }) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }))

    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        } else return (false)
    }

    const onSubmit = async () => {

        const emailValidated = validateEmail(state.values.email)

        if (!state.values.name || !state.values.email || !state.values.message) {
            setErrorText("Please fill out all fields.")
            setTimeout(() => {
                setErrorText("")
            }, 3000)
        } else {
            if (!emailValidated) {
                setErrorText("Email not valid.")
                setTimeout(() => {
                    setErrorText("")
                }, 3000)
            } else {
                setLoading(true)
                const response = await fetch('https://www.studioazure.io/api', {
                    method: 'POST',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(state)
                })
                const res = await response.json()
                if (res.success == true) {
                    setLoading(false)
                    setMessageSent(true)
                } else {
                    setLoading(false)
                    setErrorText("Error sending message.")
                }
            }
        }

    }

    return (
        <AnimatePresence>
            {scrollPosition.scrollTop > 0 ? (
                <div className='h-14 w-screen bg-white fixed top-0 left-0 transition-all duration-300 translate-y-[0px] z-10'></div>
            ) : <div className='h-14 w-screen bg-white fixed top-0 left-0 transition-all duration-300 translate-y-[-60px] z-10'></div>}
            <motion.div
                key="other"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.75 }}
            >
                <div className='relative flex flex-col w-full h-full     sm:px-3 sm:h-dvh sm:overflow-y-scroll' onScroll={handleScroll} ref={scrollDemoRef}>
                    <div id="home" className='h-screen w-full flex items-center justify-center relative sm:h-auto'>
                        <div className='w-full h-2/3 max-w-7xl flex items-center justify-evenly sm:flex-col sm:h-auto'>
                            <div className='flex flex-col gap-8 sm:h-dvh sm:justify-center sm:pt-8'>
                                <h1 className='w-full font-black xl:text-8xl text-white  xl:text-7xl lg:text-7xl  sm:text-6xl'>Where<br></br>Every Pixel<br></br>is Placed<br></br>by Hand. 👋</h1>
                                <div className="relative flex items-center gap-16">
                                    <h2 className='text-2xl font-bold text-white w-3/5'>Come and see what we can do for you. </h2>
                                    <Link className="text-white font-bold bg-black p-4 py-2 rounded-lg hover:bg-blue-500 sm:hover:bg-black" href="/about">Services </Link>
                                </div>
                            </div>
                            <div id="contact" className='w-2/5 sm:w-full sm:h-dvh sm:items-center sm:flex sm:max-w-[640px]'>
                                <div className='relative overflow-hidden w-full flex flex-col gap-5 p-5 rounded-lg bg-white transition-all duration-300     sm:w-full sm:mt-16'>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='font-bold text-xl'>Send us a message!</h1>
                                        <h2 className='font-light text-sm text-gray-400'>or email directly at <a href="mailto:contact@studioazure.io" className='font-bold underline'>contact@studioazure.io</a></h2>
                                    </div>
                                    <input type="text" name="name" placeholder="Name..." className='p-1 px-2 rounded-md border' onChange={handleChange}></input>
                                    <input type="email" name="email" placeholder="Email..." className='p-1 px-2 rounded-md border' onChange={handleChange}></input>
                                    <textarea type="text" name="message" placeholder="Message..." resize="none" className='p-1 px-2 rounded-md h-36 resize-none border' onChange={handleChange}></textarea>
                                    <div className='flex justify-between items-center sm:flex-col'>
                                        <button className='bg-blue-500 p-2 w-1/3 rounded-lg text-white font-bold hover:bg-blue-600 sm:w-1/2 sm:mx-auto sm:hover:bg-blue-500' onClick={onSubmit}>
                                            {loading == true ? (
                                                "Sending..."
                                            ) : (submitText)}
                                        </button>
                                        {errorText !== "" ? (
                                            <h2 className='text-red-500 mt-3'>{errorText}</h2>
                                        ) : null}
                                    </div>

                                    {messageSent == true ? (
                                        <motion.div
                                            className='w-full h-full bg-white absolute top-0 left-0 rounded-lg flex justify-center items-center'
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                        >
                                            <div className='flex flex-col justify-center items-center gap-8'>
                                                <h1 className='font-bold text-4xl'>Success! 🎉</h1>
                                                <h2 className='text-3xl font-light'>We'll be in touch<br></br>with you soon! 😊</h2>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        null
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
