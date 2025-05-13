import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Certs from "./components/Certifications.jsx";
import TechStack from "./components/Techstack.jsx";
import Footer from "./components/Footer.jsx";
import AboutPage from "./components/Aboutpage.jsx"; 

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-100 antialiased selection:bg-blue-700 selection:text-white">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className="blur-overlay" id="blurOverlay"></div>
          </div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Experience />
                  <Projects />
                  <Certs />
                  <TechStack />
                  <Footer />
                </>
              }
            />
            {/* About Me Page */}
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
