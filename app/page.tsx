"use client";
import { HeroHighlight, Highlight  } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {useEffect, useState} from "react";
const words = "I'm always excited to work on new projects.\nFeel free to reach out—let's create something great together.";
export default function Home() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setHasScrolled(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
      <div className="w-full h-full">
          <HeroHighlight onClick={scrollToSection}>
              <motion.h1
                  initial={{
                      opacity: 0,
                      y: 20,
                  }}
                  animate={{
                      opacity: 1,
                      y: [20, -5, 0],
                  }}
                  transition={{
                      duration: 0.5,
                      ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-8xl leading-relaxed lg:leading-snug text-center mx-auto ">
                  Hi,
                  <Highlight className="text-black dark:text-white">
                      I&#39;m Donovan Beulze
                  </Highlight>
                  , a full-stack developer
              </motion.h1>
          </HeroHighlight>
          <div id="navSection" className="dark max-w-5xl mx-auto px-8">
              <HoverEffect items={projects}/>
          </div>
          <div className="dark max-w-5xl h-40 mx-auto px-8">
              {hasScrolled && <TextGenerateEffect words={words}/>}
          </div>
      </div>
  );
}
const scrollToSection = () => {
    const element = document.getElementById("navSection")
    element?.scrollIntoView({ behavior: "smooth"});
};
const projects = [
    {
        title: "About Me",
        description:
            "Learn more about who I am and what drives my passion for development.",
        link: "/about",
    },
    {
        title: "Projects",
        description:
            "Explore a selection of my favorite projects, showcasing my skills in action.",
        link: "/projects",
    },
    {
        title: "Skills",
        description:
            "Discover the range of technical expertise I bring to every project.",
        link: "/skills",
    },
];
