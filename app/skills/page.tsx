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
                Angular is a framework I discovered during my studies, but I acquired most of my knowledge through self-learning. Today, I use it in combination with Capacitor to develop a mobile application. This app, which features an interface entirely built with Angular, is intended to be published on the App Store and Google Play Store once it&apos;s complete. One of Angular&apos;s strengths is its robust structure, ideal for building dynamic and scalable applications.            </p>
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
                Although I haven’t used PHP in a while — my last project with this language being Dada Optic — I still have a good grasp of its general syntax. PHP has often served me in developing dynamic websites, especially for database management and server-side functionalities.            </p>
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
                CSS is a language I use almost daily. It allows me to style and create user-friendly and visually appealing interfaces. Through CSS, I ensure that my applications have a modern look and feel, tailored to different devices, whether on the web or mobile.            </p>
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
                Like CSS, HTML is an essential part of my daily development work. It’s the fundamental language used to structure the interfaces of my applications. It helps me build functional and accessible web pages, providing a solid foundation for the design and styling that comes with CSS.            </p>
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
                I’m currently learning Next.js, which I’m using for the first time to create my portfolio. This framework is quite different from Angular, especially with its server-side rendering and static page generation approach. However, I’m adapting well and find Next.js particularly effective for optimizing website performance.            </p>
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
                JavaScript was my go-to language for adding interactivity to my web projects, particularly for sites built with PHP or pure HTML. While I haven’t used JavaScript recently, I still have a solid understanding of its functionality, especially for manipulating the DOM and handling events.            </p>
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
                C# is the first language I learned through self-study, and it&apos;s one of the ones I know best. I have completed several large-scale projects using this language, and I’m comfortable with its concepts, whether for desktop applications or video games. C# remains a key tool in my developer skill set.            </p>
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
                Unreal Engine&apos;s Blueprint is a visual scripting language I’ve used in the context of game development. Even though I haven’t used it in a while, I retain a solid understanding of its principles. It’s like riding a bike: you never forget. My experience with Blueprints allowed me to create game mechanics without needing to code directly in C++.            </p>
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
                Capacitor is a framework I use to make my web application compatible with mobile platforms by offering native integration. It allows me to leverage features that are only available in native apps, such as access to the camera or push notifications, while maintaining a web-based codebase. With Capacitor, I can develop efficient mobile apps while building on my web development skills.            </p>
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
