// components/Footer.jsx
'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-gray-800 bg-black/30 backdrop-blur-md">
      {/* Decorative floating elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {/* About / Logo Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Sardar Malahim</h2>
              <p className="mt-2 text-gray-400">
                Frontend Developer & Shopify Specialist
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Crafting pixel-perfect experiences with modern web technologies and e-commerce solutions.
            </p>
            <p className="text-gray-500 text-sm">
              © {currentYear} Sardar Malahim. All rights reserved.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '#services' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href="mailto:malahimweb@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  malahimweb@gmail.com
                </a>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <a href="https://wa.me/923482419504" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  +92 348 2419504
                </a>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-500">
                  Mon-Fri, 9am-5pm PST
                </span>
              </li>
            </ul>
          </div>

          {/* Social / Extra Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Connect With Me</h3>
            <div className="flex space-x-4 mb-6">
              {[
                {
                  name: 'GitHub',
                  href: 'https://github.com/sardar-malahim',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  name: 'LinkedIn',
                  href: 'https://linkedin.com/in/sardar-malahim',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.218.682-.485 0-.236-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.087.636-1.338-2.22-.252-4.555-1.112-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.097-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.543 1.377.202 2.394.1 2.647.64.7 1.028 1.592 1.028 2.683 0 3.84-2.337 4.687-4.565 4.932.359.31.678.918.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C17.14 18.163 20 14.417 20 10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  )
                },
                {
                  name: 'Twitter',
                  href: '#',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  )
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-black/30 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-indigo-600/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors group"
              aria-label="Back to top"
            >
              <span className="mr-2 group-hover:animate-bounce">Back to top</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom divider and attribution */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            Made with Next.js & Tailwind CSS
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;