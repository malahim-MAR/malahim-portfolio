import Link from 'next/link';
import React from 'react';

const ProjectsSection = () => {
    const projects = [
        {
            id: '01',
            title: 'Al-Jayyid Galleria',
            description: 'A premium e-commerce platform for Middle Eastern art collectors with AI-powered recommendations.',
            image: 'https://aaadigitalmedia.co/wp-content/uploads/2025/07/Al-jayyid.png',
            features: [
                'Real-time auction system with WebSocket integration',
                'Blockchain-based artwork provenance tracking',
                'AR-powered virtual gallery experience',
            ],
            tags: ['Shopify', 'Expense Theme', 'App Integrations', 'Custom Liquid Sections'],
            viewLink: '/projects/al-jayyid-galleria',
        },
        {
            id: '02',
            title: 'Next.js Blogging Platform',
            description: 'A modern and dynamic blog platform with markdown support and CMS integration.',
            image: 'https://dummyimage.com/600x400/1a1a1a/ffffff&text=Next.js+Blog+App',
            features: [
                'MDX-based content rendering',
                'Admin CMS with live preview',
                'SEO optimized with custom metadata control',
            ],
            tags: ['Next.js', 'TailwindCSS', 'Contentlayer', 'Vercel'],
            viewLink: '/projects/nextjs-blogging-app',
        },
        {
            id: '03',
            title: 'Personal Diary App',
            description: 'A secure React-based personal diary app with Firestore storage and minimalist UI.',
            image: 'https://dummyimage.com/600x400/0d0d0d/ffffff&text=Diary+App',
            features: [
                'Realtime Firestore DB integration',
                'Password-protected personal entries',
                'Dark mode interface for easy reading',
            ],
            tags: ['React', 'Firebase', 'TailwindCSS', 'Framer Motion'],
            viewLink: '/projects/personal-diary-app',
        }
    ];

    return (
        <section className="py-20 px-4 md:px-8 bg-gradient-to-bl from-gray-00 via-black to-gray-900">
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

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-20">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-900/30 order-2 lg:order-1">
                                <img
                                    src={project.image}
                                    alt={`${project.title} Screenshot`}
                                    className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div
                                className="order-1 lg:order-2 p-8 rounded-2xl"
                                style={{
                                    background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(10, 10, 10, 0.8))',
                                    backdropFilter: 'blur(12px)',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                <div className="flex items-center mb-4">
                                    <span className="text-indigo-400 font-bold text-xl mr-2">{project.id}.</span>
                                    <div className="w-8 h-px bg-gradient-to-r from-yellow-500/70 to-transparent"></div>
                                </div>

                                <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>

                                <p className="text-gray-300 mb-6">{project.description}</p>

                                <ul className="space-y-2 mb-8">
                                    {project.features.map((feature, i) => (
                                        <li className="flex items-start" key={i}>
                                            <div className="mt-1 w-2 h-2 rounded-full bg-indigo-400 mr-3"></div>
                                            <p className="text-gray-400">{feature}</p>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-xs rounded-full bg-gray-800/60 text-gray-300 border border-gray-700 hover:bg-cyan-900/30 hover:border-cyan-500/50 hover:text-white transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-6">
                                    <Link href={project.viewLink} className="relative inline-block group">
                                        <span className="text-indigo-400 font-medium">View Project</span>
                                        <div className="h-px w-full bg-gradient-to-r from-indigo-400/70 to-transparent absolute bottom-0 group-hover:from-indigo-400 group-hover:to-indigo-400 transition-all duration-300"></div>
                                    </Link>
                                    <Link href="/contact" className="relative inline-block group">
                                        <span className="text-gray-300 font-medium hover:text-white transition-colors">Hire Me</span>
                                        <div className="h-px w-full bg-gradient-to-r from-gray-400/30 to-transparent absolute bottom-0 group-hover:from-gray-300 group-hover:to-gray-300 transition-all duration-300"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-20">
                    <Link href="/projects">
                        <button className="px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-all duration-300 shadow-lg">
                            View All Projects
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
