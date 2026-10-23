import { useState, useEffect } from 'react';
import "./Header.css";
import logo from "./assets/logo.svg";

function Header() {
    // we define a constant called activeSection that will contain the name of surrently active section
    const [activeSection, setActiveSection] = useState('story');


    // we define which section the scrolling user currently sees, and set it as activeSection
    useEffect(() => {
        function updateActiveSection () {
            const triggerLine = window.scrollY + (window.innerHeight * 0.4);
            const sections = document.querySelectorAll('section[id]');

            let currentSection = 'story';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionId = section.getAttribute('id');

                if (sectionTop <= triggerLine) {
                    currentSection = sectionId;
                }
            });

            const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 20;
            if (isAtBottom) {
                currentSection = 'contacts';
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', updateActiveSection);
        updateActiveSection();

        return () => {
            window.removeEventListener('scroll', updateActiveSection);
        };
    }, []);

    const handleLocateUs = () => {
        const mapUrl = "https://www.google.com/maps/d/viewer?mid=1mu41tfgQQsUP20gnHoG9tpQmWUc-qBM&usp=sharing";
        window.open(mapUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <header className="site-header container">

            <img src={logo} className="logo" />

            <nav className="navigation">
                <a href="#story" className={activeSection === 'story' ? 'active' : ''}>Our Story</a>
                <a href="#menu" className={activeSection === 'menu' ? 'active' : ''}>Menu</a>
                <a href="#blends" className={activeSection === 'blends' ? 'active' : ''}>Blends</a>
                <a href="#delivery" className={activeSection === 'delivery' ? 'active' : ''}>Delivery</a>
                <a href="#contacts" className={activeSection === 'contacts' ? 'active' : ''}>Contacts</a>
            </nav>

            <button className="locate-btn" onClick={handleLocateUs}>Locate us</button>

        </header>
    );
}
export default Header;
