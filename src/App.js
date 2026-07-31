import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";


import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import TrainingPage from "./Pages/TrainingPage";
import ContactUS from "./Pages/ContactUS";
import AboutUs from "./Pages/AboutUs"
import Cinimatography from './TrainingSubPages/Cinimatography';
import VideoEditing from './TrainingSubPages/VideoEditing'; 
import Photography from './TrainingSubPages/Photography';
import GimbalDrone from './TrainingSubPages/GimbalDrone'
import ScrollTop from './components/ScrollTop'

import MetaAd from "./TrainingSubPages/MetaAd";
import CommercialAds from "./TrainingSubPages/CommercialAds";
import DigitalMarketing from "./TrainingSubPages/DigitalMarketing";
// const Page = ({ title }) => (
//   <div style={{
//     minHeight: "100vh",
//     background: "#07070f",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "rgba(255,255,255,0.4)",
//     fontFamily: "Inter, sans-serif",
//     fontSize: "2rem",
//     fontWeight: 600,
//     letterSpacing: "0.05em",
//   }}>
//     {title}
//   </div>
// );

export default function App() {
  return (
    <BrowserRouter>
    <ScrollTop/>
      <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/TrainingPage" element={<TrainingPage />} />
        <Route path="/contact" element={<ContactUS/>}/>
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/Cinimatography" element={<Cinimatography/>} />
        <Route path="/VideoEditing" element={<VideoEditing/>} />
        <Route path="/Photography" element={<Photography/>} />
        <Route path="/GimbalDrone" element={<GimbalDrone/>} />
        <Route path="/MetaAd" element={<MetaAd/>} />
        <Route path="/CommercialAds" element={<CommercialAds/>} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing/>} />





        
      </Routes>
     
    </BrowserRouter>
  );
}



