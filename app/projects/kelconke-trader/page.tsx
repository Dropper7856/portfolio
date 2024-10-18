"use client";
import React from "react";
import useIsMobile from '@/hooks/useIsMobile';
import { TracingBeam } from "@/components/ui/tracing-beam";
export default function Page() {
    const isMobile = useIsMobile();
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
                                {index === 0 && !isMobile && (
                                    <iframe style={{ width: '100%', height: '400px' }} className="rounded-lg mb-10 object-cover" src={'/kl/KelconkeTrader.html'}></iframe>
                                )}
                                {index === 1 && !isMobile && (
                                    <iframe style={{ width: '100%', height: '400px' }} className="rounded-lg mb-10 object-cover" src={'/kl/KelconkeTraderSettings.html'}></iframe>
                                )}
                                {index === 3 && !isMobile && (
                                    <iframe style={{ width: '100%', height: '400px' }} className="rounded-lg mb-10 object-cover" src={'/kl/rpi.html'}></iframe>
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
        title: "Kelconke Trader - Concept",
        description: (
            <>
                <p>
                    Kelconke Trader is a trading robot designed for MetaTrader 5. Its goal is to simplify and automate trading for users by offering an intuitive interface and advanced features. The application allows traders to use customizable strategies, technical indicators, and analytical tools to maximize profits and reduce risks. This project was launched on August 24, 2021.
                </p>
                <p>
                    The concept is based on creating a solution that helps traders save time and reduce human errors while maintaining full control over trading parameters. The robot is suitable for both beginner and experienced traders, thanks to its customization options.
                </p>
            </>
        ),
        badge: "Concept",
    },
    {
        title: "How Kelconke Trader Works",
        description: (
            <>
                <p>
                    Kelconke Trader offers several key features for adjusting trading parameters according to user needs. For example, traders can configure order volume, Take Profit, Stop Loss, and Trailing Stop, as well as advanced functions like Break Even, which automatically adjusts Stop Loss to the entry price once a certain profit is reached.
                </p>
                <p>
                    Other options include limiting the number of orders per day, automatically managing order volume based on capital, and choosing the trading symbol. All these features are designed to optimize trading strategy and minimize risks. Additionally, Kelconke Trader allows users to set specific trading hours to avoid periods of high volatility or to take advantage of specific market opportunities.
                </p>
            </>
        ),
        badge: "How It Works",
    },
    {
        title: "Kelconke Trader Development",
        description: (
            <>
                <p>
                    Kelconke Trader is my very first large project in C#. While the application is fully functional and has very few bugs, looking back, I realize that it is very poorly structured. At the time, I had less experience in C#, which led to design and architectural choices that lack clarity and optimization.
                </p>
                <p>
                    The development primarily relied on C# for the back-end, while the front-end was built using HTML, CSS, and JavaScript. I integrated the MtApi5 API to enable smooth communication between the bot and MetaTrader 5, facilitating access to market data and technical indicators for trading.
                </p>
                <p>
                    Despite these shortcomings in code structure, the application was tested with MetaTrader&apos;s Backtest tool to optimize the default configurations. This project gave me valuable experience in building a complete application in C#, even though I recognize today that it could have been developed in a cleaner and more efficient way.
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
                    Kelconke Trader&apos;s design focuses on simplicity and efficiency. The user interface is designed to be accessible, even for novice traders, while allowing full customization of trading parameters. Users can easily adjust all parameters directly from the interface without needing to navigate through complex configurations.
                </p>
                <p>
                    The application also offers two interface modes. The standard mode provides a complete user experience with all options visible, while the &quot;Barebone&quot; mode allows the bot to be launched with a simplified and resource-light interface. This latter mode is particularly useful to ensure the bot can run 24/7 without consuming too many resources, while keeping the essential features active.
                </p>
                <p>
                    The option to choose customizable themes also allows users to adjust the visual appearance of the application to their preferences. The design goal was to ensure a smooth and pleasant experience while offering personalization options to meet individual traders&apos; needs.
                </p>
            </>
        ),
        badge: "Design",
    }
];


