// components/MyComponent.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {NavBarCustom} from "@/components/navbarCustom";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Donovan Beulze | Portfolio",
  description: "Portfolio de Donovan Beulze, développeur full stack spécialisé en Angular et développement mobile.",
  keywords: [
    "Donovan Beulze",
    "Portfolio",
    "Full Stack Developer",
    "Développeur Full Stack",
    "Angular",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Développement Mobile",
    "Mobile Development",
    "Capacitor",
    "P2P",
    "Peer-to-peer",
    "Web Development",
    "Développement Web",
    "Application",
    "App Development",
    "Kelconke Trader",
    "Fitcher",
    "UniRoute",
    "Bot de Trading",
    "Trading Bot",
    "Frontend Developer",
    "Backend Developer",
    "Node.js",
    "Express",
    "Développement Web et Mobile",
    "Responsive Design",
    "UI/UX",
    "CSS",
    "HTML5",
    "API Integration",
    "REST API",
    "Software Engineer",
    "Automation",
    "Project Management",
    "Agile",
    "Scrum",
    "Google Cloud",
    "Firebase",
    "SEO",
    "Optimisation des performances",
    "Sécurité Web",
    "Web Security",
    "Cloud Computing",
    "Docker",
    "DevOps",
    "Git",
    "CI/CD"
  ],
  authors: [{ name: "Donovan Beulze", url: "https://donovanbeulze.com" }],
  themeColor: "#09090b",
  openGraph: {
    title: "Donovan Beulze | Portfolio",
    description: "Découvrez le portfolio de Donovan Beulze, développeur full stack avec des projets en Angular, Next.js, et des applications mobiles.",
    url: "https://donovanbeulze.com",
    images: [
      {
        url: "https://donovanbeulze.com/images/portfolio-image.png",
        width: 800,
        height: 600,
        alt: "Donovan Beulze Portfolio"
      }
    ],
    type: "website"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={'dark w-full h-full'} lang="en">
      <body className={`dark w-full h-full ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBarCustom></NavBarCustom>
        {children}
      </body>
    </html>
  );
}
