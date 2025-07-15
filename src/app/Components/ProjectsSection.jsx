import Link from 'next/link';
import React from 'react';

const ProjectsSection = () => {
    const data = [
        [
            BrandName = 'Al-Jayyid Galleria',
            description = 'A premium e-commerce platform for Middle Eastern art collectors with AI-powered recommendations.',
            image = 'https://aaadigitalmedia.co/wp-content/uploads/2025/07/Al-jayyid.png',
            features = [
                'Real-time auction system with WebSocket integration',
                'Blockchain-based artwork provenance tracking',
                'AR-powered virtual gallery experience',
            ],
            viewProjectLink = '/projects/al-jayyid-galleria',
            hireMeLink = '/contact',
        ]
    ]
    return (
        <section className="py-20 px-4 md:px-8 bg-gradient-to-bl  from-gray-00 via-black to-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                        Top Projects & Contributions
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Showcasing my journey through code and collaboration
                    </p>
                </div>

                {/* Project Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Project Image */}
                    <div className="order-2 lg:order-1 overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-900/30">
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src="https://aaadigitalmedia.co/wp-content/uploads/2025/07/Al-jayyid.png"
                                alt="Project Screenshot"
                                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Project Content - Glassmorphic Card */}
                    <div
                        className="order-1 lg:order-2 p-8 rounded-2xl"
                        style={{
                            background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(10, 10, 10, 0.8))',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        <div className="flex items-center mb-4">
                            <span className="text-indigo-400 font-bold text-xl mr-2">01.</span>
                            <div className="w-8 h-px bg-gradient-to-r from-yellow-500/70 to-transparent"></div>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-4">Al-Jayyid Galleria</h2>

                        <p className="text-gray-300 mb-6">
                            A premium e-commerce platform for Middle Eastern art collectors with AI-powered recommendations.
                        </p>

                        <ul className="space-y-2 mb-8">
                            <li className="flex items-start">
                                <div className="mt-1 w-2 h-2 rounded-full bg-indigo-400 mr-3"></div>
                                <p className="text-gray-400">Real-time auction system with WebSocket integration</p>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 w-2 h-2 rounded-full bg-indigo-400 mr-3"></div>
                                <p className="text-gray-400">Blockchain-based artwork provenance tracking</p>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 w-2 h-2 rounded-full bg-indigo-400 mr-3"></div>
                                <p className="text-gray-400">AR-powered virtual gallery experience</p>
                            </li>
                        </ul>

                        <div className="flex flex-wrap gap-6">
                            <Link
                                href="/projects/al-jayyid-galleria"
                                className="relative inline-block group"
                            >
                                <span className="text-indigo-400 font-medium">View Project</span>
                                <div className="h-px w-full bg-gradient-to-r from-indigo-400/70 to-transparent absolute bottom-0 group-hover:from-indigo-400 group-hover:to-indigo-400 transition-all duration-300"></div>
                            </Link>

                            <Link
                                href="/contact"
                                className="relative inline-block group"
                            >
                                <span className="text-gray-300 font-medium hover:text-white transition-colors">Hire Me</span>
                                <div className="h-px w-full bg-gradient-to-r from-gray-400/30 to-transparent absolute bottom-0 group-hover:from-gray-300 group-hover:to-gray-300 transition-all duration-300"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;