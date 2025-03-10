import React, { useRef } from 'react';

function Leadership() {
    const carouselRef = useRef(null);

    const handleScroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section id="leadership" className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                        Leadership & Impact
                    </h2>
                    <p className="text-[#FF0000] font-inter mt-2 text-lg">
                        Making a Difference
                    </p>
                </div>

                <div className="relative">
                    <button
                        onClick={() => handleScroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all"
                    >
                        <i className="fas fa-chevron-left text-gray-600"></i>
                    </button>

                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
                    >
                        {[
                            {
                                image: "/images/Studentcouncil.jpeg",
                                title: "Speaker of Parliament",
                                subtitle: "Ashesi Student Government",
                                brief:
                                    "Leading legislative discussions and student representation",
                                link: "/parliamentary-leadership",
                            },
                            {
                                image: "/images/mentorship.jpg",
                                title: "Youth Mentor & Coach",
                                subtitle: "Entrepreneurship Development",
                                brief:
                                    "Guiding young entrepreneurs in business development",
                                link: "/entrepreneurship-mentorship",
                            },
                            {
                                image: "/images/CommunityImpact.jpg",
                                title: "Community Impact Leader",
                                subtitle: "Infrastructure Development",
                                brief: "Leading construction of essential facilities in Berekuso",
                                link: "/community-impact",
                            },
                            {
                                image: "/images/WomenEmpowermentprogram.jpg",
                                title: "Women Empowerment Nations",
                                subtitle: "Girl Child Education",
                                brief: "Mentoring underserved girls of color",
                                link: "/women-empowerment",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[350px] bg-white rounded-xl shadow-lg overflow-hidden snap-start hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-200"
                            >
                                <div className="h-[250px] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={`${item.title} activity`}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            e.target.src =
                                                "https://via.placeholder.com/350x250?text=Activity+Image";
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-inter font-semibold text-xl mb-2 text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#FF0000] font-inter text-sm mb-3">
                                        {item.subtitle}
                                    </p>
                                    <p className="text-gray-600 mb-4">{item.brief}</p>
                                    <a
                                        href={item.link}
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-[#FF0000] hover:text-[#CC0000] font-inter gap-2"
                                    >
                                        Learn more
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => handleScroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all"
                    >
                        <i className="fas fa-chevron-right text-gray-600"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Leadership;
