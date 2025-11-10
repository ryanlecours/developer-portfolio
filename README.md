# 🧭 Ryan LeCours – Developer Portfolio

A modern single-page portfolio built with **Next.js 16** and **Tailwind CSS v4**, showcasing my work as a frontend-leaning full-stack engineer specializing in React, TypeScript, and GraphQL.

🌐 **Live site:** [ryanlecours.dev](https://ryanlecours.dev)  
🚀 **Deployed on:** [Vercel](https://vercel.com)

---

## 🚀 Tech Stack

| Category               | Tools                                                      |
| ---------------------- | ---------------------------------------------------------- |
| **Framework**          | [Next.js 16 (App Router + Turbopack)](https://nextjs.org/) |
| **Styling**            | [Tailwind CSS v4](https://tailwindcss.com/docs/v4-beta)    |
| **Language**           | TypeScript                                                 |
| **Deployment**         | Vercel                                                     |
| **Tooling**            | Prettier + Tailwind Plugin                                 |
| **Image Optimization** | Next/Image                                                 |
| **Hosting**            | Custom domain via Vercel DNS                               |

---

## 📁 Project Structure

```text
src/
 ├─ app/
 │   ├─ layout.tsx       # Root layout with metadata
 │   ├─ page.tsx         # Main portfolio page
 │   ├─ globals.css      # Tailwind CSS import
 │   └─ not-found.tsx    # 404 page
 └─ public/
     ├─ me.jpg           # Headshot image
     └─ resume.pdf       # Downloadable resume
```

---

## ⚙️ Local Development

### 1️⃣ Clone the repo

```bash
git clone https://github.com/ryanlecours/ryanlecours.dev.git
cd ryanlecours.dev
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the dev server

```bash
npm run dev
```

Visit → **http://localhost:3000**

### 4️⃣ Build & preview production

```bash
npm run build
npm run start
```

---

## 🧹 Linting & Formatting

Format with Prettier + Tailwind plugin:

```bash
npm run format
```

Run Next.js lint:

```bash
npm run lint
```

---

## 🌐 Deployment

This portfolio is **automatically deployed** via Vercel from the `main` branch.  
Every push → Preview deployment  
Merge → Production deployment at [ryanlecours.dev](https://ryanlecours.dev)

---

## ✨ Features

- ⚡ **Fully responsive** and mobile-friendly
- ♿ **Accessible & fast** (Lighthouse 95+ score)
- 🖼️ **Next.js Image optimization**
- 🌙 **Dark, minimal theme** via Tailwind CSS v4
- 🔁 **Automatic CI/CD** with Vercel

---

## 👤 Author

**Ryan LeCours**  
Frontend-leaning Full-Stack Engineer  
📍 Bellingham, WA

- 🌐 [ryanlecours.dev](https://ryanlecours.dev)
- 💼 [LinkedIn](https://www.linkedin.com/in/ryan-lecours/)
- 💻 [GitHub](https://github.com/ryanlecours)

---

## 🪶 License

This project is open source under the [MIT License](LICENSE).

---

> _Built with ❤️ using Next.js 16 + Tailwind CSS v4 and deployed on Vercel._
