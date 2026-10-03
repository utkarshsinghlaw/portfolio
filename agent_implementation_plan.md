# Agent Implementation Plan: Premium UI Portfolio Upgrade

## 0. Prerequisite Setup
- [ ] **Dependencies:** Install `framer-motion`, `clsx`, `tailwind-merge`, and `@tabler/icons-react`.
- [ ] **Component Sourcing:** Strictly use pre-built components from Aceternity UI and MagicUI to ensure high polish and stability.
- [ ] **Utility Function:** Ensure `lib/utils.ts` contains the standard `cn` utility function.
- [ ] **Tailwind Config:** Update `tailwind.config.ts` to include animations and keyframes required for the pre-built components.

## 1. Landing Page (The Hook)
- [ ] **Target:** `src/app/page.tsx`
- [ ] **Components to Inject:** `RetroGrid` (Background), `BlurFade` (Hero Text), `BentoGrid` (Navigation Cards), `ShimmerButton` (CTA).
- [ ] **Tasks:**
  - Wrap the main hero section in a relative container with `RetroGrid` at the absolute bottom z-index.
  - Apply `BlurFade` with staggered delays to the header.
  - Refactor the existing pillar links into the `BentoGrid` component. Add hover states to trigger border glows.
  - Replace the standard "Let's Talk" button with `ShimmerButton` linking to FormSubmit.

## 2. Pillar 1: AI Engineering Automation
- [ ] **Target:** `src/app/portfolio/ai-engineering-automation/page.tsx`
- [ ] **Components to Inject:** `TracingBeam`, `3DPin`, `Terminal` (Mock).
- [ ] **Tasks:**
  - Wrap the primary page content inside the `<TracingBeam>` provider.
  - Implement a split-pane layout: Left side `Terminal` typing out the agent workflow, Right side `3DPin` component containing the architectural diagram/screenshot.

## 3. Pillar 2: Personal Software (Context Forge)
- [ ] **Target:** `src/app/portfolio/personal-software/page.tsx`
- [ ] **Components to Inject:** `MacbookScroll`, `AnimatePresence` (Framer Motion), `Meteors`.
- [ ] **Tasks:**
  - Mount the `MacbookScroll` component in the center of the viewport.
  - Create an array of 4 states (MBA, Lawyer, Designer, Dev). Bind a scroll listener to trigger state changes.
  - Inside the Macbook screen, use `AnimatePresence` to cross-fade between UI mockups.
  - Mount `<Meteors number={20} />` behind the Macbook specifically when the "Independent Developer" state is active.

## 4. Pillar 3: Thought Leadership
- [ ] **Target:** `src/app/portfolio/thought-leadership/page.tsx`
- [ ] **Components to Inject:** `Accordion` (Pre-built), `FloatingDock` (Taili Zhuang replica).
- [ ] **Tasks:**
  - Implement the stark Light Mode theme (`#F5F5F5` background, `#111111` text, `1px solid black` borders).
  - Build an Accordion list for the essays. **UX Rule:** Allow multiple accordions to remain open simultaneously (e.g., `type="multiple"`).
  - Implement a `FloatingDock` floating navigation bar exactly like Taili Zhuang's website, utilizing Roman Numerals (I, II, III) that anchor to specific sections of the page.

## 5. Pillar 4: BI Case Studies (UK Drought Dashboard)
- [ ] **Target:** `src/app/portfolio/bi-case-studies/page.tsx`
- [ ] **Components to Inject:** `SafariMockup`, `NumberTicker`, `CompareSlider`.
- [ ] **Tasks:**
  - Place a **static high-fidelity placeholder image** inside the `SafariMockup` component. (This will be swapped with the live Power BI iframe upon completion of the UK Water Dashboard task).
  - Above the mockup, create a 3-column KPI grid using `NumberTicker` for metrics.
  - Below the dashboard, implement a `CompareSlider` showing raw messy CSV data vs cleaned PBIP tabular schema.
