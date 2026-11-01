# personalroom · Curated Luxury Villas & Serviced Bungalows

> **Recreation & Rebranding of 29bungalow (https://29bungalow.com/)**  
> **Brand Name:** personalroom  
> **Tagline:** Detox Your Lifestyle · Private Holiday Sanctuaries  
> **GitHub Username:** Aman22kr  
> **Hosting & Deployment:** GitHub Pages via GitHub Actions  

---

## 1. Overview & Purpose
`personalroom` is a responsive, multi-page web application inspired by the luxury vacation villa and serviced bungalow network **29Bungalow**. Designed around the concept of *"Detox Your Lifestyle"*, it offers city dwellers and groups an escape to curated, verified holiday homes with 100% private swimming pools, on-site caretakers, and homestyle regional dining across premier leisure destinations (Lonavala, Alibaug, Karjat, Goa, Mahabaleshwar, Igatpuri, and Udaipur).

---

## 2. Reference Website & Brand Transformation
- **Reference Site:** [29Bungalow](https://29bungalow.com/) — Indian holiday villa and boutique bungalow rental platform.
- **New Brand Identity:** `personalroom`
- **Design Ethos:** Warm architectural luxury with obsidian, terracotta amber gold (`#d97706`), warm alabaster backgrounds, and refined typography (`Playfair Display` serif paired with `Plus Jakarta Sans`).
- **Zero-Pill Discipline:** Clean, unboxed text metadata with subtle typographic separators (`·` and `/`) rather than cluttered badge pills.

---

## 3. Implemented Pages & Architecture

All pages are powered by **React Router (HashRouter)** ensuring reliable navigation and page refreshes on GitHub Pages:

1. **Homepage (`#/`)**:
   - Hero destination, date, and guest search tool.
   - Quick destination filters (Lonavala, Alibaug, Karjat, Goa, Mahabaleshwar).
   - Handpicked spotlight collections (Private Pool Villas, Weekend Escapes).
   - "The personalroom Difference" feature pillars.
   - 16:9 HD Video Walkthrough tour placeholder (reproducing video layouts without external embeds).
   - Travel times showcase from Mumbai and Pune.
   - Verified guest testimonials and FAQs accordion.
   - Compact advertisement placeholder slot.

2. **Explore & Search Villas (`#/villas`)**:
   - Multi-criteria real-time filtering: destination, BHK (3 BHK, 4 BHK, 5+ BHK), minimum guest capacity, private pool availability, pet-friendliness, and max price slider (up to ₹45,000/night).
   - Live search input matching titles, locations, and amenities.
   - Sorting by featured, price (low-to-high, high-to-low), ratings, and reviews.
   - Toggle between **Grid View** and **List View**.
   - Empty state with 1-click filter reset.

3. **Dynamic Villa Detail Page (`#/villas/:id`)**:
   - High-resolution gallery with full-screen lightbox modal.
   - Key specifications bar (Bedrooms, Bathrooms, Max Guests, Private Pool).
   - Architectural space breakdown & full amenities checklist.
   - Dedicated caretaker & regional dining packages information.
   - Simulated distance and landmark travel routes from Mumbai & Pune.
   - House rules & timing guidelines.
   - Verified guest reviews with star breakdown.
   - Sticky real-time price & booking calculation card (calculating nights × rate + sanitization + GST).
   - Interactive reservation modal saving confirmed bookings to localStorage.
   - "Other Sanctuaries You May Love" related properties carousel.

4. **Destinations Directory (`#/destinations`) & Regional Guides (`#/destinations/:slug`)**:
   - Comprehensive regional guides for Lonavala, Alibaug, Karjat, Goa, Mahabaleshwar, Igatpuri, Khandala, and Udaipur.
   - Travel times, best seasons, top regional attractions, and filtered villa listings.

5. **List Your Property (`#/list-your-property`)**:
   - Dedicated partner portal for luxury homeowners.
   - Interactive monthly revenue potential calculator by BHK and destination.
   - Step-by-step homeowner onboarding form with real-time application reference generator (`OWN-xxxxx`) saved to client-side storage.

6. **About Us (`#/about`)**:
   - The story and founding philosophy of `personalroom`.
   - Core pillars: Total Seclusion, Soulful Culinary Care, Rigorous 60-Point Audit.
   - Key network metrics (85+ Villas, 150K+ Guests, 98.4% 5-Star Feedback).

7. **Concierge & Contact (`#/contact`)**:
   - Corporate office details in Mumbai (Wadala West) and Pune (Koregaon Park).
   - 24/7 guest hotline and reservations email.
   - Validated inquiry contact form saving messages to browser storage.

8. **Wishlist / Saved Collection (`#/wishlist`)**:
   - Displays all favorited villas with instant add/remove toggling.
   - Persistent across browser sessions via localStorage.

9. **My Reservations (`#/my-bookings`)**:
   - Complete record of booked stays with reference codes, guest details, and total amounts.
   - Print reservation voucher simulation and cancel stay controls.

10. **Legal & Policy Pages (`#/terms` & `#/privacy`)**:
    - Authentic villa conduct, check-in ID requirements, noise regulations, and swimming pool safety policies.

11. **Custom 404 Not Found (`*`)**:
    - Branded error handler directing users back to home or villa discovery.

12. **Reusable Compact Ad Placeholder (`CompactAdBanner`)**:
    - Unobtrusive, elegant partner spotlight slot above the footer on relevant pages with dismiss capability.

---

## 4. Project Structure

```
project-root/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated deployment workflow
├── src/
│   ├── components/
│   │   ├── CompactAdBanner.tsx       # Reusable advertisement placeholder
│   │   ├── Footer.tsx                # Global footer with links & newsletter
│   │   ├── Navbar.tsx                # Brand header, navigation & badges
│   │   ├── SearchHeroBox.tsx         # Hero search bar
│   │   ├── ToastContainer.tsx        # Floating notification system
│   │   ├── VideoTourPlaceholder.tsx  # 16:9 YouTube video layout placeholder
│   │   └── VillaCard.tsx             # Card component (grid & list views)
│   ├── context/
│   │   └── AppContext.tsx            # LocalStorage state management
│   ├── data/
│   │   ├── destinationsData.ts       # Destination guides & travel times
│   │   ├── faqData.ts                # Frequently asked questions
│   │   └── villasData.ts             # Rich catalog of verified villas
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── DestinationDetailPage.tsx
│   │   ├── DestinationsPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── ListYourPropertyPage.tsx
│   │   ├── MyBookingsPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── PrivacyPage.tsx
│   │   ├── TermsPage.tsx
│   │   ├── VillaDetailPage.tsx
│   │   ├── VillasPage.tsx
│   │   └── WishlistPage.tsx
│   ├── App.tsx                       # Root router & layout wrapper
│   ├── index.css                     # Tailwind styles & accessibility rules
│   └── main.tsx                      # Application entry point
├── .gitignore
├── index.html                        # Brand meta tags and Google fonts
├── metadata.json
├── package.json
├── package-lock.json                 # Verified npm lockfile
├── tsconfig.json
├── vite.config.ts                    # Vite config with base: './'
└── README.md
```

---

## 5. Prerequisites
- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher

---

## 6. Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aman22kr/personalroom.git
   cd personalroom
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   # or if modifying packages:
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or the port indicated in terminal) in your browser.

4. **Verify TypeScript compilation:**
   ```bash
   npm run lint
   ```

---

## 7. Production Build & Preview

1. **Generate the production build:**
   ```bash
   npm run build
   ```
   The static distribution files will be compiled into the `dist/` directory.

2. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 8. Browser LocalStorage Persistence
Client-side state is persisted via browser `localStorage` under stable, namespaced keys:
- `personalroom_wishlist_v1`: Bookmarked villa IDs.
- `personalroom_bookings_v1`: User reservations with calculation totals and reference numbers.
- `personalroom_owner_inquiries_v1`: Property onboarding submissions.
- `personalroom_contact_msgs_v1`: Contact inquiries.

*Note:* LocalStorage is local to the user's specific browser and device. It does not synchronize across distinct browsers. No real monetary transactions or server-side database records are created.

---

## 9. GitHub Actions & GitHub Pages Deployment

The application is configured to deploy automatically to **GitHub Pages** using GitHub Actions on every push to the `main` branch.

### Step-by-Step Setup:
1. Ensure your repository is created under GitHub username `Aman22kr` (e.g. `https://github.com/Aman22kr/personalroom`).
2. Navigate to your repository **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Deploy personalroom static multi-page website"
   git push origin main
   ```
5. GitHub Actions will execute `.github/workflows/deploy.yml`:
   - Checks out the repository.
   - Installs dependencies using `npm ci` via `package-lock.json`.
   - Runs `npm run build` with relative base path `./`.
   - Uploads the `dist/` directory and publishes the website to `https://Aman22kr.github.io/personalroom/`.

---

## 10. Troubleshooting Common Deployment Issues

1. **Blank page or 404 for assets on GitHub Pages:**
   - Verify `vite.config.ts` contains `base: './'`. This ensures relative asset resolution within subpath repository URLs.
2. **Page refresh gives 404:**
   - HashRouter (`#/route`) is utilized specifically so that any deep route (e.g., `#/villas`, `#/about`) resolves reliably on static GitHub Pages without requiring server-side URL rewrite rules.
3. **Lockfile mismatch during `npm ci`:**
   - Ensure you commit `package-lock.json` directly and avoid adding it to `.gitignore`.

---

## 11. Customization & Brand Adaptation
To adapt this application for another hospitality brand:
1. Update `metadata.json` and `index.html` with your brand name, description, and favicon.
2. Modify `/src/data/villasData.ts` to adjust property titles, locations, photos, and rates.
3. Update color tokens in `/src/index.css` (primary obsidian `#0f172a`, amber `#d97706`).

---

## 12. Mock Implementation Notice
- Real-time villa pricing, booking confirmation IDs, and property submission forms operate entirely within the client-side state layer for demonstration purposes.
- No real credit card charges or server-side reservations take place.
