"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
export default function Page() {
    return (
        <div className={'mt-11 mb-11'}>
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
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
                                        height="350"
                                        width="350"
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
const dummyContent = [
    {
        title: "Fitcher - Une application de rencontre",
        description: (
            <>
                <p>
                    Fitcher est une application de rencontre que j'ai développée en TypeScript avec Angular et Capacitor. Le projet a débuté en septembre, dans le but d'avoir une application publique à intégrer à mon portfolio. L'application permet aux utilisateurs de swiper des profils et de se connecter avec d'autres personnes. Elle met l'accent sur une expérience fluide et 100% gratuite.
                </p>
            </>
        ),
        badge: "Concept",
    },
    {
        title: "Développement de Fitcher",
        description: (
            <>
                <p>
                    Le développement de Fitcher a été une opportunité majeure pour moi de perfectionner mes compétences en Angular. J'ai utilisé Capacitor pour intégrer les fonctionnalités natives du téléphone et j'ai dû surmonter plusieurs défis techniques, notamment le développement des composants à la main, et la gestion de l'API en PHP que je prévois de refaire en Spring Boot.
                </p>
                <p>
                    Grâce à ce projet, j'ai amélioré ma maîtrise d'Angular, notamment sur la gestion des données, la navigation et la gestion de l'état. Chaque composant a été soigneusement conçu pour offrir une expérience utilisateur fluide et intuitive.
                </p>
            </>
        ),
        badge: "Développement",
    },
    {
        title: "Design et Interface",
        description: (
            <>
                <p>
                    Le design de Fitcher s'est basé sur un kit Figma sous licence libre, mais j'ai recréé manuellement tous les composants en Angular. Ce processus m'a permis de comprendre en profondeur les interactions entre le design UI/UX et le développement technique. Chaque vue a été pensée pour être minimaliste et rapide d'accès, afin de garantir une bonne expérience utilisateur.
                </p>
                <p>
                    J'ai également ajouté des composants sur mesure pour répondre aux besoins spécifiques de l'application, comme l'intégration des profils, des swipes, et la gestion des interactions en temps réel entre les utilisateurs.
                </p>
            </>
        ),
        badge: "Design",
        image: "/images/fitcherApp1-portrait.png",
    }

];
