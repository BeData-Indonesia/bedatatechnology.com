import Layout from "../../components/organism/Layout/Layout";
import Topic from "../../components/molecules/Topic/Topic";
import { ICardSolutions } from "../../components/molecules/Card/CardSolutions";
import { isScreenLG, isScreenXL } from "../../lib/utils";
import { IBlog } from "../../entities/Blog/Blog";
import request, { gql } from "graphql-request";
import { useQuery } from "react-query";
import CardBlog from "../../components/molecules/Card/CardBlog";
import * as React from "react";

import ReactPlayer from "react-player";

export default function Solutions(props) {
    const cardsContent: ICardSolutions[] = [
        {
            description:
                "Introduction is a brief description of the agency’s purpose, history, and core values.",
        },
        {
            description:
                "Services is an overview of the marketing services the agency provides, such as branding, advertising, public relations, digital marketing, and more.",
        },
        {
            description:
                "Expertise is a showcase of the agency’s expertise, such as their experience working with a specific industries, success stories, and awards.",
        },
    ];
    const options = {
        height: (isScreenXL && "306") || (isScreenLG && "200") || "169",
        width: (isScreenXL && "600") || (isScreenLG && "420") || "300",
        playerVars: {
            autoplay: 0,
            controls: 1,
        },
    };
    const getSolutions = async (): Promise<IBlog[]> => {
        const query = gql`
            query GetArticles {
                articles(where: { categories_every: { name: "solution" } }) {
                    id
                    slug
                    title
                    excerpt
                    display {
                        url
                        width
                        height
                        fileName
                    }
                    updatedAt
                    createdBy {
                        name
                    }
                }
            }
        `;
        type TResult = {
            articles: IBlog[];
        };

        let result: TResult = await request(
            process.env.REACT_APP_API_HYGRAPH as string,
            query
        );
        return result.articles;
    };

    const { data } = useQuery({
        queryKey: ["getSolutions"],
        queryFn: getSolutions,
        staleTime: 10000,
    });
    console.log(props);
    return (
        <Layout>
            <section>
                <div className=" grid grid-cols-1 gap-5 lg:grid-cols-2  ">
                    <Topic
                        title=" Solution Overview"
                        textAlign={(isScreenLG && "left") || "center"}
                        paragraphStyle=" text-justify hidden lg:flex"
                        className=" col-span-1 "
                    >
                        A marketing agency’s solution overview website would
                        provide a high-level description of the agency’s
                        services and capabilities. Including their approach to
                        marketing, experience, and case studies of their past
                        success. The purpose of the solution overview is to
                        introduce potential clients to the agency and convince
                        them that they are the the right choice for their
                        marketing needs
                    </Topic>
                    <div className=" col-span-1 px-8 flex justify-center items-center">
                        {/* <YouTube
                            videoId="i2SYXzF3LQY"
                            opts={options}
                            id="video"
                        /> */}
                        <ReactPlayer url={"https://youtu.be/i2SYXzF3LQY"} />
                    </div>
                    <Topic
                        title=" Solution Overview"
                        paragraphStyle=" lg:hidden"
                        textAlign={(isScreenLG && "left") || "center"}
                        titleStyle="hidden "
                        className=" col-span-1 "
                    >
                        A marketing agency’s solution overview website would
                        provide a high-level description of the agency’s
                        services and capabilities. Including their approach to
                        marketing, experience, and case studies of their past
                        success. The purpose of the solution overview is to
                        introduce potential clients to the agency and convince
                        them that they are the the right choice for their
                        marketing needs
                    </Topic>
                </div>
            </section>
            <section>
                <div className=" flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-around flex-wrap">
                    {data?.map((blogInformation) => {
                        return (
                            <CardBlog
                                {...blogInformation}
                                key={blogInformation.id}
                            />
                        );
                    })}
                </div>
            </section>
        </Layout>
    );
}
