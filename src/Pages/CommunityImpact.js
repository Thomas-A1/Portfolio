import React, { useState } from 'react';

function MainComponent() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isModalImageOpen, setIsModalImageOpen] = useState(false);

    const impactStats = [
        { number: "1000+", label: "Community Members Impacted", icon: "fa-users" },
        { number: "4", label: "Projects Completed", icon: "fa-check-circle" },
        { number: "$10K", label: "Resources Mobilized", icon: "fa-coins" },
        { number: "3", label: "Local Partnerships", icon: "fa-handshake" },
    ];

    const projects = [
        {
            title: "Youth Education Initiative",
            description:
                "Established after-school programs and learning centers in underserved communities",
            images: [
                "/images/Empowerment.jpeg",
                "/images/Empowerment2.jpeg",
                "/images/Education.jpeg",
            ],
            before: "/images/education-before.jpg",
            after: "/images/education-after.jpg",
            impact: "Improved academic performance for 50+ students",
            type: "slideshow",
            mainImage: "/images/Education.jpeg",
        },
        {
            title: "Clean Water Access",
            description:
                "Implemented sustainable water solutions in Berekuso Basic school",
            before: "/images/water-before.jpg",
            after: "/images/water-after.jpg",
            impact: "Provided clean water access to 200+ students",
            type:"slideshow",
            mainImage: "/images/cleanwater.jpg",
            images: [
                "/images/Borehole.jpeg",
                "/images/polytank.jpeg",
                "/images/Borehole.jpeg",
            ],
        },
        {
            title: "Women Empowerment Program",
            description:
                "Girl child education in Berekuso Basic school",
            before: "/images/women-before.jpg",
            after: "/images/women-after.jpg",
            impact: "Educated, and trained 50+ ladies in Berekuso Basic school with vital IT, Design thinking and communication skills",
            type:"slideshow",
            mainImage: "/images/WomenEmpowerment.jpg",
            images: [
                "/images/GirlEmpowerment.jpeg",
                "images/GirlEmpowerment2.jpeg",
                "/images/empowerment2.jpeg",
            ],

        },
        {
            title: "School Maintenance & Washroom Completion",
            description:
                "Sustained Berekuso Basic school building and completed a washroom Biodigester",
            before: "/images/women-before.jpg",
            after: "/images/women-after.jpg",
            impact: "Students and Faculty find it safe to teach and convenient to use the washroom facility",
            type: "slideshow",
            mainImage: "/images/School_completion.jpeg",
            images: [
                "/images/School_completion.jpeg",
                "/images/school_completion2.jpeg",
                "/images/Biodigester.jpeg",
                "/images/washroom.mp4"
            ],

        },
    ];

    const testimonials = [
        {
            name: "Grace Mensah",
            role: "Mother",
            quote:
                "The impact of these initiatives has transformed our community. Our children now have better educational opportunities.",
            image: "/images/testimonial_image.jpg",
        },
        {
            name: "Kwame Addo",
            role: "Lecturer",
            quote:
                "The mentorship program has equipped students of vital skills they need to thrive wherever they find themselves.",
            image: "/images/testimonial_image.jpg",
        },
        {
            name: "Abena Osei",
            role: "Student",
            quote:
                "The women's empowerment program helped me attain unique insights and perspectives concerning hygiene.",
            image: "/images/testimonial_image.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="relative h-[60vh] w-full">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img
                    src="/images/CommunityImpact.jpg"
                    alt="Community development projects overview showing people working together"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="font-inter text-4xl md:text-6xl font-bold mb-4">
                            Community Impact Initiatives
                        </h1>
                        <p className="font-inter text-xl md:text-2xl max-w-2xl mx-auto">
                            Transforming lives through sustainable community development
                        </p>
                    </div>
                </div>
            </div>
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {impactStats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <i
                                    className={`fas ${stat.icon} text-[#FF0000] text-3xl mb-4`}
                                ></i>
                                <div className="font-inter font-bold text-3xl text-gray-900 mb-2">
                                    {stat.number}
                                </div>
                                <div className="font-inter text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="font-inter text-3xl md:text-4xl font-bold text-center mb-12">
                        Transformation Projects
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative h-48">
                                    <img
                                        src={project.mainImage}
                                        alt={`${project.title} result`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-inter font-semibold text-xl mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="font-inter text-gray-600 mb-4">
                                        {project.description}
                                    </p>
                                    <button className="text-[#FF0000] font-inter flex items-center gap-2">
                                        View Details
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="font-inter text-3xl md:text-4xl font-bold text-center mb-12">
                        Community Voices
                    </h2>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500"
                                style={{
                                    transform: `translateX(-${activeTestimonial * 100}%)`,
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-16 h-16 rounded-full overflow-hidden">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-inter font-semibold text-lg">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="font-inter text-gray-600">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="font-inter text-gray-700 text-lg italic">
                                                "{testimonial.quote}"
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === index ? "bg-[#FF0000]" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {selectedProject && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-inter font-bold text-2xl">
                                {selectedProject.title}
                            </h3>
                            <button
                                onClick={() => {
                                    setSelectedProject(null);
                                    setCurrentImageIndex(0);
                                }}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </div>

                        {selectedProject.type === "slideshow" ? (
                            <div className="relative mb-6">
                                <div className="relative h-[400px] overflow-hidden rounded-lg">
                                    <div
                                        className="flex transition-transform duration-500 h-full"
                                        style={{
                                            transform: `translateX(-${currentImageIndex * 100}%)`,
                                        }}
                                    >
                                        {selectedProject.images.map((image, index) => (
                                            <div key={index} className="w-full h-full flex-shrink-0">
                                                <img
                                                    src={image}
                                                    alt={`${selectedProject.title} - slide ${index + 1}`}
                                                    className="w-full h-full object-cover cursor-pointer"
                                                    onClick={() => setIsModalImageOpen(true)}
                                                />

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        setCurrentImageIndex((prev) =>
                                            prev === 0 ? selectedProject.images.length - 1 : prev - 1,
                                        )
                                    }
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                >
                                    <i className="fas fa-chevron-left text-gray-800"></i>
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentImageIndex((prev) =>
                                            prev === selectedProject.images.length - 1 ? 0 : prev + 1,
                                        )
                                    }
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                >
                                    <i className="fas fa-chevron-right text-gray-800"></i>
                                </button>

                                <div className="flex justify-center gap-2 mt-4">
                                    {selectedProject.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index
                                                    ? "bg-red-600 w-4"
                                                    : "bg-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <p className="font-inter text-sm text-gray-500 mb-2">
                                        Before
                                    </p>
                                    <img
                                        src={selectedProject.before}
                                        alt={`${selectedProject.title} before`}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <p className="font-inter text-sm text-gray-500 mb-2">After</p>
                                    <img
                                        src={selectedProject.after}
                                        alt={`${selectedProject.title} after`}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="font-inter">
                            <p className="text-gray-700 mb-4">
                                {selectedProject.description}
                            </p>
                            <p className="font-semibold text-[#FF0000]">
                                {selectedProject.impact}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {isModalImageOpen &&
                selectedProject &&
                selectedProject.type === "slideshow" && (
                    <div
                        className="fixed inset-0 bg-black z-[60] flex items-center justify-center p-4"
                        onClick={() => setIsModalImageOpen(false)}
                    >
                        <button
                            onClick={() => setIsModalImageOpen(false)}
                            className="absolute top-4 right-4 text-white text-xl z-[70]"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    {selectedProject.images[currentImageIndex].endsWith('.mp4') ? (
                        <video
                            src={selectedProject.images[currentImageIndex]}
                            className="w-full h-auto rounded-md"
                            autoPlay
                            muted
                            loop
                            controls
                        />
                    ) : (
                        <img
                            src={selectedProject.images[currentImageIndex]}
                            alt="Project media"
                            className="w-full h-auto rounded-md"
                        />
                    )}

                    </div>
                )}

            <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        section {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes modalFade {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .bg-white.rounded-xl {
          animation: modalFade 0.3s ease-out forwards;
        }
      `}</style>
        </div>
    );
}

export default MainComponent;