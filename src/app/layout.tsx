import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nxjay Code - Full Stack Developer & AI Enthusiast",
  description: "Professional portfolio showcasing full stack development projects, UI/UX design work, and technical expertise. Available for freelance projects and full-time opportunities.",
  keywords: "full stack developer, web developer, UI/UX designer, React, Next.js, TypeScript, portfolio",
  authors: [{ name: "Nipun Dhananjaya" }],
  creator: "Nipun Dhananjaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Nipun Dhananjaya - Full Stack Developer & AI Enthusiast",
    description: "Professional portfolio showcasing full stack development projects and AI Enthusiast work.",
    siteName: "Nipun Dhananjaya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nipun Dhananjaya - Full Stack Developer & AI Enthusiast",
    description: "Professional portfolio showcasing full stack development projects and AI Enthusiast work.",
    creator: "@nipun_dhananjaya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
