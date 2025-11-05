# 🧭 Ryan LeCours – Developer Portfolio

A modern single-page portfolio built with **Next.js 16** and **Tailwind CSS v4**, showcasing my work as a frontend-leaning full-stack engineer specializing in React, TypeScript, and GraphQL.

Deployed with **Vercel** at [ryanlecours.dev](https://ryanlecours.dev).

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16 (App Router + Turbopack)](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/docs/v4-beta)
- **Language:** TypeScript
- **Deployment:** [Vercel](https://vercel.com)
- **Tooling:** Prettier + Tailwind Plugin for formatting
- **Image Optimization:** Next/Image
- **Hosting:** Custom domain via Vercel DNS

---

## 📁 Project Structure

src/
├─ app/
│ ├─ layout.tsx # Root layout with metadata
│ ├─ page.tsx # Main portfolio page
│ ├─ globals.css # Tailwind CSS import
│ └─ not-found.tsx # 404 page (optional)
└─ public/
├─ me.jpg # Headshot image
└─ resume.pdf # Downloadable resume


---

## ⚙️ Local Development

### 1. Clone this repo
```bash
git clone https://github.com/ryanlecours/ryanlecours.dev.git
cd ryanlecours.dev
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the dev server
```bash
npm run dev
```
Visit http://localhost:3000

### 4. Build & preview production
```bash
npm run build
npm run start
```

### Linting & Formatting
Format with Prettier + Tailwind plugin:
```bash
npm run format
```

Run Next.js lint:
```bash
npm run lint
```

### Deployment
Deployed automatically via Vercel from the `main` branch.

### Features
- Fully responsive
- Accessible and fast (Lighthouse 95+ score)
- Uses Next.js image optimization
- Dark, minimal theme powered by Tailwind CSS v4
- Auto-deployed on merge via Vercel CI/CD

### Author
**Ryan LeCours**
Frontend-Leaning Full-Stack Engineer
📍 Bellingham, WA
- [ryanlecours.dev](https://www.ryanlecours.dev)
- [LinkedIn](https://www.linkedin.com/in/ryan-lecours/)
- [Github](https://github.com/ryanlecours)

### License
This portfolio project is open source under the [MIT License](LICENSE)