import Layout from "../../components/organism/Layout/Layout";
import Topic from "../../components/molecules/Topic/Topic";
import WebIllust from "../../assets/webillust.png";
import WebIllustSmall from "../../assets/webillust-small.png";
import SofwareIllust from "../../assets/softwareillust.png";
import MarketingIllust from "../../assets/marketingillust.png";
import MarketingIllustSmall from "../../assets/marketingillust-small.png";
import CardService, {
    ICardService,
} from "../../components/molecules/Card/CardService";

import { Route } from "../../constant/Route";
import * as React from "react";

export default function Services() {
    const cardsContent: ICardService[] = [
        {
            title: "Website",
            description:
                "Analyze your desire, customer needs, and potential market with big data, engage your selling using great marketing strategy",
            imageUrl: WebIllust,
            imageSmallUrl: WebIllustSmall,
            href: Route["services-website"],

            altImage: "website development",
        },
        {
            title: "Software Development",
            description:
                "Develop your business and create your own website or apps, gain your business visualization information to create good selling.",
            imageUrl: SofwareIllust,
            imageSmallUrl: SofwareIllust,
            href: Route["services-software-dev"],

            altImage: "software development",
        },
        {
            title: "Marketing",
            description:
                "Gain your customer by recreating your visualization and information through social media as a medium for branding your product.",
            imageUrl: MarketingIllust,
            imageSmallUrl: MarketingIllustSmall,
            href: Route["services-marketing"],

            altImage: "marketing",
        },
    ];
    return (
        <Layout>
            <section>
                <Topic title="Our Services">
                    We provide three main services: website, software
                    development, and marketing. These three services are helpful
                    for those of you who are going to build a business or are
                    developing a business.
                </Topic>
            </section>
            <section>
                <div className=" flex flex-col sm:flex-row gap-5 justify-around">
                    {cardsContent.map((cardContent: ICardService, i) => (
                        <CardService
                            key={i}
                            description={cardContent.description}
                            altImage={cardContent.altImage}
                            imageSmallUrl={cardContent.imageSmallUrl}
                            imageUrl={cardContent.imageUrl}
                            href={cardContent.href}
                            title={cardContent.title}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    );
}
