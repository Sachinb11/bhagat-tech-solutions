# 🚀 Bhagat Tech Solutions — Next.js Website

Premium IT company website built with **Next.js 14 App Router**, fully separated into reusable components, custom hooks, data files, and a single global CSS file.

---

## 📁 Project Structure

```
bts-nextjs/
├── app/
│   ├── layout.jsx          # Root layout — fonts, metadata, FontAwesome
│   ├── page.jsx            # Homepage (all sections)
│   ├── globals.css         # All CSS variables, animations, component styles
│   ├── services/page.jsx   # /services route
│   ├── projects/page.jsx   # /projects route
│   ├── team/page.jsx       # /team route
│   └── contact/page.jsx    # /contact route
│
├── components/
│   ├── Navbar.jsx          # Fixed responsive navbar
│   ├── Hero.jsx            # Hero with typewriter, orbits, floating cards
│   ├── ServicesStrip.jsx   # Infinite scrolling marquee
│   ├── About.jsx           # About section with timeline
│   ├── Services.jsx        # Services grid
│   ├── WhyChoose.jsx       # Why Choose Us grid
│   ├── Portfolio.jsx       # Portfolio with filter tabs
│   ├── Team.jsx            # Team member cards
│   ├── CTA.jsx             # Call-to-action banner
│   ├── Contact.jsx         # Contact form (3-channel)
│   ├── Footer.jsx          # 4-column footer
│   ├── WAFloat.jsx         # Floating WhatsApp button
│   └── ScrollRevealInit.jsx# Activates scroll animations
│
├── hooks/
│   ├── useTypewriter.js    # Cycling typewriter animation
│   ├── useCounter.js       # Animated number counter
│   ├── useNavScroll.js     # Navbar scroll + active link
│   └── useScrollReveal.js  # IntersectionObserver fade-ins
│
├── lib/
│   ├── contactConfig.js    # API keys config (reads from .env.local)
│   └── contactService.js   # Web3Forms + EmailJS + WhatsApp logic
│
├── data/
│   ├── services.js         # Services & Why Choose data
│   ├── portfolio.js        # Portfolio projects data
│   └── team.js             # Team members data
│
├── public/
│   └── logo.png            # ⚠️ Place your BTS logo here!
│
├── .env.local.example      # Environment variable template
├── jsconfig.json           # Path aliases (@/...)
└── package.json
```

---

## ⚡ Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Add your logo
Copy your `bts.png` logo file into the `public/` folder and rename it `logo.png`:
```
public/logo.png
```

### 3. Configure environment variables
```bash
cp .env.local.example .env.local
```
Then edit `.env.local` and fill in your API keys (see **Contact Form Setup** below).

### 4. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 5. Build for production
```bash
npm run build
npm start
```

---

## 📧 Contact Form Setup

The form sends through **3 channels simultaneously**:

### Channel 1 — Web3Forms (Free Email, 2 min setup)
1. Visit [web3forms.com](https://web3forms.com)
2. Enter `bhagattechsolutions@gmail.com`
3. Click **Get Access Key**
4. Copy the key → add to `.env.local`:
```
NEXT_PUBLIC_WEB3FORMS_KEY=abc123...
```

### Channel 2 — EmailJS (Gmail backup, 5 min setup)
1. Sign up at [emailjs.com](https://emailjs.com)
2. **Email Services** → Add Service → Connect Gmail
3. **Email Templates** → Create template (use variables: `from_name`, `from_email`, `phone`, `service`, `message`)
4. **Account** → API Keys → copy Public Key
5. Add all to `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

### Channel 3 — WhatsApp (Zero setup ✅)
Works immediately. When the form is submitted, it opens WhatsApp with a pre-filled message to **+91 8459449727**.

---

## 🌐 Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Then add your environment variables in the Vercel dashboard under **Project → Settings → Environment Variables**.

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| React 18 | UI |
| CSS Variables + Global CSS | Styling |
| next/font | Google Fonts (no layout shift) |
| next/image | Optimised images |
| @emailjs/browser | EmailJS SDK |
| Web3Forms API | Email forwarding |
| Font Awesome 6.5 | Icons |
| IntersectionObserver | Scroll animations |

---

## 📞 Business Contact

- 📱 **Phone/WhatsApp:** +91 8459449727
- 📧 **Email:** bhagattechsolutions@gmail.com
- 🌐 **Website:** www.bhagatechsolutions.com
