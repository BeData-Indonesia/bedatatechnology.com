import Layout from "../../../components/organism/Layout/Layout";
import Topic from "../../../components/molecules/Topic/Topic";
import CardPrice from "../../../components/molecules/Card/CardPrice";
import { Route } from "../../../constant/Route";
import * as React from "react";

export default function Website() {
    const CardsPrice = [
        {
            title: "Landing Page",
            description:
                "Elevate Your Online Presence with Our Landing Page Service",
            features: [
                "1-3 Pages",
                "SEO Optimization",
                "Copywriting",
                "Template Design",
                "Hosting & Domain 1 Tahun",
            ],
            price: 1200000,
            // denomination: "month",
        },
        {
            title: "Company Profile",
            description: "Crafting Company Profiles That Shine",
            features: [
                "1-3 Pages",
                "SEO Optimization",
                "Copywriting",
                "Template Design",
                "Database Build",
                "Hosting & Domain 1 Tahun",
            ],
            price: 1600000,
            // denomination: "month",
        },
        {
            title: "Web App",
            description: "Discover the Power of Our Web Application ",
            features: [
                "2-* Pages",
                "Konsultasi Fitur",
                "Fitur Transaksi",
                "Database & Custom Cloud Storage",
                "Hosting & Domain",
                "Custom Design",
                "Analytics",
            ],
            customPrice: "Rp 2.500.000 - *",
            // denomination: "month",
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
            <Topic textAlign="left" title="Website">
                Analyze your desire, customer needs, and potential market with
                big data, engage your selling using great marketing strategy
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
