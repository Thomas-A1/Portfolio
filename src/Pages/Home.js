import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Awards from "../components/Awards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Leadership from "../components/Leadership";
import Divider from "../components/Divider";

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Section with id "${sectionId}" not found.`);
    }
};

const Home = () => {
    const [activeSection, setActiveSection] = useState('');

    // Detect when a section is in view and update activeSection
    useEffect(() => {
        const sections = ["about", "experience", "skills", "awards", "contact"];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    return (
        <div>
            <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
            <Hero />
            <About />
            <Experience />
            <Leadership />
            <Divider />
            <Skills />
            <Awards />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
