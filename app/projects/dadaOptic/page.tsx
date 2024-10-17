"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
export default function Page() {
    return (
        <div className={'mt-11 mb-11'}>
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {ProjectContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 ml-2 mr-2 ">
                            <h2 className="bg-white text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
                                {item.badge}
                            </h2>

                            <p className={"text-xl mb-4"}>
                                {item.title}
                            </p>

                            <div className="text-sm  prose prose-sm dark:prose-invert">
                                {item?.image && (
                                    <Image
                                        src={item.image}
                                        alt="blog thumbnail"
                                        height="1000"
                                        width="1000"
                                        className="rounded-lg mb-10 object-cover"
                                    />
                                )}
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </div>
    );
}
const ProjectContent = [
    {
        title: "Dada Optic - Concept",
        description: (
            <>
                <p>
                    Dada Optic is a website I developed for the Dada Optic boutique located in Paris. This project aims to present the store online, allowing clients to book appointments and browse available eyewear. The site serves as a digital showcase for the boutique while facilitating customer interactions, especially through online appointment booking.
                </p>
                <p>
                    The concept is to provide an easy-to-use platform for visitors, while giving the administrator an efficient way to manage the services and products offered. This site is a turnkey solution for the boutique, simplifying content management and customer interactions.
                </p>
            </>
        ),
        badge: "Concept",
        image: "/images/dadaOpticApp1.png"
    },
    {
        title: "How Dada Optic Works",
        description: (
            <>
                <p>
                    The Dada Optic site offers several essential features. Users can browse available eyewear models and book an appointment online for an eye exam or optical advice. The site also includes an administrator dashboard, allowing the management of products (add, edit, permanently or temporarily remove) as well as the services offered by the boutique.
                </p>
                <p>
                    With a simple and intuitive interface, clients can easily navigate through the different sections, and the administrator can update site information in real-time without requiring programming knowledge. All of this is made possible through the use of AJAX, enabling a smooth user experience without page reloads.
                </p>
            </>
        ),
        badge: "How It Works",
    },
    {
        title: "Dada Optic Development",
        description: (
            <>
                <p>
                    This project was developed using HTML, PHP, CSS, JavaScript, and AJAX. The PHP back-end manages various administrative features, such as product and service management. The front-end was designed to provide a smooth and enjoyable user experience, especially through the use of AJAX for content updates without page reloads.
                </p>
                <p>
                    The administrator dashboard is an essential part of the project. It allows managing available eyewear (add, edit, delete) as well as the services offered. The administrator can also update details such as opening hours and other store-related information. This project has allowed me to deepen my skills in full-stack development.
                </p>
            </>
        ),
        badge: "Development",
    },
    {
        title: "Design and Interface",
        description: (
            <>
                <p>
                    The design of the Dada Optic website is based on a Figma project created by an intern at the boutique. This was my first project where I did not have to create the design myself. I followed the Figma mockups to faithfully recreate each site view in code. This allowed me to focus more on the technical development while ensuring that the final design perfectly reflected my sister&#39;s expectations.
                </p>
                <p>
                    The design is clean and professional, designed to provide a pleasant user experience on both desktop and mobile. Each section of the site was crafted to highlight the boutique’s products while ensuring smooth and intuitive navigation.
                </p>
            </>
        ),
        badge: "Design",
        image: "/images/dadaOpticApp2.png"
    }
];




