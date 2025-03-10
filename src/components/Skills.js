import React from 'react';

function Skills() {
    const skillsList = [
        { name: "Business Strategy & Entrepreneurship", level: 95 },
        { name: "Product Development & Innovation", level: 92 },
        { name: "Design Thinking & Problem-Solving", level: 95 },
        { name: "Venture Capital & Private Equity", level: 85 },
        { name: "Software & Technology Integration", level: 88 },
        { name: "Sustainability & Circular Economy", level: 90 },
        { name: "Research & Data Analysis", level: 88 },
        { name: "Coaching & Mentorship", level: 90 },
        { name: "Microsoft Office Suite", level: 98 }
    ];

    return (
        <section id="skills" className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                        Key Skills & Competencies
                    </h2>
                    <p className="text-[#FF0000] font-inter mt-2 text-lg">what i know</p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillsList.map((skill, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-500">✅</span>
                                        <span className="font-inter font-medium text-gray-900">
                                            {skill.name}
                                        </span>
                                    </div>
                                    <span className="font-inter font-semibold text-[#FF0000]">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#FF0000] rounded-full transition-all duration-1000 ease-out origin-left scale-x-0 group-hover:scale-x-100"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;