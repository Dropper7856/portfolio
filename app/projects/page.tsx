"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React, {useEffect, useState} from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";

export default function Page() {
    const wordsFooter = "The projects above are my biggest ones, but I've also created many smaller projects, exploring different ideas and technologies.";

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
    const words = [
        {
            text: "Creating",
        },
        {
            text: "application",
        },
        {
            text: "with",
        },
        {
            text: "passion",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "and",
        },
        {
            text: "purpose.",
        },]
    return (
        <div className="w-full h-full">
            <div className="flex flex-col items-center justify-center h-[40rem]">
                <TypewriterEffectSmooth words={words}/>
            </div>
            <div className="mb-12">
                <BentoGrid className="mb-12 max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 0 ? "md:col-span-3 cursor-pointer" : "cursor-pointer"}
                        />
                    ))}
                </BentoGrid>
            </div>
            <div className="dark max-w-5xl h-40 mx-auto px-8">
                {hasScrolled && <TextGenerateEffect words={wordsFooter}/>}
            </div>
        </div>
    );
}

const items = [
    {
        title: "Fitcher",
        description:
            "Fitcher is a free mobile dating app designed to connect people quickly and effortlessly.",
        header: <img className="object-cover h-40"  src="/images/fitcher_mockup.png" alt="Fitcher" />,
        icon: null,
    },
    {
        title: "Kelconke Trader",
        description: "Kelconke Trader is a MetaTrader 5 trading robot that automates and simplifies trading. It offers customizable strategies, technical indicators, and tools to help maximize profits and minimize risks, while reducing human errors.",
        header: <img className="object-cover h-28 " src="/images/kelconke_trader_logo_project.png" alt="Kelconke Trader"/>,
    },
    {
        title: "Dada Optic",
        description: "Dada Optic is a website designed for my sister's optical store, offering a seamless experience to explore eyewear and services.",
        header: <img className="object-contain bg-white h-28 " src="/images/dadaOptic_logo2.png" alt="Dada Optic"/>,
        icon: null,
    },
    {
        title: "Motor Access Assembly",
        description: "Motor Assembly Access (MAA) is a software providing detailed vehicle schematics and tutorials, designed for both automotive enthusiasts and professionals.",
        header: <img className="object-cover h-28" src="/images/maa_logo.png" alt="MAA"/>,
        icon: null,
    },
];
