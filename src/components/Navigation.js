import React, { useState } from 'react';



function Navigation({ activeSection, scrollToSection }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleItemClick = (section) => {
        scrollToSection(section);
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="font-inter font-bold text-xl">AO</span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {["About", "Experience", "Skills", "Awards", "Contact"].map(
                            (item) => (
                                <button
                                    key={item.toLowerCase()}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`font-inter text-lg transition-colors ${activeSection === item.toLowerCase()
                                            ? "text-gray-900 font-semibold"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    {item}
                                </button>
                            ),
                        )}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden ${isMenuOpen ? "block" : "hidden"
                    } bg-white border-t border-gray-100`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {["About", "Experience", "Skills", "Awards", "Contact"].map(
                        (item) => (
                            <button
                                key={item.toLowerCase()}
                                onClick={() => handleItemClick(item.toLowerCase())}
                                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${activeSection === item.toLowerCase()
                                        ? "text-red-600 bg-red-50"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                    } block transition-colors`}
                            >
                                {item}
                            </button>
                        ),
                    )}
                </div>
            </div>
        </nav>
    );
}


export default Navigation;
