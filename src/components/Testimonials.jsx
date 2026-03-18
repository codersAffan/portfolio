import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonialsData from "../data/testimonials.json";
gsap.registerPlugin(ScrollTrigger);

function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: 15 }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const swiperWrapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 80%", once: true } }
      );
      gsap.fromTo(swiperWrapRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2,
          scrollTrigger: { trigger: swiperWrapRef.current, start: "top 82%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="section" style={{ background: "#f5f3ff" }}>
      <style>{`
        .test-card {
          background: white;
          border: 1px solid #e5e0fa;
          border-radius: 20px;
          padding: 32px 28px;
          height: 100%;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s, border-color 0.3s;
        }
        .test-card:hover {
          border-color: #c4b5fd;
          box-shadow: 0 12px 36px rgba(124,58,237,0.12);
        }
        .test-card::before {
          content: '"';
          position: absolute;
          top: -16px; right: 20px;
          font-size: 120px;
          color: rgba(124,58,237,0.06);
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          line-height: 1;
          pointer-events: none;
        }
        .swiper-slide { height: auto; }
        .swiper { padding-bottom: 48px !important; }
        .swiper-pagination { bottom: 0 !important; }
        .swiper-pagination-bullet {
          background: #c4b5fd !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.3s !important;
        }
        .swiper-pagination-bullet-active {
          background: #7c3aed !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
        .avatar-circle {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 800;
          flex-shrink: 0;
        }
      `}</style>

      <div className="container">
        {/* Header */}
        <div ref={headerRef} style={{ opacity: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
          <div>
            <span className="label">Social Proof</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              What Clients<br /><span>Say About Me</span>
            </h2>
          </div>

          {/* Overall rating badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: 14,
            background: "white", border: "1px solid #e5e0fa",
            borderRadius: 14, padding: "16px 22px",
            boxShadow: "0 4px 16px rgba(124,58,237,0.08)",
          }}>
            <div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 36, fontWeight: 800, color: "#18103a", lineHeight: 1 }}>5.0</div>
              <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
                {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#f59e0b", fontSize: 14 }}>★</span>)}
              </div>
            </div>
            <div style={{ borderLeft: "1px solid #e5e0fa", paddingLeft: 14 }}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#7c6fa0" }}>Average Rating</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#7c6fa0", marginTop: 2 }}>{testimonialsData.length} Reviews</div>
            </div>
          </div>
        </div>

        {/* Swiper */}
        <div ref={swiperWrapRef} style={{ opacity: 0 }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={22}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonialsData.map((t, i) => (
              <SwiperSlide key={t.id}>
                <div className="test-card">
                  <Stars count={t.rating} />

                  {/* Quote */}
                  <p style={{
                    fontSize: 14, color: "#3d2e6b", lineHeight: 1.8,
                    marginBottom: 24, fontStyle: "italic",
                    fontFamily: "'DM Sans',sans-serif",
                  }}>
                    "{t.text}"
                  </p>

                  {/* Project tag */}
                  <div style={{ marginBottom: 20 }}>
                    <span style={{
                      fontSize: 11, background: "#f3f0ff", border: "1px solid #e5e0fa",
                      color: "#7c3aed", padding: "3px 10px", borderRadius: 5,
                      fontFamily: "'DM Sans',sans-serif", fontWeight: 600,
                    }}>
                      {t.project}
                    </span>
                  </div>

                  {/* Author */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 12,
                    paddingTop: 18, borderTop: "1px solid #f3f0ff",
                  }}>
                    <div className="avatar-circle" style={{
                      background: `hsl(${(i * 67) % 360}, 60%, 92%)`,
                      color: `hsl(${(i * 67) % 360}, 60%, 35%)`,
                      border: `1px solid hsl(${(i * 67) % 360}, 40%, 82%)`,
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 700, color: "#18103a" }}>{t.name}</p>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#7c6fa0", marginTop: 1 }}>
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
