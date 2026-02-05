# Cybersecurity Portfolio

A cyber-themed single-page portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. Designed for cybersecurity students and ethical hackers.

## 🚀 Features

- **Single-page design** - All content on one scrollable page
- **Cyber aesthetic** - Black background, neon green accents, terminal-inspired
- **Fully animated** - Smooth Framer Motion animations throughout
- **Static export** - Compatible with Cloudflare Pages
- **Responsive** - Mobile-friendly design
- **Accessible** - Built with accessibility in mind
- **Type-safe** - Full TypeScript support
- **CSP compatible** - Works with strict Content Security Policies

## 📁 Project Structure

```
my-portfolio/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Hero.tsx          # Landing section with animated intro
│       │   ├── About.tsx         # About me section
│       │   ├── Skills.tsx        # Skills with animated cards
│       │   ├── Projects.tsx      # Project showcase
│       │   ├── ProjectDetails.tsx # Expandable project details
│       │   ├── Quotes.tsx        # Rotating security quotes
│       │   ├── Hosting.tsx       # Cloudflare Pages info
│       │   └── Contact.tsx       # Contact links
│       ├── page.tsx              # Main page
│       ├── layout.tsx            # Root layout
│       └── globals.css           # Global styles
├── public/
│   └── projects/                 # Project images
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Cloudflare Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### 1. Update Personal Information

- **Hero section:** Edit `src/app/components/Hero.tsx` (lines 82-83)
- **About section:** Edit `src/app/components/About.tsx`
- **Contact info:** Edit `src/app/components/Contact.tsx` (lines 6-31)
- **Metadata:** Edit `src/app/layout.tsx` (lines 4-27)

### 2. Add Your Projects

Edit `src/app/components/Projects.tsx` (lines 20-61) to add your projects:

```typescript
const projects: Project[] = [
  {
    id: 'your-project-id',
    title: 'Your Project Title',
    tagline: 'Brief description',
    description: 'Full project description...',
    learned: ['Skill 1', 'Skill 2'],
    tools: ['Tool 1', 'Tool 2'],
    security: ['Security consideration 1'],
    images: ['/projects/your-image.png']
  }
];
```

### 3. Add Project Images

Place your project images in the `public/projects/` directory. Reference them as `/projects/filename.png` in your project data.

### 4. Update Skills

Edit `src/app/components/Skills.tsx` (lines 6-40) to modify your skills.

## 🚀 Deployment to Cloudflare Pages

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Connect to Cloudflare Pages:
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set output directory: `out`
   - Deploy!

## 🔒 Security Considerations

- Static export (no server-side code)
- CSP-compatible (no inline scripts)
- HTTPS enforced via Cloudflare
- No external dependencies at runtime
- Images optimized for performance

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Credits

Built with passion for cybersecurity and clean code. Hosted on Cloudflare Pages.


> ### [Cloudflare Pages](https://pages.cloudflare.com/)
> [![Deployment Status](https://img.shields.io/badge/Cloudflare_Pages-Active-orange?style=flat-square&logo=cloudflare)](https://pages.cloudflare.com/)
> Cloudflare Pages is a JAMstack platform for frontend developers to collaborate and deploy websites.
