# Affan Portfolio — React + GSAP + Swiper

A fully rebuilt **light-theme**, story-driven personal portfolio with GSAP animations, Swiper testimonials carousel, and structured JSON data files.

## Stack
- **React 18** + Create React App
- **GSAP 3** (ScrollTrigger, MotionPath) — all animations
- **Swiper 11** — testimonials carousel
- **Google Fonts** — Syne (display) + DM Sans (body)

## Quick Start
```bash
npm install
npm start
# Opens at http://localhost:3000
```

## Structure
```
src/
  App.jsx
  index.css                    ← Light theme tokens + global styles
  data/                        ← ALL content as JSON
    webProjects.json
    uxProjects.json
    graphicProjects.json
    testimonials.json
    achievements.json
    experience.json
  components/
    LoadingScreen.jsx           ← MA letter drop + GSAP glitch + progress
    FirstVisitModal.jsx         ← 3-step name/company capture → localStorage
    Navbar.jsx                  ← Scroll-aware + mobile drawer
    Hero.jsx                    ← GSAP stagger + rotating roles
    About.jsx                   ← Skill icon grid + "Problems I solve"
    Experience.jsx              ← SVG pathway animation + alternating cards
    Portfolio.jsx               ← Web (live+source) | UX case study modal | Graphic stats
    Services.jsx                ← Animated process steps + connecting line
    Achievements.jsx            ← Counter animation + Certificates + Events tabs
    Testimonials.jsx            ← Swiper autoplay carousel
    CTA.jsx                     ← Floating word tags + shimmer headline + spinning ring
    Contact.jsx                 ← 2-col grid, labeled inputs, success state
    Footer.jsx

public/
  index.html
  images/
    web/                        ← Add your project screenshots here
    ux/                         ← Add your case study covers here
    graphic/                    ← Add your design work here
    testimonials/               ← Add client avatars here
```

## Customising Content
All content lives in `src/data/*.json` — edit those files, no component changes needed.

### Adding real images
Drop images into `public/images/[category]/` matching the `"image"` paths in the JSON files.  
If an image is missing, cards show a clean purple gradient placeholder automatically.

### Update your real links
- `Contact.jsx` — email, LinkedIn, GitHub, Behance hrefs  
- `Footer.jsx` — social links  
- `data/webProjects.json` — liveUrl, sourceUrl  
- `data/uxProjects.json` — figmaUrl  

## Build for production
```bash
npm run build
```
