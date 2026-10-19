# Nizar & Rinsha Febin — Wedding Memories

A luxury, cinematic, editorial wedding memories website built with **React**, **Vite**, **Tailwind CSS**, and **GSAP**.

- **Groom**: Nizar
- **Bride**: Rinsha Febin
- **Wedding Date**: 18 October 2026 (Sunday)
- **Venue / Location**: Kozhikode, Kerala

---

## Technical Stack & Features

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom luxury wedding color palette:
  - Royal Blue (`#183653`)
  - Dusty Rose (`#D99AA9`)
  - Ivory / Linen (`#F6F0E8`)
  - Champagne Gold (`#B69B73`)
  - Botanical Green (`#26392E`)
- **Typography**: Google Fonts (*Cormorant Garamond* serif headings + *Montserrat* body)
- **Animations**: [GSAP](https://greensock.com/gsap/) cinematic hero reveal timeline and smooth interactions
- **Icons**: [Lucide React](https://lucide.dev/)
- **Lightbox**: Custom accessible full-screen modal with keyboard navigation (ArrowLeft, ArrowRight, Escape), swipe gestures for mobile (optimized for family members opening via WhatsApp), and image loading placeholders
- **Google Drive Integration**: Cloud folder link integration for complete high-resolution photo collection downloads

---

## Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Set your Google Drive folder link in `.env`:
```env
VITE_GOOGLE_DRIVE_FOLDER_URL="https://drive.google.com/drive/folders/your-folder-id?usp=sharing"
```
*Note: If this variable is left empty, the website gracefully displays a "Full album coming soon" notice without broken or fake links.*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
npm run preview
```

---

## Project Structure

```text
├── public/
│   ├── favicon.svg          # Wedding monogram SVG favicon
│   ├── og-image.jpg         # High-resolution social share preview (WhatsApp/Facebook)
│   └── images/              # All 12 untouched master photographs (photo-01 to photo-12)
├── src/
│   ├── assets/              # Static assets
│   ├── components/
│   │   ├── Navbar.jsx           # Monogram header with glassmorphism backdrop & mobile drawer
│   │   ├── Hero.jsx             # Cinematic full-viewport reveal with GSAP timeline
│   │   ├── Welcome.jsx          # "Together, We Made Memories" editorial story section
│   │   ├── FeaturedGallery.jsx  # Responsive masonry gallery with filter chips
│   │   ├── GalleryLightbox.jsx  # Full-screen touch-swipe enabled image modal
│   │   ├── FamilyFriends.jsx    # "The People Who Made It Special" loved ones section
│   │   ├── DownloadMemories.jsx # "Take the Memories Home" Google Drive download CTA
│   │   └── Footer.jsx           # Romantic monogram footer & back-to-top trigger
│   ├── data/
│   │   └── gallery.js       # Complete photo catalogue metadata and wedding info
│   ├── styles/
│   │   └── globals.css      # Tailwind base and custom luxury styling rules
│   ├── App.jsx              # Main application shell
│   └── main.jsx             # React entry point
├── .env.example             # Environment template
├── tailwind.config.js       # Luxury theme palette & typography configuration
├── vite.config.js           # Vite build configuration
└── vercel.json              # Vercel deployment & security headers configuration
```

---

## Deployment to GitHub & Vercel

### Deploying to GitHub
1. Initialize git and commit the project:
   ```bash
   git init -b main
   git add .
   git commit -m "Build luxury cinematic wedding website for Nizar & Rinsha Febin"
   ```
2. Create a GitHub repository named `nizar-rinsha-wedding` and push:
   ```bash
   git remote add origin https://github.com/<your-username>/nizar-rinsha-wedding.git
   git push -u origin main
   ```

### Deploying to Vercel
1. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
2. Import the `nizar-rinsha-wedding` repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Add Environment Variable:
   - Key: `VITE_GOOGLE_DRIVE_FOLDER_URL`
   - Value: *(your public Google Drive folder link)*
7. Click **Deploy**.
