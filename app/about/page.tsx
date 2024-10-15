import Image from "next/image";
import {Timeline} from "@/components/ui/timeline";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
export default function Page() {
    const data = [
        {
            title: "2024",
            content: (
                <div className="flex flex-col gap-6">
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        Fitcher – My first major Angular project, a free dating app that will be published on both the
                        App Store and Google Play.
                    </p>
                    <div className="grid grid-cols-2 gap-4 ">
                        <Image
                            src="/images/fitcherApp-left.png"
                            alt="Fitcher"
                            width={500}
                            height={500}
                            className="object-contain rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        <LinkPreview  url="https://dada-optic.fr/" className="font-bold">
                            Dada Optic
                        </LinkPreview>{" "} – A web project for my sister&apos;s optical store, built using HTML/CSS for the front end
                        and PHP for the back end.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/dadaOpticApp1.png"
                            alt="DadaOptic"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/images/dadaOpticApp2.png"
                            alt="DadaOptic"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div className="flex flex-col gap-6">
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        UniRoute – A team-based academic project in Winter 2023, developed in Kotlin for Android.
                    </p>
                    <div className="grid grid-cols-2 gap-4 ">
                        <Image
                            src="/images/uniRouteApp1-left.png"
                            alt="UniRoute"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div className="flex flex-col gap-6">
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        Motor Assembly Access (MAA) – An innovative software providing detailed vehicle schematics and tutorials, designed for both automotive enthusiasts and professionals.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/maaApp1.jpg"
                            alt="MAA"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/images/maaApp2.png"
                            alt="MAA"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2021-2024",
            content: (
                <div className="flex flex-col gap-6">
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        Kelconke Trader – A major project spanning four years, an external trading robot for MetaTrader
                        5 that automates and simplifies trading.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/kelconkeTraderApp1.png"
                            alt="Kelconke Trader"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/images/kelconkeTraderApp2.png"
                            alt="Kelconke Trader"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2021",
            content: (
                <div className="flex flex-col gap-6">
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        Started my studies in Web and Mobile Development (DEC) at Collège de Rosemont, gaining in-depth
                        knowledge of modern web and mobile technologies.
                    </p>
                </div>
            ),
        },
        {
            title: "2019",
            content: (
                <div className="flex flex-col gap-6">
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        MUSIQ APP – My first self-taught application, combining C# for the back end and HTML/CSS/JS for
                        the front end.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/musiqApp1.png"
                            alt="MUSIQ APP"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/images/musiqApp2.png"
                            alt="MUSIQ APP"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        Toolsbox MONETIK – A project developed during my internship in France, aimed at assisting
                        technicians by automating tasks. (Old screenshot, the software has been lost)
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/toolsboxMonetik.png"
                            alt="Toolsbox MONETIK"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full h-full">
            <div className="flex flex-row items-center justify-evenly mt-10 ml-36 mr-36 h-[40rem]">
                <Image
                    src="/images/moi.jpeg"
                    alt="Moi"
                    width={500}
                    height={500}
                    className={'object-cover'}
                    style={{ borderRadius: '50%', overflow: 'hidden', width: 400, height: 400, minWidth: 400 }}
                />
                <p className='w-5/12' >I&apos;m Donovan, 22 years old and passionate about programming. Originally from France, I moved to Quebec to pursue my studies and settle in this beautiful province. My journey has been marked by exploring new technologies and a constant drive to innovate. In this portfolio, you&apos;ll find my main projects in the navigation bar, each reflecting my commitment, love for programming, and ability to tackle technical challenges. For more exciting work, click on &apos;Additional Projects&apos; to explore the diversity of my skills and interests. Feel free to contact me to discuss your needs or to learn more about my journey. Thanks for visiting, and enjoy exploring!</p>
            </div>
            <Timeline data={data}/>
        </div>
    );
}
