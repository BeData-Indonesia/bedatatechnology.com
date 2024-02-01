import Layout from "../components/organism/Layout/Layout";
import Illustration1 from "../assets/illustration1.png";
import Illustration1Small from "../assets/illustration1-small.png";
import BedataLaunIllustration from "../assets/launchIllustration.png";
import BedataLaunIllustrationSmall from "../assets/launchIllustration-small.png";

import { PlayIcon, RightArrowIcon } from "../components/atoms/Icon";
import { isScreenLG } from "../lib/utils";
import Topic from "../components/molecules/Topic/Topic";
import Card1 from "../components/molecules/Card/Card1";
import CardClient from "../components/molecules/Card/CardClient";

import { Route } from "../constant/Route";
import { IClientFeedback } from "../entities/Blog/ClientFeedback";
import { useQuery } from "react-query";
import request, { gql } from "graphql-request";
import ImageLoader from "../components/atoms/ImageLoader/ImageLoader";
import * as React from "react";
import Link from "../components/atoms/Link/Link";
export default function Home({ apiUrl }) {
    const getClientsFeedback = async (): Promise<IClientFeedback[]> => {
        const query = gql`
            query getFeedbacks {
                clientFeedbacks(first: 100) {
                    namaClient
                    id
                    company
                    feedback
                    photoClient {
                        url
                    }
                }
            }
        `;
        type TResultClientFeedbacks = {
            clientFeedbacks: IClientFeedback[];
        };

        let result: TResultClientFeedbacks = await request(
            apiUrl as string,
            query
        );
        return result.clientFeedbacks;
    };
    const { data: clientsFeedback, isLoading } = useQuery({
        queryKey: ["clientFeedbackHome"],
        queryFn: getClientsFeedback,
        staleTime: 10000,
    });

    return (
        <Layout>
            <section>
                <div className=" bg-primary bg-opacity-10 rounded-3xl  px-5 md:pb-8 pb-16 flex flex-col  gap-3 lg:grid lg:grid-cols-10  lg:px-20 items-center">
                    {/*  */}
                    <div className=" flex justify-center lg:col-start-5 lg:col-span-6 py-2">
                        <ImageLoader
                            imageUrl={Illustration1}
                            imageSmallUrl={Illustration1Small}
                            alt="bedata"
                            width={(isScreenLG && 650) || 150}
                            height={(isScreenLG && 650) || 150}
                        />
                    </div>
                    {/*  */}
                    <div className="flex-col flex  gap-3 lg:col-start-1 lg:row-start-1 lg:col-span-4 self-end">
                        <div className=" text-3xl text-primary leading-normal font-bold text-center lg:text-7xl  lg:leading-relaxed lg:text-left">
                            <p>Bigger with BIG DATA, Growth with</p>
                            <div className="  text-primary leading-normal font-bold text-center lg:text-left">
                                Be
                                <span className="  text-secondary">Data</span>
                            </div>
                        </div>
                        <div className=" text-xs font-normal text-primary leading-normal  text-center lg:text-left lg:text-xl">
                            <p>
                                Must be able to make changes to the business
                                that you run, every day, where will the future
                                of my business take me
                            </p>
                        </div>
                    </div>
                    <div className=" col-span-10 flex flex-col gap-2 self-center lg:self-start xl:flex-row  justify-center lg:justify-start lg:mt-3 lg:gap-4">
                        <Link
                            href={Route.solutions}
                            className=" font-semibold w-[113px] md:w-[212px] "
                            size={(isScreenLG && "md") || "sm"}
                            button={true}
                        >
                            Read more
                        </Link>

                        <Link
                            className=" font-semibold"
                            size={(isScreenLG && "md") || "sm"}
                            variant="ghost"
                            href={Route.solutions}
                            button={true}
                        >
                            <PlayIcon size={(isScreenLG && 15) || 10} /> Watch
                            more
                        </Link>
                    </div>
                    {/*  */}
                </div>
            </section>
            {/*  */}
            <section>
                <div className="bg-primary rounded-3xl  px-5  py-4  ">
                    <div className=" gap-3 items-center grid grid-cols-2">
                        <div>
                            <ImageLoader
                                imageUrl={BedataLaunIllustration}
                                imageSmallUrl={BedataLaunIllustrationSmall}
                                alt="bedata launch"
                                width={(isScreenLG && 600) || 150}
                                height={(isScreenLG && 400) || 100}
                            />
                        </div>
                        <div>
                            <p className=" text-white text-xs font-medium leading-[18px] sm:text-[28px] sm:leading-normal">
                                It’s your time to improve your business by using
                                Bedata services!
                            </p>
                            <Link
                                size={"md"}
                                className="hidden sm:flex mt-7"
                                variant="reverse_default"
                                href={Route.services}
                                button={true}
                            >
                                View More
                            </Link>
                        </div>
                    </div>
                    <div className=" flex justify-center mt-2">
                        <Link
                            size={"sm"}
                            className=" sm:hidden"
                            variant="reverse_default"
                            href={"/tes"}
                            button={true}
                        >
                            View More
                        </Link>
                    </div>
                </div>
            </section>
            {/*  */}
            <section>
                <div className=" flex flex-col gap-12">
                    <Topic title="Check our some recent works">
                        haCome check out some of the projects that have been
                        worked on recently by BeData. Don't miss your valuable
                        opportunity to grow your business with us!lo
                    </Topic>
                    <div className=" flex justify-around flex-wrap gap-8">
                        <Card1
                            title="Website Development - PT Cinta Kasih Sentosa Jaya"
                            altImage=""
                            description="Link Website/Link Media Sosial"
                        />
                        <Card1
                            title="Website Development - PT Cinta Kasih Sentosa Jaya"
                            altImage=""
                            description="Link Website/Link Media Sosial"
                        />
                        <Card1
                            title="Website Development - PT Cinta Kasih Sentosa Jaya"
                            altImage=""
                            description="Link Website/Link Media Sosial"
                        />
                    </div>
                </div>
            </section>
            {/*  */}
            <section>
                <div className=" flex-col flex gap-8">
                    <div>
                        <Topic textAlign="left" title="What our clients says">
                            <div className=" flex justify-between  flex-wrap gap-y-4">
                                <div>
                                    <p>
                                        These are testimonials from our clients
                                        who have used Bedata services
                                    </p>
                                </div>
                                <Link
                                    href={Route.clients}
                                    variant="reverse_default"
                                    className="border border-primary hidden lg:flex"
                                    size={(isScreenLG && "md") || "sm"}
                                    button={true}
                                >
                                    <p>View more</p>
                                    <RightArrowIcon size={18} />
                                </Link>
                            </div>
                        </Topic>
                    </div>
                    <div className=" flex justify-around  flex-wrap gap-4">
                        {!isLoading &&
                            clientsFeedback?.map((clientFeedback) => (
                                <CardClient
                                    key={clientFeedback.id}
                                    clientProfile={
                                        clientFeedback.photoClient.url
                                    }
                                    clientCompany={clientFeedback.company}
                                    clientName={clientFeedback.namaClient}
                                >
                                    {clientFeedback.feedback}
                                </CardClient>
                            ))}
                    </div>
                </div>
            </section>
            {/*  */}
            <section>
                <Topic title="Our Patner">
                    BeData has collaborated with various parties as follows
                </Topic>
            </section>
        </Layout>
    );
}
