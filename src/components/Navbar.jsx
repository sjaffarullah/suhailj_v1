import logo from "../assets/madebysuhailLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiHome, FiLayers, FiCode, FiMail, FiTool } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true); // State for showing/hiding the navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide navbar on scroll down
        setShowNavbar(false);
      } else {
        // Show navbar on scroll up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const sections = [
          "home",
          "about",
          "experience",
          "projects",
          "certs"
          "techstack",
        ];
        let current = "home";

        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            const scrollPos = window.scrollY + window.innerHeight / 2;

            if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
              current = section;
            }
          }
        });

        setActiveSection(current);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location]);

  const handleScroll = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(id);
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Top Navbar for Desktop */}
      <nav
        className={`fixed top-0 left-20 right-20 bg-opacity-85 bg-neutral-900 rounded-full backdrop-blur-md z-50 py-4 px-8 lg:px-20 shadow-md flex justify-between items-center transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo for Mobile */}
        <div className="lg:hidden flex justify-center w-full">
          <button
            onClick={() => handleScroll("home")}
            aria-label="Scroll to Home"
            className="cursor-pointer"
          >
            <img
              className="w-10 h-auto"
              src={logo}
              alt="Suhail Jaffarullah Logo"
            />
          </button>
        </div>

        {/* Logo and Links for Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => handleScroll("home")}
            aria-label="Scroll to Home"
            className="flex items-center cursor-pointer"
          >
            <img
              className="w-10 lg:w-10"
              src={logo}
              alt="Suhail Jaffarullah Logo"
            />
          </button>
        </div>

        {/* Navbar Links */}
        <div className="hidden lg:flex items-center gap-8 text-gray-400 text-base">
          <button
            className={`hover:text-white transition duration-300 ${
              activeSection === "home" ? "text-white" : ""
            }`}
            onClick={() => handleScroll("home")}
            aria-label="Scroll to Home"
          >
            Home
          </button>
          <button
            className={`hover:text-white transition duration-300 ${
              activeSection === "experience" ? "text-white" : ""
            }`}
            onClick={() => handleScroll("experience")}
            aria-label="Scroll to Experience"
          >
            Experience
          </button>
          <button
            className={`hover:text-white transition duration-300 ${
              activeSection === "projects" ? "text-white" : ""
            }`}
            onClick={() => handleScroll("projects")}
            aria-label="Scroll to Projects"
          >
            Projects
          </button>
          <button
            className={`hover:text-white transition duration-300 ${
              activeSection === "certs" ? "text-white" : ""
            }`}
            onClick={() => handleScroll("certs")}
            aria-label="Scroll to Certs"
          >
            Certs
          </button>
          <button
            className={`hover:text-white transition duration-300 ${
              activeSection === "techstack" ? "text-white" : ""
            }`}
            onClick={() => handleScroll("techstack")}
            aria-label="Scroll to Tech Stack"
          >
            Tech Stack
          </button>
          <a
            href="https://drive.google.com/file/d/1ROq_rRMRKoWEByms4JukUvm3Fud_mUtL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
            aria-label="Open Résumé"
          >
            Résumé
          </a>
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/suhailjaffarullah/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sjaffarullah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
        </div>
      </nav>

      {/* Bottom Navbar for Mobile */}
      <div className="fixed bottom-2 left-2 right-2 rounded-full bg-neutral-900 z-50 flex lg:hidden justify-around py-3 shadow-md">
        <button
          onClick={() => handleScroll("home")}
          aria-label="Scroll to Home"
          className="text-gray-400 hover:text-white"
        >
          <FiHome
            size={24}
            className={`${activeSection === "home" ? "text-white" : ""}`}
          />
        </button>
        <button
          onClick={() => handleScroll("experience")}
          aria-label="Scroll to Experience"
          className="text-gray-400 hover:text-white"
        >
          <FiLayers
            size={24}
            className={`${
              activeSection === "experience" ? "text-white" : ""
            }`}
          />
        </button>
        <button
          onClick={() => handleScroll("projects")}
          aria-label="Scroll to Projects"
          className="text-gray-400 hover:text-white"
        >
          <FiCode
            size={24}
            className={`${activeSection === "projects" ? "text-white" : ""}`}
          />
        </button>
        <button
          onClick={() => handleScroll("techstack")}
          aria-label="Scroll to Tech Stack"
          className="text-gray-400 hover:text-white"
        >
          <FiTool
            size={24}
            className={`${activeSection === "techstack" ? "text-white" : ""}`}
          />
        </button>
        <button
          onClick={() => handleScroll("certifications")}
          aria-label="Scroll to certifications"
          className="text-gray-400 hover:text-white"
        >
          <FiMail
            size={24}
            className={`${activeSection === "certifications" ? "text-white" : ""}`}
          />
        </button>
      </div>
    </>
  );
};

export default Navbar;
