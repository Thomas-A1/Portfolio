import React from 'react';

function About() {
    return (
        <section id="about" className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                        About Me
                    </h2>
                    <p className="text-[#FF0000] font-inter mt-2 text-lg">Who I Am</p>
                </div>

                <div className="font-inter text-gray-700 max-w-3xl mx-auto leading-relaxed space-y-8">
                    <p className="text-lg">
                        I am a dynamic and impact-driven professional with a background in Management
                        Information Systems from Ashesi University. With a strong passion for business
                        innovation, sustainability, and technology-driven solutions, I have worked across
                        various industries, from venture capital and entrepreneurship to education and agribusiness.
                    </p>
                    <p className="text-lg">
                        I am passionate about creating smart business solutions using information technology
                        systems and leveraging Microsoft tools and software to enhance productivity and efficiency.
                        My career is centered on mentorship, coaching, product development, and strategic planning,
                        with a focus on delivering scalable, sustainable, and high-impact solutions across Africa.
                    </p>
                    <p className="text-lg">
                        Through my work with Secha Capital, FanMilk Ghana, Apple, and the AL for Infrastructure
                        community, I have gained hands-on experience in business strategy, investment, private equity,
                        product innovation, and education consulting.
                    </p>
                    <div className="flex justify-center mt-10">
                        <a
                            href="/Albertha_Owiredu_CV.pdf" 
                            download="Albertha_Owiredu_CV.pdf"
                            className="px-8 py-3 bg-[#FF0000] text-white font-inter rounded-lg hover:bg-[#CC0000] transition-colors flex items-center gap-2"
                        >
                            <i className="fas fa-download"></i>
                            Download CV
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;