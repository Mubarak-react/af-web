// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // పేజీ మారిన ప్రతిసారీ స్క్రీన్ టాప్ కి వెళ్తుంది
    window.scrollTo(0, 0);
    
    // GSAP ScrollTrigger కి సంబంధించిన పాత ట్రిగ్గర్ పొజిషన్స్ ని రీసెట్ చేస్తుంది
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}