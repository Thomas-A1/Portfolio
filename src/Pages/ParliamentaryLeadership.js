import React, { useState } from "react";

function MainComponent() {
    const [activeImage, setActiveImage] = useState(null);
    // const [error, setError] = useState(false);
    
    const statistics = [
        { number: "2", label: "Townhall Sessions Chaired" },
        { number: "5", label: "Parliamentary sesion chaired" },
        { number: "5+", label: "Debates chaired" },
        // { number: "150+", label: "International Delegations Hosted" },
    ];

    const gallery = [
        {
            url: "/images/ExcellenceAwards.jpeg",
            caption: "Receiving Excellence Awards for service",
        },
        {
            url: "/images/parliament.jpeg",
            caption: "Day of appointment to office",
        },
        {
            url: "/images/Debate.jpeg",
            caption: "Townhall facilitation with JEC Chairperson",
        },
        {
            url: "/images/Townhall.jpeg",
            caption: "Chairing a debate about Ashesi's policy",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative h-[60vh] w-full">
                <img
                    src="/images/parliament.jpeg"
                    alt="Ashesi Parliament building main chamber"
                    className="w-full h-full object-cover"
                    // onError={() => setError(true)}
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="font-inter text-4xl md:text-6xl font-bold mb-4">
                            Speaker of Parliament
                        </h1>
                        <p className="font-inter text-xl md:text-2xl">
                            Reinforcing Ashesi's Legislative Body
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <section className="mb-20">
                    <h2 className="font-inter text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Role Description
                    </h2>
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <p className="font-inter text-gray-700 text-lg leading-relaxed mb-6">
                            As the Deputy Speaker of Parliament at Ashesi, I held a prominent leadership role within the student government, actively contributing to the legislative process and ensuring the smooth operation of parliamentary sessions. In this capacity, I was entrusted with presiding over debates, maintaining order, and facilitating constructive dialogue between parliamentarians. My duties also involved organizing and chairing student town hall meetings, where I served as a mediator between the student body and leadership, effectively addressing concerns and fostering an environment of open communication.
                            In these meetings, I worked closely with my peers to ensure that all voices were heard and that issues of importance were discussed in a fair and inclusive manner. This role not only sharpened my skills in public speaking, negotiation, and conflict resolution but also gave me invaluable insight into the importance of transparency and accountability in governance.
                        </p>
                        <p className="font-inter text-gray-700 text-lg leading-relaxed">
                            As Deputy Speaker, I was responsible for upholding parliamentary rules and procedures, ensuring that all discussions adhered to established guidelines while maintaining respect for differing viewpoints. My leadership in this capacity was essential in creating a platform where constructive debates could take place, policies could be debated, and decisions could be made in the best interest of the student community.
                        </p>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="font-inter text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Key Achievements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: "fa-gavel",
                                title: "Legislative Excellence",
                                description:
                                    "Facilitated the passing of crucial bills and maintaining high standards of parliamentary debate",
                            },
                            {
                                icon: "fa-globe",
                                title: "Student Empowerment and Advocacy",
                                description:
                                    "Ensured that students' concerns were heard and represented in parliament, actively advocating for their needs in decision-making processes.",
                            },
                            {
                                icon: "fas fa-paper-plane",
                                title: "Communication and Representation",
                                description:
                                    "Acted as a liaison between the student parliament and administration, advocating for student interests and fostering collaborative relationships.",
                            },
                            {
                                icon: "fa-handshake",
                                title: "Procedural Integrity and Parliamentary Efficiency",
                                description:
                                    "Contributed to refining parliamentary processes to ensure efficient, effective, and transparent decision-making.",
                            },
                        ].map((achievement, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                            >
                                <i
                                    className={`fas ${achievement.icon} text-4xl text-[#FF0000] mb-4`}
                                ></i>
                                <h3 className="font-inter text-xl font-semibold mb-3">
                                    {achievement.title}
                                </h3>
                                <p className="font-inter text-gray-600">
                                    {achievement.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="font-inter text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Impact Statistics
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {statistics.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg text-center"
                            >
                                <span className="font-inter text-3xl md:text-4xl font-bold text-[#FF0000] block mb-2">
                                    {stat.number}
                                </span>
                                <span className="font-inter text-gray-600">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="font-inter text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Photo Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {gallery.map((image, index) => (
                            <div
                                key={index}
                                className="cursor-pointer group relative"
                                onClick={() => setActiveImage(image)}
                            >
                                <img
                                    src={image.url}
                                    alt={image.caption}
                                    className="w-full h-[200px] object-cover rounded-lg shadow-lg group-hover:opacity-90 transition-opacity"
                                    onError={(e) =>
                                    (e.target.src =
                                        "https://via.placeholder.com/400x300?text=Image+Unavailable")
                                    }
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                    <p className="text-white font-inter text-center p-4">
                                        {image.caption}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {activeImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setActiveImage(null)}
                >
                    <div className="relative max-w-4xl w-full">
                        <img
                            src={activeImage.url}
                            alt={activeImage.caption}
                            className="w-full h-auto max-h-[80vh] object-contain"
                            onError={(e) =>
                            (e.target.src =
                                "https://via.placeholder.com/800x600?text=Image+Unavailable")
                            }
                        />
                        <p className="text-white font-inter text-center mt-4">
                            {activeImage.caption}
                        </p>
                    </div>
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
        
        .fixed {
          animation: modalFade 0.3s ease-out forwards;
        }
      `}</style>
        </div>
    );
}

export default MainComponent;