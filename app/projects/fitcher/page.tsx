"use client";
import React from "react";
import dynamic from "next/dynamic";
const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
    ssr: false,
});
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
export default function Page() {
    const globeConfig = {
        pointSize: 4,
        globeColor: "#1e7166",
        showAtmosphere: true,
        atmosphereColor: "#34c5b2",
        atmosphereAltitude: 0.1,
        emissive: "#2b8588",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#ffffff",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };
    const colors = ["#ffffff", "#ffffff", "#ffffff"];
    const sampleArcs = [
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -1.303396,
            endLng: 36.852443,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: -15.785493,
            startLng: -47.909029,
            endLat: 36.162809,
            endLng: -115.119411,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: 21.3099,
            startLng: -157.8581,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: -34.6037,
            startLng: -58.3816,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 14.5995,
            startLng: 120.9842,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: -33.8688,
            endLng: 151.2093,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: -15.432563,
            startLng: 28.315853,
            endLat: 1.094136,
            endLng: -63.34546,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: 37.5665,
            startLng: 126.978,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: 48.8566,
            startLng: -2.3522,
            endLat: 52.52,
            endLng: 13.405,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: 52.52,
            startLng: 13.405,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: -8.833221,
            startLng: 13.264837,
            endLat: -33.936138,
            endLng: 18.436529,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 49.2827,
            startLng: -123.1207,
            endLat: 52.3676,
            endLng: 4.9041,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: 28.6139,
            endLng: 77.209,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 52.3676,
            endLng: 4.9041,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: 41.9028,
            startLng: 12.4964,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 1.3521,
            endLng: 103.8198,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 37.7749,
            endLng: -122.4194,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 35.6762,
            startLng: 139.6503,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: 52.52,
            startLng: 13.405,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 14,
            startLat: -33.936138,
            startLng: 18.436529,
            endLat: 21.395643,
            endLng: 39.883798,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
    ];
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
                                {index === 0 && (
                                    <div className={'w-full h-72'}><World data={sampleArcs} globeConfig={globeConfig} /></div>
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
