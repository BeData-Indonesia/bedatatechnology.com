import * as React from "react";
import Layout from "../../../components/organism/Layout/Layout";
import Topic from "../../../components/molecules/Topic/Topic";
import CardPrice from "../../../components/molecules/Card/CardPrice";
import Tab from "../../../components/molecules/Tab/Tab";

interface IMarketing {
    fullUrl: string;
}
export default function Marketing({ fullUrl }: IMarketing) {
    const tabs = [
        { param: "seo", title: "SEO" },
        { param: "meta-ads", title: "Meta Ads" },
        {
            param: "instagram-content-handling",
            title: "Instagram Content Handling",
        },
        { param: "marketing-consultant", title: "Marketing Consultant" },
    ];

    const CardsPrice = (marketing: string | null) => {
        const seoFeatures = [
            {
                title: "Basic",
                description:
                    "Best option for personal use & for your next project.",
                features: [
                    "Using Free Tools",
                    "Keyword Research",
                    "1 Main Keyword",
                    "2 Sub Main Keyword",
                    "3 SEO Good Quality Content /Month",
                    "1 Mont SEO Optimization",
                ],
                price: 500000,
                denomination: "month",
            },
            {
                title: "Medium",
                description:
                    "Best option for personal use & for your next project.",
                features: [
                    "Using Subs Tool",
                    "Keyword Research and Rank Tracking",
                    "1 Main Keyword",
                    "4 Sub Main Keyword",
                    "6 Good Quality Content",
                    "Min 3 Contract 3 Month",
                ],
                price: 1000000,
                denomination: "month",
            },
            {
                title: "Premium",
                description:
                    "Best option for personal use & for your next project.",
                features: [
                    "Using Subs Tools",
                    "Audience and Market Analysis",
                    "Competitor Analysis",
                    "Keyword Research and Rank Tracking",
                    "2 Main Keyword",
                    "8 Sub Main Keyword",
                    "8 Good Quality Content / Month",
                    "Site Audit and Optimization",
                    "Min Contract 3 Month",
                ],
                price: 2000000,
                denomination: "month",
            },
        ];
        switch (marketing) {
            case "seo":
                return seoFeatures;
            case "meta-ads":
                return [
                    {
                        title: "Basic",
                        description:
                            "Best option for personal use & for your next project.",
                        features: [
                            "Demographic",
                            "Funneling",
                            "10 Days Free Content",
                            "Intergrated Platform",
                        ],
                        price: 1000000,
                        denomination: "month",
                    },
                    {
                        title: "Medium",
                        description:
                            "Best option for personal use & for your next project.",
                        features: [
                            "Market Research",
                            "Demographics",
                            "Funneling",
                            "20 Days Free Content",
                            "Integrated Platform",
                        ],
                        price: 1700000,
                        denomination: "month",
                    },
                    {
                        title: "Premium",
                        description:
                            "Best option for personal use & for your next project.",
                        features: [
                            "Market Research",
                            "Demographics",
                            "Funneling",
                            "20 Days Free Content",
                            "Integrated Platform",
                        ],
                        price: 2000000,
                        denomination: "month",
                    },
                ];

            case "Instagram Content Handling":
                return [
                    {
                        title: "Basic",
                        description:
                            "Best option for personal use & for your next project.",
                        features: [
                            "10 Content Ideas",
                            "8 Feed Instagram Content",
                            "2 Story Instagram Content",
                            "Editing Template",
                            "Market Research",
                            "Strategy Deck Content Marketing",
                            "Copywriting for Each Content",
                        ],
                        price: 600000,
                        denomination: "month",
                    },
                    {
                        title: "Medium",
                        description:
                            "Best option for personal use & for your next project.",
                        features: [
                            "20 Content Ideas",
                            "15 Feed Instagram Content",
                            "5 Story Instagram Content",
                            "Editing Template",
                            "Market Research",
                            "Strategy Deck Content Marketing",
                            "Copywriting for Each Content",
                        ],
                        price: 100000,
                        denomination: "month",
                    },
                    {
                        title: "Premium",
                        description:
                            "Best option for personal use & for your next project.",
                        features: [
                            "30 Content Ideas",
                            "20 Feed Instagram Content",
                            "10 Story Instagram Content",
                            "Editing Template",
                            "Market Research",
                            "Buyer Persona Analysis",
                            "Strategy Deck Content Marketing",
                            "Copywriting for Each Content",
                        ],
                        price: 2000000,
                        denomination: "month",
                    },
                ];

            case "marketing-consultant":
                return [
                    {
                        title: "Basic",
                        description:
                            "Best option for personal use & for your next project.",
                        features: [
                            "Competitor Analysis",
                            "SWOT Analysis",
                            "Marketing Mix",
                            "Buyer Persona",
                        ],
                        price: 100000,
                        denomination: "PAX",
                    },
                    {
                        title: "Medium",
                        description:
                            "Best option for personal use & for your next project.",
                        features: [
                            "Competitor Analysis",
                            "Business Canvas",
                            "SWOT Analysis",
                            "Marketing Mix",
                            "Buyer Persona",
                            "Content Pillar",
                        ],
                        price: 200000,
                        denomination: "PAX",
                    },
                    {
                        title: "Premium",
                        description:
                            "Best option for personal use & for your next project.",
                        features: [
                            "Competitor Analysis",
                            "STP Analysis",
                            "Business Canvas",
                            "SWOT Analysis",
                            "Marketing Mix",
                            "Buyer Persona",
                            "Detail Buyer Persona",
                            "Content Pillar",
                        ],
                        price: 300000,
                        denomination: "PAX",
                    },
                ];
            default:
                return seoFeatures;
        }
    };

    return (
        <Layout>
            <Topic textAlign="left" title="Marketing">
                Gain your customer by recreating your visualization and
                information through social media as a medium for branding your
                product.
            </Topic>
            <div className=" flex justify-center">
                <Tab url={fullUrl} tabs={tabs} />
            </div>
            <div className=" flex flex-wrap">
                {CardsPrice("").map((cardprice, key) => {
                    return <CardPrice key={key} {...cardprice} />;
                })}
            </div>
        </Layout>
    );
}
