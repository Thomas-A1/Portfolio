import React from 'react';

function Awards() {
    const awards = [
        {
            title: "Coca-Cola Foundation Funds",
            description: "Recognized for impactful service and leadership",
            icon: "🏆",
            color: "from-red-500/10 to-transparent"
        },
        {
            title: "Mastercard Entrepreneurship Fund",
            description: "Supported for an entrepreneurial project",
            icon: "🏆",
            color: "from-orange-500/10 to-transparent"
        },
        {
            title: "Fund for Service",
            description: "Awarded for outstanding contributions to community projects",
            icon: "🏆",
            color: "from-blue-500/10 to-transparent"
        },
        {
            title: "Fidelity Bank Innovative Experience",
            description: "Selected for excellence in innovation",
            icon: "🏆",
            color: "from-green-500/10 to-transparent"
        }
    ];

    return (
        <section id="awards" className="bg-gray-50 py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                        Awards & Recognitions
                    </h2>
                    <p className="text-[#FF0000] font-inter mt-2 text-lg">
                        celebrating excellence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${award.color} rounded-xl transition-opacity group-hover:opacity-100 opacity-0`}
                            ></div>
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-4xl animate-bounce">
                                        {award.icon}
                                    </span>
                                    <h3 className="font-inter font-semibold text-xl text-gray-900">
                                        {award.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 font-inter">
                                    {award.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Awards;