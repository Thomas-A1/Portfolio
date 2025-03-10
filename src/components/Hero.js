import React, { useState } from 'react';

function Hero() {
    const [imageError, setImageError] = useState(false);

    return (
        <section id="home" className="min-h-screen relative bg-gray-50 flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
                    <div className="flex-1 space-y-6">
                        <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900">
                            Albertha Owiredu-Owusu
                        </h1>
                        <p className="font-inter text-gray-700 text-lg md:text-xl">
                            Innovator | Entrepreneur | Sustainability & Business Strategist
                        </p>
                        <div className="flex items-center gap-2 font-inter text-gray-700">
                            <span>📍 Accra - Ghana</span>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/alberta-owusu0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-inter rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <i className="fab fa-linkedin mr-2"></i>
                            Connect on LinkedIn
                        </a>
                    </div>

                    <div className="flex-1 flex justify-center">
                        {!imageError ? (
                            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl">
                                <img
                                    src="/images/Profile.jpeg"
                                    alt="Professional portrait of Albertha Owiredu-Owusu"
                                    className="w-full h-full object-cover"
                                    onError={() => setImageError(true)}
                                />
                            </div>
                        ) : (
                            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gray-100 rounded-full flex items-center justify-center shadow-2xl">
                                <i className="fas fa-user text-4xl text-gray-400"></i>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;