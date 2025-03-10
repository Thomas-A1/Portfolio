// import React from 'react';

// function Footer() {
//     const currentYear = new Date().getFullYear();

//     const scrollToSection = (sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <footer className="bg-gray-900 text-white py-16">
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
//                     <div className="space-y-4">
//                         <h3 className="font-inter font-bold text-xl mb-4">About Me</h3>
//                         <p className="text-gray-400 leading-relaxed">
//                             I am a dynamic professional specializing in business innovation,
//                             sustainability, and technology-driven solutions. Committed to
//                             mentoring and empowering the next generation of leaders in Africa.
//                         </p>
//                         <div className="flex space-x-4">
//                             <SocialLink href="https://linkedin.com/in/your-profile" icon="linkedin" />
//                             <SocialLink href="https://twitter.com/your-handle" icon="twitter" />
//                             <SocialLink href="https://github.com/your-username" icon="github" />
//                         </div>
//                     </div>

//                     <div>
//                         <h3 className="font-inter font-bold text-xl mb-4">Quick Links</h3>
//                         <ul className="space-y-2">
//                             {['About', 'Experience', 'Skills', 'Awards', 'Contact'].map((item) => (
//                                 <li key={item}>
//                                     <button
//                                         onClick={() => scrollToSection(item.toLowerCase())}
//                                         className="text-gray-400 hover:text-white transition-colors"
//                                     >
//                                         {item}
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div>
//                         <h3 className="font-inter font-bold text-xl mb-4">Contact Info</h3>
//                         <ul className="space-y-4">
//                             <ContactItem icon="map-marker-alt" content="Accra, Ghana" />
//                             <ContactItem
//                                 icon="envelope"
//                                 content="your.email@example.com"
//                                 href="mailto:your.email@example.com"
//                             />
//                             <ContactItem
//                                 icon="phone"
//                                 content="+233 00 000 0000"
//                                 href="tel:+233000000000"
//                             />
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="border-t border-gray-800 pt-8">
//                     <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                         <p className="text-gray-400 text-center md:text-left">
//                             © {currentYear} Albertha Owiredu-Owusu. All rights reserved.
//                         </p>
//                         <div className="flex items-center space-x-4 text-gray-400">
//                             <a href="/privacy" className="hover:text-white transition-colors">
//                                 Privacy Policy
//                             </a>
//                             <span>•</span>
//                             <a href="/terms" className="hover:text-white transition-colors">
//                                 Terms of Service
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// function SocialLink({ href, icon }) {
//     return (
//         <a
//             href={href}
//             className="text-gray-400 hover:text-white transition-colors"
//             target="_blank"
//             rel="noopener noreferrer"
//         >
//             <i className={`fab fa-${icon} text-xl`}></i>
//         </a>
//     );
// }

// function ContactItem({ icon, content, href }) {
//     const Element = href ? 'a' : 'span';
//     return (
//         <li className="flex items-center space-x-3 text-gray-400">
//             <i className={`fas fa-${icon} text-[#FF0000]`}></i>
//             <Element
//                 href={href}
//                 className={href ? 'hover:text-white transition-colors' : undefined}
//             >
//                 {content}
//             </Element>
//         </li>
//     );
// }

// export default Footer;
import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* About Me Section */}
                    <div className="space-y-4">
                        <h3 className="font-inter font-bold text-xl mb-4">About Me</h3>
                        <p className="text-gray-400 leading-relaxed">
                            I am a dynamic professional specializing in business innovation,
                            sustainability, and technology-driven solutions. Committed to
                            mentoring and empowering the next generation of leaders in Africa.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="https://linkedin.com/in/your-profile" icon="linkedin" />
                            <SocialLink href="https://twitter.com/your-handle" icon="twitter" />
                            <SocialLink href="https://github.com/your-username" icon="github" />
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="font-inter font-bold text-xl mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['About', 'Experience', 'Skills', 'Awards', 'Contact'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div>
                        <h3 className="font-inter font-bold text-xl mb-4">Contact Info</h3>
                        <ul className="space-y-4">
                            <ContactItem icon="map-marker-alt" content="Accra, Ghana" />
                            <ContactItem
                                icon="envelope"
                                content="albertaowusu434@gmail.com"
                                href="mailto:albertaowusu434@gmail.com"
                            />
                            <ContactItem
                                icon="phone"
                                content="+233 00 000 0000"
                                href="tel:+233000000000"
                            />
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-center md:text-left">
                            © {currentYear} Albertha Owiredu-Owusu. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-4 text-gray-400">
                            <a href="/privacy" className="hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <span>•</span>
                            <a href="/terms" className="hover:text-white transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// SocialLink component for rendering individual social media links
function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className={`fab fa-${icon} text-xl`}></i>
        </a>
    );
}

// ContactItem component for displaying contact information
function ContactItem({ icon, content, href }) {
    const Element = href ? 'a' : 'span';
    return (
        <li className="flex items-center space-x-3 text-gray-400">
            <i className={`fas fa-${icon} text-[#FF0000]`}></i>
            <Element
                href={href}
                className={href ? 'hover:text-white transition-colors' : undefined}
            >
                {content}
            </Element>
        </li>
    );
}

export default Footer;
