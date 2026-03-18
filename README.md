# Affan Portfolio — React JS

A minimal, animated, purple-themed personal portfolio website built in React + Vite.

## ✨ Features

- **MA Loading Animation** — Techy letter assembly with glitch, scanline, and glow effects
- **First Visit Modal** — Captures visitor name & business, saves as JSON to localStorage
- **Personalized Hero** — Greets returning visitors by name
- **All Sections** — Home, About, Experience, Portfolio, Services, Achievements, CTA, Contact
- **Portfolio Filter** — Tabs to filter by category (Frontend, UI/UX, Graphic Design, Branding)
- **Project Modal** — Click any project card for details
- **Responsive** — Mobile-first design throughout
- **Purple Minimal** — Dark background, purple accents, Syne + DM Sans typography

## 🚀 Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 🛠 Stack

- React 18 + Vite
- CSS-in-JS (inline styles + style tags)
- Google Fonts: Syne (display) + DM Sans (body)
- localStorage for visitor data persistence

## 📁 Structure

```
src/
  App.jsx                  # Root — manages loading, modal, visitor state
  index.css                # Global CSS variables + utility classes
  components/
    LoadingScreen.jsx      # MA animation (glitch, scanline, progress bar)
    FirstVisitModal.jsx    # 3-step name/business capture → JSON
    Navbar.jsx             # Fixed nav with scroll detection + mobile menu
    Hero.jsx               # Full-height hero with rotating roles + stats
    About.jsx              # Skills grid + "what I bring" card
    Experience.jsx         # Timeline layout
    Portfolio.jsx          # Filterable grid + project detail modal
    Services.jsx           # 4-card services + 5-step process strip
    Achievements.jsx       # Achievement cards + milestone timeline
    CTA.jsx                # Animated CTA banner
    Contact.jsx            # Contact info + form with success state
    Footer.jsx             # Simple branded footer
```

## 🎨 Customization

1. Update your real email/LinkedIn/GitHub in `Contact.jsx` and `Footer.jsx`
2. Replace project placeholders in `Portfolio.jsx` with your real work
3. Update the `experiences` array in `Experience.jsx`
4. Add your real profile photo by adding an `<img>` in `About.jsx`

## 📦 Build for Production

```bash
npm run build
npm run preview
```
