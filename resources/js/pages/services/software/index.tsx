import Layout from "../../../components/organism/Layout/Layout";
import Topic from "../../../components/molecules/Topic/Topic";
import CardPrice from "../../../components/molecules/Card/CardPrice";
import { Route } from "../../../constant/Route";
import * as React from "react";

export default function Software() {
    const CardsPrice = [
        {
            title: "Custom",
            description:
                "Best option for personal use & for your next project.",
            features: [
                "Konsultasi Fitur",
                "Fitur Transaksi",
                "Database & Custom Cloud Storage",
                "Hosting & Domain",
                "Custom Design",
                "Analytics",
            ],
            customPrice: "Rp 2.500.000 - *",
        },
    ];
    const breadcrumbs = [
        { label: "Home", path: Route.home },
        { label: "Service", path: Route.services },
        { label: "Website", path: Route["services-website"] },
    ];
    return (
        <Layout>
            {/*  */}
            {/* <Breadcrumbs breadcrumbs={breadcrumbs} className=" -mb-4 -mt-4 " /> */}
            <Topic textAlign="left" title="Software Development">
                Develop your business and create your own website or apps, gain
                your business visualization information to create good selling.
            </Topic>

            <div className=" flex flex-wrap">
                {CardsPrice.map((cardprice, key) => {
                    return <CardPrice key={key} {...cardprice} />;
                })}
            </div>

            {/*  */}
        </Layout>
    );
}
