"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function Page() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        <div className="w-full h-full py-20 ">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                My Key Skills and Expertise
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const AngularContent = () => {
    return (
        <div
            key={"angular-content"}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">
                    Mastering Front-End Development with Angular.
                </span>{" "}
                Angular allows me to build robust, dynamic, and scalable applications, ensuring high-performance and smooth user experiences.
            </p>
            <Image
                src="https://example.com/angular-logo.png"
                alt="Angular logo"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
    );
};

const PHPContent = () => {
    return (
        <div
            key={"php-content"}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">
                    Building Dynamic Web Applications with PHP.
                </span>{" "}
                PHP is my go-to language for creating powerful and secure back-end systems that manage and drive data-driven applications.
            </p>
            <Image
                src="https://example.com/php-logo.png"
                alt="PHP logo"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
    );
};

const CSSContent = () => {
    return (
        <div
            key={"css-content"}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">
                    Crafting Beautiful and Responsive Designs with CSS.
                </span>{" "}
                CSS allows me to design visually stunning, responsive, and user-friendly web pages that look great on any device.
            </p>
            <Image
                src="https://example.com/css-logo.png"
                alt="CSS logo"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
    );
};

const HTMLContent = () => {
    return (
        <div
            key={"html-content"}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">
                    Structuring Web Content with HTML.
                </span>{" "}
                HTML is the foundation of all web pages, providing structure and semantic meaning to content for a solid web framework.
            </p>
            <Image
                src="https://example.com/html-logo.png"
                alt="HTML logo"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
    );
};

const NextJsContent = () => {
    return (
        <div
            key={"nextjs-content"}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">
                    Developing Modern and Scalable Web Apps with Next.js.
                </span>{" "}
                Next.js enables me to create high-performance web applications with modern features like server-side rendering and API routes.
            </p>
            <Image
                src="https://example.com/nextjs-logo.png"
                alt="Next.js logo"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
    );
};

const JavaScriptContent = () => {
    return (
        <div
            key={"javascript-content"}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">
                    Enhancing Interactivity and Functionality with JavaScript.
                </span>{" "}
                JavaScript is the key to adding interactivity and dynamic behavior to websites, making them more engaging and functional for users.
            </p>
            <Image
                src="https://example.com/javascript-logo.png"
                alt="JavaScript logo"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
    );
};

const CSharpContent = () => {
    return (
        <div
            key={"csharp-content"}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">
                    Building Robust Backend Solutions with C#.
                </span>{" "}
                C# allows me to develop powerful and scalable back-end systems for web and desktop applications, ensuring smooth operations and data management.
            </p>
            <Image
                src="https://example.com/csharp-logo.png"
                alt="C# logo"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
    );
};

const UnrealEngineContent = () => {
    return (
        <div
            key={"unreal-engine-content"}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">
                    Creating Immersive Experiences with Unreal Engine.
                </span>{" "}
                Unreal Engine Blueprints allow me to develop high-quality, immersive game experiences without extensive coding, making development fast and efficient.
            </p>
            <Image
                src="https://example.com/unrealengine-logo.png"
                alt="Unreal Engine logo"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
    );
};


const CapacitorContent = () => {
    return (
        <div
            key={"capacitor-content"}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">
                    Building Native Mobile Experiences with Capacitor.
                </span>{" "}
                Capacitor allows me to create native mobile applications with web technologies, offering seamless integration with iOS and Android platforms.
            </p>
            <Image
                src="https://example.com/capacitor-logo.png"
                alt="Capacitor logo"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
    );
};


const data = [
    {
        category: "Angular",
        title: "Mastering Front-End Development with Angular",
        src: "/images/AngularCard.png",
        content: <AngularContent />,
    },
    {
        category: "Capacitor",
        title: "Building Native Mobile Experiences with Capacitor.",
        src: "/images/CapacitorCard.png",
        content: <CapacitorContent />,
    },
    {
        category: "PHP",
        title: "Building Dynamic Web Applications with PHP",
        src: "/images/PHPCard.png",
        content: <PHPContent />,
    },
    {
        category: "CSS",
        title: "Crafting Beautiful and Responsive Designs with CSS",
        src: "/images/CSSCard.png",
        content: <CSSContent />,
    },

    {
        category: "HTML",
        title: "Structuring Web Content with HTML",
        src: "/images/HTML5Card.png",
        content: <HTMLContent />,
    },
    {
        category: "Next.js",
        title: "Developing Modern and Scalable Web Apps with Next.js",
        src: "/images/NextJSCard.png",
        content: <NextJsContent  />,
    },
    {
        category: "JavaScript",
        title: "Enhancing Interactivity and Functionality with JavaScript",
        src: "/images/JSCard.png",
        content: <JavaScriptContent />,
    },
    {
        category: "C#",
        title: "Robust Backend Solutions Using C#",
        src: "/images/CSharpCard.png",
        content: <CSharpContent />,
    },
    {
        category: "Unreal Engine Blueprint",
        title: "Creating Immersive Experiences with Unreal Engine Blueprint",
        src: "/images/UECard.png",
        content: <UnrealEngineContent />,
    },
];
