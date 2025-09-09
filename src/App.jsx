import './App.css'
import Navbar from './components/Navbar';
import HomePage from '../src/components/Homepage';
import ServicesPage from '../src/components/ShowcaseSection';
import ExpertisePage from '../src/components/Expertise';
import ScrollToTop from '../src/components/ScrollToTop';
import ContactPage from '../src/components/ContactUs';
import BathroomWaterproofing from './components/ServiceSub/bathroomWaterproofing';
import SwimmingpoolWaterproofing from './components/ServiceSub/SwimmingpoolWaterproofing';
import TerraceWaterproofing from './components/ServiceSub/TerraceWaterproofing';
import WallWaterproofing from './components/ServiceSub/WallWaterproofing';
import FoundationWaterproofing from './components/ServiceSub/FoundationWaterproofing';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/bathroomWaterproofing" element={<BathroomWaterproofing />} />
        <Route path="/SwimmingpoolWaterproofing" element={<SwimmingpoolWaterproofing />} />
        <Route path="/TerraceWaterproofing" element={<TerraceWaterproofing />} />
        <Route path="/WallWaterproofing" element={<WallWaterproofing />} />
        <Route path="/FoundationWaterproofing" element={<FoundationWaterproofing />} />
      </Routes>
    </Router>
  );
}

export default App;

// src/App.jsx
// import React from 'react';
// import ShowcaseSection from '../src/components/ShowcaseSection';


// function App() {
//   return (
//     <div className="min-h-screen bg-neutral-100 text-gray-900">
//       <header className="bg-neutral-900 text-white py-6 text-center text-2xl font-bold shadow-md">
//         Waterproofing Work Showcase
//       </header>

//       <main>
//         <ShowcaseSection />
//       </main>

//       <footer className="bg-neutral-900 text-white text-center py-4 mt-10">
//         © 2025 Waterproofing Experts
//       </footer>
//     </div>
    
//   );
// }

// export default App;
