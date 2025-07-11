// Hero.jsx
import React from 'react';

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 md:p-8 ">
            <div className="w-full max-w-8xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Left side - Content with glassmorphism effect */}
                    <div
                        className="flex-1 p-8 md:p-12 rounded-2xl"
                        style={{
                            background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(10, 10, 10, 0.8))',
                            backdropFilter: 'blur(16px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '12px',
                            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)'
                        }}
                    >
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-white">
                                Hi, I'm <span className="text-indigo-400">Malahim</span>
                            </h1>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                Passionate frontend developer creating beautiful, responsive interfaces.
                                I specialize in React, Next.js, and modern CSS to build engaging user experiences.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-indigo-900/30">
                                    About Me
                                </button>

                                <button className="px-6 py-3 bg-transparent border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-600/20 rounded-lg font-medium transition-all duration-300">
                                    Contact Us
                                </button>
                            </div>

                            <div className="pt-8">
                                <div className="flex items-center space-x-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map((item) => (
                                            <div key={item} className="w-10 h-10 rounded-full bg-indigo-500 border-2 border-gray-900"></div>
                                        ))}
                                    </div>
                                    <p className="text-gray-400 text-sm">
                                        <span className="text-white font-medium">15+</span> satisfied clients
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex-1 flex items-center justify-center relative">
                        <div className="relative w-full max-w-md">

                            <div className="relative z-10">
                                <img src="https://avatars.githubusercontent.com/u/127007350?v=4" className="bg-gray-200  rounded-xl w-full " alt="" />
                                {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 md:h-[500px]" /> */}
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-indigo-600/20 blur-xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-indigo-600/20 blur-xl"></div>

                            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-indigo-600 rotate-12 opacity-70"></div>
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-lg bg-indigo-600 rotate-12 opacity-70"></div>
                        </div>
                    </div>
                </div>

                {/* Stats section at bottom */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { value: '5+', label: 'Years Experience' },
                        { value: '40+', label: 'Projects Completed' },
                        { value: '100%', label: 'Client Satisfaction' },
                        { value: 'React', label: 'Specialized In' }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl backdrop-blur-md bg-black/30 border border-gray-800 text-center"
                        >
                            <p className="text-3xl font-bold text-indigo-400">{stat.value}</p>
                            <p className="text-gray-400 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;