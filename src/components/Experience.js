import React, { useState } from 'react';

function Experience() {
    const [selectedExperience, setSelectedExperience] = useState(null);

    const experiences = [
        {
            icon: "📚",
            title: "Education & Mentorship",
            preview: "Leadership in educational initiatives and mentorship programs",
            content: (
                <div className="space-y-4">
                    <h4 className="font-semibold">National Service - Odeefoo Oteng Korankye II Education Fund (Current)</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Led educational technology initiatives</li>
                        <li>Developed curriculum materials</li>
                        <li>Mentored student groups</li>
                    </ul>
                    <h4 className="font-semibold">FDE Coach Experience</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Coached winning teams for 3 semesters</li>
                        <li>Guided student entrepreneurship projects</li>
                        <li>Facilitated design thinking workshops</li>
                    </ul>
                </div>
            )
        },
        {
            icon: "💼",
            title: "Business Strategy & Investment",
            preview: "Experience in venture capital and strategic planning",
            content: (
                <div className="space-y-4">
                    <h4 className="font-semibold">Secha Capital J.O.I.N</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Evaluated investment opportunities</li>
                        <li>Developed strategic growth plans</li>
                        <li>Led value creation initiatives</li>
                    </ul>
                    <h4 className="font-semibold">Ashesi Entrepreneurship Center, D-lab</h4>
                    <h5>Social Media Lead - Berekuso, E/R - 2023</h5>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Managed all D-lab social media accounts and posts contents</li>
                        <li>Brainstormed and developed research Campaign ideas</li>
                        <li>Develop strategies for increasing media engagement</li>
                    </ul>
                </div>
            )
        },
        {
            icon: "🌍",
            title: "Sustainability & Innovation",
            preview: "Product development and circular economy initiatives",
            content: (
                <div className="space-y-4">
                    <h4 className="font-semibold">FanMilk Ghana</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Led sustainability consulting projects</li>
                        <li>Developed eco-friendly product lines</li>
                        <li>Implemented waste reduction programs</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <section id="experience" className="bg-gray-50 py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                        Professional Experience
                    </h2>
                    <p className="text-[#FF0000] font-inter mt-2 text-lg">What I've Achieved</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedExperience(experience)}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-1 duration-200"
                        >
                            <div className="text-4xl mb-4">{experience.icon}</div>
                            <h3 className="font-inter font-semibold text-xl mb-2 text-gray-900">
                                {experience.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{experience.preview}</p>
                            <button className="text-[#FF0000] hover:text-[#CC0000] font-inter flex items-center gap-2">
                                Click to read more
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    ))}
                </div>

                {selectedExperience && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl">{selectedExperience.icon}</span>
                                    <h3 className="font-inter font-bold text-2xl text-gray-900">
                                        {selectedExperience.title}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setSelectedExperience(null)}
                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    <i className="fas fa-times text-xl"></i>
                                </button>
                            </div>
                            <div className="font-inter text-gray-700">
                                {selectedExperience.content}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Experience;