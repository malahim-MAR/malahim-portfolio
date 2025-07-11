import Link from 'next/link';
import React from 'react';

const Skills = () => {
    const skillsData = [
        {
            id: 1,
            title: "Frontend Development",
            subtitle: "HTML | CSS | JS",
            description: "Building responsive and interactive user interfaces with modern web technologies. Focus on performance, accessibility, and user experience.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Accessibility"]
        },
        {
            id: 2,
            title: "React Ecosystem",
            subtitle: "React JS | Next JS",
            description: "Developing dynamic applications with React and Next.js. Leveraging component architecture, hooks, and server-side rendering.",
            technologies: ["React", "Next.js", "Redux", "Context API", "Hooks"]
        },
        {
            id: 3,
            title: "Shopify Development",
            subtitle: "Liquid | Theme Customization",
            description: "Creating custom Shopify themes and apps. Expertise in Liquid templating, theme customization, and store optimization.",
            technologies: ["Liquid", "Shopify CLI", "Theme Kit", "Storefront API", "Sections"]
        },
        {
            id: 4,
            title: "Backend Integration",
            subtitle: "PHP + Frontend",
            description: "Connecting frontend interfaces with backend systems. Building RESTful APIs and integrating with various services.",
            technologies: ["PHP", "REST APIs", "Node.js", "Express", "Authentication"]
        },
        {
            id: 5,
            title: "UI/UX Design",
            subtitle: "User-Centered Design",
            description: "Creating intuitive and engaging user experiences. Focusing on user flows, wireframing, and design systems.",
            technologies: ["Figma", "Adobe XD", "Prototyping", "User Testing", "Design Systems"]
        },
        {
            id: 6,
            title: "Performance Optimization",
            subtitle: "Speed & Efficiency",
            description: "Optimizing web applications for maximum speed and efficiency. Implementing best practices for loading performance.",
            technologies: ["Lighthouse", "Web Vitals", "Bundling", "Caching", "CDN"]
        }
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-8  ">
            <div className="max-w-8xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                        Skills & Expertise
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Mastering the tools and technologies that power modern web experiences
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill) => (
                        <div
                            key={skill.id}
                            className="skill-card relative bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 transition-all duration-500 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                            <div className="relative z-10">
                                <div className="flex items-start mb-4">
                                    <div className="text-3xl font-bold mr-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                        0{skill.id}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">{skill.title}</h2>
                                        <p className="text-sm text-purple-400 mt-1">{skill.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6">{skill.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {skill.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 text-xs rounded-full bg-gray-800/60 text-gray-300 border border-gray-700 hover:bg-purple-900/30 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 items-center border-t border-gray-700/50 pt-4">
                                    <Link
                                        href="/Projects"
                                        className="text-sm font-medium text-purple-400 hover:text-white transition-colors duration-300 relative inline-block"
                                    >
                                        View Projects
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                    <Link
                                        href="/Contact"
                                        className="text-sm font-medium text-purple-400 hover:text-white transition-colors duration-300 relative inline-block"
                                    >
                                        Contact Me
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;