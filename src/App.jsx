import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import FirstVisitModal from "./components/FirstVisitModal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [visitorData, setVisitorData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("visitorData");
    if (stored) setVisitorData(JSON.parse(stored));
    const timer = setTimeout(() => {
      setLoading(false);
      if (!stored) setTimeout(() => setShowModal(true), 400);
    }, 3400);
    return () => clearTimeout(timer);
  }, []);

  const handleVisitorSubmit = (data) => {
    const json = { ...data, visitedAt: new Date().toISOString() };
    localStorage.setItem("visitorData", JSON.stringify(json));
    setVisitorData(json);
    setShowModal(false);
  };

  if (loading) return <LoadingScreen />;

  return (
    <div>
      {showModal && <FirstVisitModal onSubmit={handleVisitorSubmit} />}
      <Navbar />
      <Hero visitorData={visitorData} />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Achievements />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
