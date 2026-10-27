import { useState, useEffect } from "react";
import "./Header.css";
import logoLight from "../../assets/logo.svg";
import logoDark from "../../assets/logo-dark.svg";
import { useTheme } from "../../hooks/useTheme";

const MAP_URL = "https://www.google.com/maps/d/viewer?mid=1mu41tfgQQsUP20gnHoG9tpQmWUc-qBM&usp=sharing";

function Header() {
    const { theme, toggleTheme } = useTheme();

    // id of the section we are currently looking at
    const [activeSection, setActiveSection] = useState('story');

    useEffect(() => {
        function handleScroll() {
            // invisible line: middle of screen
            const triggerLine = window.scrollY + window.innerHeight * 0.5;
            const sections = document.querySelectorAll("section[id]");

            // find current section
            let currentSection = 'story';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionId = section.getAttribute('id');

                // If the section's top has reached or passed our trigger line
                if (sectionTop <= triggerLine) {
                    currentSection = sectionId;
                }
            });

            // 2. Safety net: If user scrolled to the absolute bottom, force 'contacts'
            const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 20;
            if (isAtBottom) {
                currentSection = 'contacts';
            }

            setActiveSection(currentSection);
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once at load

        // cleanup: switch the listener off when the header disappears
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="site-header">
            <img
                src={theme === "dark" ? logoDark : logoLight}
                className="logo"
                alt="Blendwagen logo"
            />

            <nav className="navigation">
                <a href="#story" className={activeSection === 'story' ? 'active' : ''}>Our Story</a>
                <a href="#menu" className={activeSection === 'menu' ? 'active' : ''}>Menu</a>
                <a href="#blends" className={activeSection === 'blends' ? 'active' : ''}>Blends</a>
                <a href="#delivery" className={activeSection === 'delivery' ? 'active' : ''}>Delivery</a>
                <a href="#contacts" className={activeSection === 'contacts' ? 'active' : ''}>Contacts</a>
            </nav>

            <div className="header-actions">
                <button
                    type="button"
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-pressed={theme === "dark"}
                    aria-label="Dark mode"
                >
                    {theme === "dark" ? "☀" : "☾"}
                </button>

                <a
                    className="locate-btn"
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Locate us
                </a>
            </div>
        </header>
    );
}
export default Header;