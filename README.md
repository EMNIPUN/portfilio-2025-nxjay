# Professional Portfolio 2025

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and MagicUI components. Features a clean, professional design with smooth animations and an intuitive navigation system.

## 🌟 Features

- **Modern Design**: Clean and professional aesthetic with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations powered by Framer Motion
- **Navigation**: Section-based navigation without scrolling
- **Professional Sections**: 
  - Hero with introduction
  - About section with stats
  - Skills with progress bars
  - Projects showcase
  - Professional experience timeline
  - Contact form with social links
- **MagicUI Components**: Beautiful rainbow buttons and other UI elements
- **SEO Optimized**: Proper meta tags and OpenGraph support

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: MagicUI (Rainbow Button)
- **Development**: Turbopack for fast development

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfilio-2025-nxjay
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

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/sections/hero-section.tsx`):
   - Change "Your Name" to your actual name
   - Update the title/profession
   - Modify the description
   - Update social media links

2. **About Section** (`src/components/sections/about-section.tsx`):
   - Update personal information
   - Modify stats (years of experience, projects, etc.)
   - Change birth date, location, and interests

3. **Skills Section** (`src/components/sections/skills-section.tsx`):
   - Update skill categories and levels
   - Modify technologies list

4. **Projects Section** (`src/components/sections/projects-section.tsx`):
   - Replace with your actual projects
   - Update project descriptions, technologies, and links
   - Add real project images

5. **Experience Section** (`src/components/sections/experience-section.tsx`):
   - Update with your work experience
   - Modify job titles, companies, dates, and achievements

6. **Contact Section** (`src/components/sections/contact-section.tsx`):
   - Update contact information
   - Modify social media links
   - Connect form to your backend/email service

7. **Footer** (`src/components/footer.tsx`):
   - Update contact information
   - Modify social links

8. **Layout** (`src/app/layout.tsx`):
   - Update metadata (title, description, URLs)
   - Modify OpenGraph and Twitter card information

### Styling

- **Colors**: Modify the color scheme in `src/app/globals.css`
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Animations**: Customize animations in component files using Framer Motion

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add the section to the navigation in `src/components/navigation.tsx`
3. Include it in the main page router in `src/app/page.tsx`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📝 Environment Variables

If you plan to add a contact form backend, create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
EMAIL_SERVICE_API_KEY=your-email-service-api-key
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for beautiful animations
- [Lucide](https://lucide.dev/) for the icon library
- [MagicUI](https://magicui.design/) for beautiful UI components

---

Made with ❤️ using Next.js, Tailwind CSS, and Framer Motion
