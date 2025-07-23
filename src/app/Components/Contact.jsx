// Contact.jsx
'use client';
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission to Formspree
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="relative py-20 px-4 overflow-hidden">
            {/* Floating shapes */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow animation-delay-2000"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Whether it's a project, question, or just to say hi — feel free to drop a message.
                    </p>
                </div>

                {/* Content Container */}
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Column - Form */}
                    <div className="flex-1">
                        <div className="glass-container p-8 rounded-xl border border-gray-800">
                            {submitSuccess ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400">
                                        Thanks for reaching out. I'll get back to you soon.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/30 border border-gray-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/30 border border-gray-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div className="mb-8">
                                        <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full bg-black/30 border border-gray-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                                            placeholder="Your message here..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="flex-1">
                        <div className="glass-container h-full p-8 rounded-xl border border-gray-800 flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-8">Direct Contact</h3>

                            <div className="space-y-8 mb-auto">
                                <ContactLink
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    }
                                    title="Email"
                                    text="sardarmalahim@gmail.com"
                                    href="mailto:sardarmalahim@gmail.com"
                                />

                                <ContactLink
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    }
                                    title="LinkedIn"
                                    text="linkedin.com/in/sardar-malahim"
                                    href="https://linkedin.com/in/sardar-malahim"
                                />

                                <ContactLink
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    }
                                    title="GitHub"
                                    text="github.com/sardar-malahim"
                                    href="https://github.com/sardar-malahim"
                                />

                                <ContactLink
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                    }
                                    title="WhatsApp"
                                    text="+92 348 2419504"
                                    href="https://wa.me/923482419504"
                                />
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-800">
                                <h4 className="text-lg font-semibold text-white mb-4">Prefer direct contact?</h4>
                                <p className="text-gray-400">
                                    Feel free to reach out through any of the channels above. I typically respond within 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Contact link component
const ContactLink = ({ icon, title, text, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start group transition"
        >
            <div className="text-indigo-400 group-hover:text-white p-3 bg-black/30 rounded-lg mr-4 transition">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-medium text-white group-hover:text-indigo-400 transition">{title}</h4>
                <p className="text-gray-400 group-hover:text-white transition">{text}</p>
            </div>
        </a>
    );
};

export default Contact;