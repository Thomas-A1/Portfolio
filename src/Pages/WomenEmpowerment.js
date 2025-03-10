import React, {useState} from "react";

function MainComponent() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [imageError, setImageError] = useState(false);

    const testimonials = [
        {
            quote:
                "I feel a sense of belonging beause of this program. The mentorship and support were invaluable.",
            author: "Sarah Mensah",
            role: "Student",
            image: "/images/testimonial_image.jpg",
        },
        {
            quote:
                "The financial literacy workshops changed my life. I've learned to manage my finances and invest in my future.",
            author: "Abena Osei",
            role: "Community Leader",
            image: "/images/testimonial_image.jpg",
        },
    ];

    const impactMetrics = [
        { number: "50+", label: "Women Trained", icon: "fas fa-user-graduate" },
        { number: "2", label: "Communities impacted", icon: "fas fa-store" },
        { number: "100+", label: "Sanitary pads donated", icon: "fas fa-coins" },
        // { number: "50+", label: "Community Partners", icon: "fas fa-handshake" },
    ];

    const successStories = [
        {
            title: "Women's Leadership Academy",
            description:
            "Successfully enrolled into Women's empowerment nations where I attended conferences and connected with like-minded individuals in empowering the female child",
            image: "/images/Entry.jpeg",
            stats: "90% career advancement rate",
        },
        {
            title: "Menstrual Workshop & Financial literacy",
            description:
                "A workshop to educate women on the importance of hygiene during their menstrual cycle and how they can manage their finances.",
            image: "/images/HygieneEducation.jpeg",
            stats: "Trained 50+ women",
        },
        // {
        //     title: "Rural Enterprise Program",
        //     description:
        //         "Supported rural women entrepreneurs through microfinance and business training",
        //     image: "/success/rural.jpg",
        //     stats: "Launched 50 sustainable businesses",
        // }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="relative h-[60vh] overflow-hidden">
                {!imageError ? (
                    <img
                        src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg"
                        alt="Women empowerment workshop in progress"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <i className="fas fa-image text-4xl text-gray-400"></i>
                    </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Women Empowerment Initiative
                        </h1>
                        <p className="font-inter text-xl md:text-2xl max-w-2xl mx-auto">
                            Empowering women through education, entrepreneurship, and
                            leadership
                        </p>
                    </div>
                </div>
            </div>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                            Program Overview
                        </h2>
                        <p className="text-[#FF0000] font-inter mt-2 text-lg">
                            Our Approach to Empowerment
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "fas fa-chalkboard-teacher",
                                title: "Skills Development",
                                description:
                                    "Comprehensive training in business, technology, and leadership skills",
                            },
                            {
                                icon: "fas fa-coins",
                                title: "Giving-Back",
                                description:
                                    "Giving back to underserved communities",
                            },
                            {
                                icon: "fas fa-users",
                                title: "Mentorship Network",
                                description:
                                    "Connection with successful women leaders and entrepreneurs",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                            >
                                <i className={`${item.icon} text-[#FF0000] text-4xl mb-4`}></i>
                                <h3 className="font-inter font-semibold text-xl mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                            Success Stories
                        </h2>
                        <p className="text-[#FF0000] font-inter mt-2 text-lg">
                            Transforming Lives
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {successStories.map((story, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-lg"
                            >
                                <div className="h-96 relative">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) =>
                                            (e.target.src = "https://via.placeholder.com/400x200")
                                        }
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-inter font-semibold text-xl mb-2">
                                        {story.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{story.description}</p>
                                    <div className="text-[#FF0000] font-semibold">
                                        {story.stats}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                            Impact Metrics
                        </h2>
                        <p className="text-[#FF0000] font-inter mt-2 text-lg">
                            My Achievements
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {impactMetrics.map((metric, index) => (
                            <div key={index} className="text-center">
                                <i
                                    className={`${metric.icon} text-[#FF0000] text-4xl mb-4`}
                                ></i>
                                <div className="font-inter font-bold text-3xl md:text-4xl text-gray-900 mb-2">
                                    {metric.number}
                                </div>
                                <div className="text-gray-600">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                            Testimonials
                        </h2>
                        <p className="text-[#FF0000] font-inter mt-2 text-lg">
                            Voices of Impact
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="text-center">
                                <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                                    "{testimonials[activeTestimonial].quote}"
                                </p>
                                <div className="flex items-center justify-center gap-4">
                                    <img
                                        src={testimonials[activeTestimonial].image}
                                        alt={testimonials[activeTestimonial].author}
                                        className="w-16 h-16 rounded-full object-cover"
                                        onError={(e) =>
                                            (e.target.src = "https://via.placeholder.com/64")
                                        }
                                    />
                                    <div className="text-left">
                                        <div className="font-inter font-semibold">
                                            {testimonials[activeTestimonial].author}
                                        </div>
                                        <div className="text-gray-600">
                                            {testimonials[activeTestimonial].role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8 gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === activeTestimonial ? "bg-[#FF0000]" : "bg-gray-300"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        section {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
        </div>
    );
}

export default MainComponent;