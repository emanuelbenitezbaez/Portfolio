# Backend Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, specifically designed to showcase backend development skills and projects.

## 🚀 Features

- 🌓 Dark/Light mode
- 🌐 Multilingual support (English/Spanish)
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Modern UI with Tailwind CSS
- 📧 Contact form with EmailJS integration
- 🔍 SEO friendly

## 🛠️ Technologies Used

### Frontend
- React
- TypeScript
- Tailwind CSS
- Vite
- EmailJS

## 🏗️ Project Structure

```
modern-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LanguageToggle.tsx
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   └── ThemeToggle.tsx
│   ├── contexts/
│   │   ├── LanguageContext.tsx
│   │   └── ThemeContext.tsx
│   ├── constants/
│   │   ├── colors.ts
│   │   └── translations.ts
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/backend-portfolio.git
```

2. Navigate to the project directory
```bash
cd backend-portfolio
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Update the following values in `Contact.tsx`:
   - YOUR_SERVICE_ID
   - YOUR_TEMPLATE_ID
   - YOUR_PUBLIC_KEY

## 🎨 Customization

### Theme Colors
- Edit colors in `src/constants/colors.ts`
- Modify Tailwind configuration in `tailwind.config.js`

### Content
- Update translations in `src/constants/translations.ts`
- Modify project information in `Portfolio.tsx`
- Update services in `Services.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🌐 Deployment

This project can be deployed to various platforms:
- Netlify
- Vercel
- GitHub Pages
- Any static site hosting


## 👨‍💻 Author


- LinkedIn: https://www.linkedin.com/in/emanuel-benitez-baez-26464314a/

## 🙏 Acknowledgments

- React Icons
- Tailwind CSS
- EmailJS
- Hero Icons

