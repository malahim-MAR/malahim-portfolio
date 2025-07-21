// components/Experience.jsx
import React from 'react';
import { Briefcase, CalendarDays } from 'lucide-react';

const experiences = [
    {
        year: "2022 – Present",
        role: "Frontend Developer",
        company: "Freelance",
        description: "Built responsive websites with React, Tailwind, and Next.js. Delivered 15+ client projects with modern UI and optimized performance."
    },
    {
        year: "Mar 2023 – Aug 2023",
        role: "Frontend Intern",
        company: "XYZ Software House",
        description: "Worked on production-level React apps. Integrated APIs and developed clean, scalable UI components."
    },
    {
        year: "Oct 2023 – Now",
        role: "Shopify Developer",
        company: "Agency / Self-employed",
        description: "Designed and developed 10+ Shopify stores with custom Liquid themes and CRO-based layouts."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Professional Journey
                </h2>
                <p className="text-gray-400 mb-12">
                    My career timeline and major milestones
                </p>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-indigo-600/50 z-0 hidden sm:block"></div>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative flex group"
                                data-aos="fade-up"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 mt-1.5 z-10 hidden sm:block">
                                    <div className="w-4 h-4 rounded-full bg-indigo-400 border-4 border-indigo-900/50"></div>
                                </div>

                                {/* Mobile icon */}
                                <div className="sm:hidden mr-4 mt-1">
                                    <Briefcase className="w-5 h-5 text-indigo-400" />
                                </div>

                                {/* Content card */}
                                <div className="ml-2 sm:ml-8 flex-1 bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/10 
                                transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-indigo-900/20">
                                    <div className="flex flex-col sm:flex-row sm:justify-between">
                                        <div className="flex items-center">
                                            <CalendarDays className="hidden sm:block w-4 h-4 text-indigo-400 mr-2" />
                                            <span className="text-indigo-400 text-sm font-medium">{exp.year}</span>
                                        </div>
                                        <span className="text-gray-400 text-sm mt-1 sm:mt-0">{exp.company}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mt-3">{exp.role}</h3>
                                    <p className="text-gray-300 mt-2 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;