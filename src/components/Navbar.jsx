import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Aflogo from "../assets/images/Aflogo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // 🔥 మోడల్ ఓపెన్/క్లోజ్ చేయడానికి మన ఓన్ స్టేట్
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "TRAINING", path: "/training" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="navbar-logo">
          <img src={Aflogo} alt="AF Agency" />
        </Link>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {links.map((link, i) => (
            <li key={link.path} style={{ animationDelay: `${i * 0.07}s` }}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? "active-link" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 🔥 బటన్ క్లిక్ చేయగానే మన కస్టమ్ మోడల్ ఓపెన్ అవుతుంది */}
        <button 
          className="navbar-cta"  
          onClick={() => setIsModalOpen(true)}
          style={{ 
            cursor: 'pointer', 
            position: 'relative', 
            zIndex: 99999 
          }}
        >
          Book Free Strategy Call
        </button>
         
        <div
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* ==========================================================================
         🔥 CUSTOM CAL.COM IFRAME MODAL (ఎర్రర్స్ రాని సేఫ్ మెథడ్)
         ========================================================================== */}
      {isModalOpen && (
        <div className="cal-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="cal-modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button className="cal-modal-close" onClick={() => setIsModalOpen(false)}>
              ✕
            </button>
            
            {/* 🔥 నీ Cal.com లింక్ ని ఇక్కడ iframe లో ఇస్తున్నాం (చివర్లో ?theme=dark పెట్టాం) */}
            <iframe
              src="https://cal.com/afadagency-team-kawggs/15min"
              title="Cal.com Booking"
              frameBorder="0"
              width="100%"
              height="100%"
              allowFullScreen
            ></iframe>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;