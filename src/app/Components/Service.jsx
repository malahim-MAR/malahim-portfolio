// components/Service.jsx
'use client';
import React, { useEffect, useRef } from 'react';
import { FaCode, FaShoppingCart, FaWordpress, FaRocket } from 'react-icons/fa';

const Service = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardsRef.current.forEach(card => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            cardsRef.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    const services = [
        {
            icon: <FaCode className="text-indigo-400 text-2xl" />,
            title: "Web Development",
            description: "React, Next.js, Tailwind-based custom UIs. Building modern, responsive web applications with the latest technologies.",
            tags: ["React", "Next.js"]
        },
        {
            icon: <FaShoppingCart className="text-indigo-400 text-2xl" />,
            title: "Shopify Store Setup",
            description: "Product page design, custom theme edits, performance optimization. Creating e-commerce solutions that convert.",
            tags: ["Liquid", "Storefront"]
        },
        {
            icon: <FaWordpress className="text-indigo-400 text-2xl" />,
            title: "WordPress Customization",
            description: "Elementor design, theme tweaks, plugin integration. Tailoring WordPress to your specific business needs.",
            tags: ["Elementor", "PHP"]
        },
        {
            icon: <FaRocket className="text-indigo-400 text-2xl" />,
            title: "Frontend Optimization",
            description: "Speed, responsiveness, animation, SEO-ready markup. Enhancing user experience through performance optimization.",
            tags: ["Lighthouse", "SEO"]
        }
    ];

    return (
        <section className="relative w-full py-20 overflow-hidden bg-[#0b0b0b]">
            {/* Background elements */}
            <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-indigo-900/20 blur-[80px] animate-blob" />
            <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] rounded-full bg-purple-900/20 blur-[80px] animate-blob animation-delay-2000" />
            <div className="absolute bottom-[10%] left-[40%] w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-[80px] animate-blob animation-delay-4000" />

            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-indigo-600/10 blur-[100px] animate-float" />
            <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-purple-600/10 blur-[80px] animate-float animation-delay-3000" />

            {/* Content container without max-width */}
            <div className="w-full px-6 sm:px-10 lg:px-20">
                {/* Heading Area */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-indigo-400 after:rounded-full">
                        What Service I Do For Clients
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        I create elegant, performant digital experiences with cutting-edge technologies. Each project is crafted with attention to detail and optimized for success.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="bg-black/30 backdrop-blur-md border border-gray-800 rounded-2xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.3)] hover:border-indigo-400/30 opacity-0 translate-y-8"
                        >
                            <div className="w-[70px] h-[70px] flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600/15 to-indigo-800/10 border border-indigo-500/10 mb-6 transition-all duration-300 group-hover:scale-105">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-400 mb-3">{service.title}</h3>
                            <p className="text-gray-300 text-sm flex-grow">{service.description}</p>
                            <div className="mt-6 pt-4 border-t border-gray-800">
                                {service.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="inline-block mr-2 mb-2 text-xs font-medium text-indigo-300 bg-indigo-900/20 py-1 px-3 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <button className="bg-black/30 backdrop-blur-md border border-gray-800 rounded-xl text-white font-medium px-8 py-3 relative overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.3)] group">
                        <span className="relative z-10">View All Services</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <p className="text-gray-400 text-sm mt-6">
                        Have a custom project in mind? <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">Let's discuss</a>
                    </p>
                </div>
            </div>
        </section>

    );
};

export default Service;