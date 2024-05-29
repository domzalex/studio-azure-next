/* eslint-disable react/no-unescaped-entities */
'use client'
import React, {useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Page() {

    const [service, setService] = useState('design')

    return (
        <div className='relative flex justify-center w-full h-screen sm:flex-col sm:dvh'>
            <AnimatePresence>
                <motion.div
                key="topNav"
                    className='w-3/5 flex items-center justify-center sm:w-full sm:hidden'
                    initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.75 }}
                >
                    <div className='w-3/4 flex flex-col gap-6 sm:w-full sm:mt-32 sm:gap-16 sm:hidden'>
                        <h1 className='text-white font-black xl:text-7xl lg:text-6xl'>What We're<br></br>About</h1>
                        <h3 className='text-black font-light xl:text-xl p-12 px-16 xl:leading-9 bg-white rounded-md z-10 sm:p-8 sm:py-4 lg:text-lg lg:leading-8'><span className='font-bold'>Studio Azure</span> was founded on the principles of professional, honest craftsmanship. We are dedicated to creating everything by hand, avoiding any tools that complicate or taint the process. Instead, we ensure that every pixel is placed with intent and purpose.</h3>
                        <div className='flex sm:hidden'>
                            {service == 'design' ? (
                                <button className='font-bold xl:text-lg rounded-b-md text-center bg-[rgba(255,255,255,1)] p-5 py-3 pt-16 translate-y-[-45px] duration-300 transition-all w-1/3 lg:p-4 lg:py-3 lg:pt-16 lg:text-sm' onClick={() => setService('design')}>Graphic Design</button>
                            ) : <button className='font-bold xl:text-lg rounded-bl-md text-center text-gray-600 bg-[rgba(255,255,255,0.55)] p-5 py-3 pt-16 translate-y-[-75px] w-1/3 backdrop-blur-sm transition-all hover:bg-[rgba(255,255,255,0.65)] lg:p-4 lg:py-3 lg:pt-16 lg:text-sm' onClick={() => setService('design')}>Graphic Design</button>}
                            {service == 'website' ? (
                                <button className='font-bold xl:text-lg rounded-b-md text-center bg-[rgba(255,255,255,1)] p-5 py-3 pt-16 translate-y-[-45px] duration-300 transition-all w-1/3 lg:p-4 lg:py-3 lg:pt-16 lg:text-sm' onClick={() => setService('website')}>Web Development</button>
                            ) : <button className='font-bold xl:text-lg text-center text-gray-600 bg-[rgba(255,255,255,0.55)] p-5 py-3 pt-16 translate-y-[-75px] w-1/3 backdrop-blur-sm transition-all hover:bg-[rgba(255,255,255,0.65)] lg:p-4 lg:py-3 lg:pt-16 lg:text-sm' onClick={() => setService('website')}>Web Development</button>}
                            {service == 'app' ? (
                                <button className='font-bold xl:text-lg rounded-b-md text-center bg-[rgba(255,255,255,1)] p-5 py-3 pt-16 translate-y-[-45px] duration-300 transition-all w-1/3 lg:p-4 lg:py-3 lg:pt-16 lg:text-sm' onClick={() => setService('app')}>App Development</button>
                            ) : <button className='font-bold xl:text-lg rounded-br-md text-center text-gray-600 bg-[rgba(255,255,255,0.55)] p-5 py-3 pt-16 translate-y-[-75px] w-1/3 backdrop-blur-sm transition-all hover:bg-[rgba(255,255,255,0.65)] lg:p-4 lg:py-3 lg:pt-16 lg:text-sm' onClick={() => setService('app')}>App Development</button>}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            
            <motion.div
            key="other"
                className="bg-white w-2/5 h-full flex items-center justify-center relative serviceBg sm:w-full"
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.75 }}
            >
                <AnimatePresence>
                    {service == 'design' && (
                        <motion.div
                            key={'design'}
                            initial={{ x: 500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 500, opacity: 0 }}
                            transition={{ ease: 'easeInOut', duration: 0.30 }}
                            className="absolute flex flex-col justify-center items-center w-full h-full sm:justify-start sm:pt-36 sm:px-3"
                        >
                            <div className='w-4/5 flex flex-col gap-8 sm:w-full'>
                                <h1 className='text-blue-500 font-bold 2xl:text-6xl sm:text-4xl xl:text-5xl lg:text-5xl'>Graphic<br></br>Design 🎨</h1>
                                <h2 className='text-blue-500 text-xl font-light px-3 border-l border-blue-500 ml-1 leading-9 sm:text-lg'>Our graphic designer is dedicated to creating assets and marketing materials of all kinds such as: 2D graphics, logos, and 3D models, all designed to help you and/or your business.</h2>
                            </div>
                        </motion.div>
                    )}
                    {service == 'website' && (
                        <motion.div
                            key={'website'}
                            initial={{ x: 500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 500, opacity: 0 }}
                            transition={{ ease: 'easeInOut', duration: 0.30 }}
                            className="absolute flex flex-col justify-center items-center w-full h-full sm:justify-start sm:pt-36 sm:px-3"
                        >
                            <div className='w-4/5 flex flex-col gap-8 sm:w-full'>
                                <h1 className='text-blue-500 font-bold 2xl:text-6xl sm:text-4xl xl:text-5xl lg:text-5xl'>Website<br></br>Development 🖥️</h1>
                                <h2 className='text-blue-500 text-xl font-light px-3 border-l border-blue-500 ml-1 leading-9 sm:text-lg'>Our software developer is passionate about building websites. Simple as. Whether it's optimizing an already existing website or building something unique from the ground up, <span className='font-bold'>Studio Azure</span> has you covered.</h2>
                            </div>
                        </motion.div>
                    )}
                    {service == 'app' && (
                        <motion.div
                            key={'app'}
                            initial={{ x: 500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 500, opacity: 0 }}
                            transition={{ ease: 'easeInOut', duration: 0.30 }}
                            className="absolute flex flex-col justify-center items-center w-full h-full sm:justify-start sm:pt-36 sm:px-3"
                        >
                            <div className='w-4/5 flex flex-col gap-8 sm:w-full'>
                                <h1 className='text-blue-500 font-bold 2xl:text-6xl sm:text-4xl xl:text-5xl lg:text-5xl'>Mobile App<br></br>Development 📱</h1>
                                <h2 className='text-blue-500 text-xl font-light px-3 border-l border-blue-500 ml-1 leading-9 sm:text-lg'>Akin to our website development services, we also offer opportunities to have highly-performant and accessible mobile applications built that work cross-platform with both iOS and Android.</h2>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            <motion.div
            key="bottomNav"
                className='hidden sm:flex fixed bottom-0 left-0 w-full h-20'
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.75 }}
            >
                {service == 'design' ? (
                    <button className='w-1/3 font-bold border-t border-r h-20 bg-white transition-all duration-300' onClick={() => setService('design')}>Graphic<br></br>Design</button>
                ) : <button className='w-1/3 font-bold bg-gray-100 border-t h-20 pb-4 translate-y-[15px] transition-all duration-300' onClick={() => setService('design')}>Graphic<br></br>Design</button>}
                {service == 'website' ? (
                    <button className='w-1/3 font-bold border-t border-x h-20 bg-white transition-all duration-300' onClick={() => setService('website')}>Website<br></br>Development</button>
                ) : <button className='w-1/3 font-bold bg-gray-100 border-t h-20 pb-4 translate-y-[15px] transition-all duration-300' onClick={() => setService('website')}>Website<br></br>Development</button>}
                {service == 'app' ? (
                    <button className='w-1/3 font-bold border-t border-l h-20 bg-white transition-all duration-300' onClick={() => setService('app')}>Mobile App<br></br>Development</button>
                ) : <button className='w-1/3 font-bold bg-gray-100 border-t h-20 pb-4 translate-y-[15px] transition-all duration-300' onClick={() => setService('app')}>Mobile App<br></br>Development</button>}
            </motion.div>
        </div>
    )
}