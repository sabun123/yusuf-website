# Yusuf's Portfolio website! 🌐

[![AWS Certified](docs/badges/aws.svg)](https://aws.amazon.com/certification/)
[![Azure](docs/badges/azure.svg)](https://azure.microsoft.com/)
[![NVIDIA Certified](docs/badges/nvidia.svg)](https://www.credly.com/badges/df5cced7-d9dd-475e-8809-fd98727263d8)

Hey there 👋
This is the repo that holds Yusuf Ismail bin Shukor's personal portfolio website code.

## Local development 🛠️

1. `npm install`
2. `npm run dev` → http://localhost:5173 (hot reload)
3. `npm run build` → production build in `dist/`
4. `npm run preview` → serve the production build locally

## Editing content ✍️

Everything you can see on the site (bio, experience, projects, certs, socials)
lives in one file: `src/data/profile.js`. Edit it there and the whole site
updates — no need to dig through components.

- Image assets live in `src/assets/` (projects, certs, profile photo)
- `src/data/images.js` maps the image keys to the actual files
- Tech logos in the "stack" chips are automatic — known labels (Azure,
  LangChain, MySQL, PostgreSQL, React Native…) get their official brand mark
  via `src/components/TechIcon.jsx`. Add a label there to get a logo.

## How to deploy to Github Pages 🚀

Deployment is fully automated via GitHub Actions
(`.github/workflows/deploy.yml`):

- Open a **PR** → the workflow runs a build check on it (no deploy)
- **Merge to `main`** → the workflow builds and deploys to GitHub Pages.
  Done!

The site lives at `https://yusuf-ismail-shukor.com` (custom domain, wired up
via `public/CNAME`) and takes a minute or two to go live.

**One-time setup**: repo Settings → Pages → "Build and deployment" →
Source: switch to **GitHub Actions** (was "Deploy from a branch"). Until
this is switched, the workflow's deploy step will fail — the rest works
regardless.

> Manual fallback (if you ever need it): merge to `main`, then run
> `npm run predeploy` and `npm run deploy` locally (requires your SSH key
> set up; the old `gh-pages` branch is now unused).

## Website update in September 2026 🔥

Full ground-up redesign of the site. Highlights:

1. New dark neon-glass design — built with Tailwind CSS v4 only (daisyUI is
   retired, the design is fully custom).
2. `motion` (Framer Motion's successor) for all the interactivity: animated
   aurora + particle background, cursor glow, 3D tilt cards, magnetic
   buttons, scroll-triggered reveals. Respects `prefers-reduced-motion`.
3. Full-screen image lightbox with zoom / pan / pinch for project and
   certificate images.
4. 2025–2026 experience added (AFED Digital, FatHopes Energy) and all past
   projects now carry dates — including the Homage mobile apps.
5. Latest cert up top: NVIDIA-Certified Associate: Generative AI LLMs
   (with link to the Credly badge).
6. Dependencies refreshed: Vite 8, React 19.2, Tailwind 4.3, motion 13.
   Heavy images optimized (degree cert 2MB → 82kB).
7. Favicon/manifest 404s fixed by moving them to `public/`.

## Website update in May 2025 🔥

I made some changes to my portfolio site this year. I moved to React with Vite. Introduced tailwind for CSS and Daisy UI for theming. Below is a non-comprehensive list of changes made:

1. Upgraded Vite and dependencies. (better safe than sorry)
2. Brought in tailwind and DaisyUI for a snazzy modern look. (dark mode is the future)
3. Gotta bring in the latest work produced in the past few years. (Portfolio's need to be up-to-date)
