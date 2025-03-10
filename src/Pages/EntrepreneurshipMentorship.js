import React, { useState} from "react";

function MainComponent() {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <div className="relative h-[60vh] w-full">
                {!imageError ? (
                    <img
                        src="/images/mentorship.jpg"
                        alt="Group of entrepreneurs collaborating in a modern workspace"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <i className="fas fa-image text-4xl text-gray-400"></i>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                        <h1 className="font-inter text-4xl md:text-6xl font-bold mb-4">
                            Entrepreneurship Mentorship Program
                        </h1>
                        <p className="font-inter text-xl md:text-2xl max-w-3xl mx-auto">
                            Empowering the next generation of African business leaders
                        </p>
                    </div>
                </div>
            </div>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                            Program Overview
                        </h2>
                        <p className="text-[#FF0000] font-inter mt-2 text-lg">
                            Transforming Ideas into Success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "fa-lightbulb",
                                title: "Innovation Focus",
                                description:
                                    "Develop groundbreaking business solutions through guided innovation workshops and strategic planning sessions",
                            },
                            {
                                icon: "fa-users",
                                title: "1-on-1 Mentorship",
                                description:
                                    "Personalized guidance to Ashesi students on how to grow their business",
                            },
                            {
                                icon: "fa-chart-line",
                                title: "Growth Strategy",
                                description:
                                    "Taught/Tutored students on how to scale their businesses",
                            },
                        ].map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-xl">
                                <i
                                    className={`fas ${feature.icon} text-[#FF0000] text-3xl mb-4`}
                                ></i>
                                <h3 className="font-inter font-semibold text-xl mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                            Success Stories
                        </h2>
                        <p className="text-[#FF0000] font-inter mt-2 text-lg">
                            From Vision to Reality
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                name: "Ashesi FDE Group I",
                                company: "The EverGreens Recycling Company",
                                story:
                                    "Through Albertha's Mentorship, we were able to design and sell 50+ totebags.",
                                image: "/images/ashesi-logo.png",
                            },
                            {
                                name: "Ashesi FDE Group II",
                                company: "I-VIDZ",
                                story:
                                    "Mentorship under Albertha was great which helped us succeed in our FDE class. We successfully developed a Mobile app which offers practical lessons to students.",
                                image: "/images/ashesi-logo.png",
                            },
                        ].map((story, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                                        <img
                                            src={story.image}
                                            alt={`Portrait of ${story.name}`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.parentElement.innerHTML =
                                                    '<i class="fas fa-user text-4xl text-gray-400"></i>';
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-inter font-semibold text-xl">
                                            {story.name}
                                        </h3>
                                        <p className="text-[#FF0000] font-inter">{story.company}</p>
                                        <p className="mt-2 text-gray-600">{story.story}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                            Mentorship Approach
                        </h2>
                        <p className="text-[#FF0000] font-inter mt-2 text-lg">
                            A Journey to Success
                        </p>
                    </div>

                    <div className="space-y-12">
                        {[
                            {
                                phase: "Phase 1: Discovery",
                                description: "Initial assessment and goal setting",
                                details: [
                                    "Business idea validation",
                                    "Market research",
                                    "Vision alignment",
                                ],
                            },
                            {
                                phase: "Phase 2: Development",
                                description: "Strategy and skill building",
                                details: [
                                    "Business model refinement",
                                    "Financial planning",
                                    "Leadership development",
                                ],
                            },
                            {
                                phase: "Phase 3: Implementation",
                                description: "Execution and growth",
                                details: [
                                    "Market entry strategy",
                                    "Team building",
                                    "Growth acceleration",
                                ],
                            },
                        ].map((phase, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row gap-8 items-start"
                            >
                                <div className="md:w-1/3">
                                    <h3 className="font-inter font-semibold text-xl">
                                        {phase.phase}
                                    </h3>
                                    <p className="text-gray-600 mt-2">{phase.description}</p>
                                </div>
                                <div className="md:w-2/3 bg-gray-50 p-6 rounded-xl">
                                    <ul className="space-y-4">
                                        {phase.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <i className="fas fa-check-circle text-green-500"></i>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                            Impact Metrics
                        </h2>
                        <p className="text-[#FF0000] font-inter mt-2 text-lg">
                            Our Track Record
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "10", label: "Student entrepreneurs Mentored" },
                            { number: "85%", label: "Success Rate" },
                            { number: "8", label: "Business Owners" },
                            { number: "20+", label: "Jobs Created" },
                        ].map((metric, index) => (
                            <div key={index} className="text-center">
                                <div className="font-inter font-bold text-4xl md:text-5xl text-[#FF0000]">
                                    {metric.number}
                                </div>
                                <div className="font-inter mt-2 text-gray-600">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainComponent;