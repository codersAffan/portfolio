import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingScreen   from "./components/LoadingScreen";
import FirstVisitModal from "./components/FirstVisitModal";
import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import About           from "./components/About";
import Experience      from "./components/Experience";
import Portfolio       from "./components/Portfolio";
import Services        from "./components/Services";
import Achievements    from "./components/Achievements";
import Testimonials    from "./components/Testimonials";
import CTA             from "./components/CTA";
import Contact         from "./components/Contact";
import Footer          from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading,     setLoading]     = useState(true);
  const [showModal,   setShowModal]   = useState(false);
  const [visitorData, setVisitorData] = useState(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("ma_visitor");
    if (stored) setVisitorData(JSON.parse(stored));
    const timer = setTimeout(() => {
      setLoading(false);
      if (!stored) setTimeout(() => setShowModal(true), 500);
    }, 3600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && mainRef.current) {
      gsap.fromTo(mainRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" });
    }
  }, [loading]);

  const handleVisitorSubmit = (data) => {
    const json = { ...data, visitedAt: new Date().toISOString() };
    localStorage.setItem("ma_visitor", JSON.stringify(json));
    setVisitorData(json);
    setShowModal(false);
  };

  if (loading) return <LoadingScreen />;

  return (
    <div ref={mainRef} style={{ opacity: 0 }}>
      {showModal && <FirstVisitModal onSubmit={handleVisitorSubmit} />}
      <Navbar />
      <Hero         visitorData={visitorData} />
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
