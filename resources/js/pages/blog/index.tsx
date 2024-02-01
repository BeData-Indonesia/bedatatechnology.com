import Layout from "../../components/organism/Layout/Layout";
import Topic from "../../components/molecules/Topic/Topic";
import { gql, request } from "graphql-request";
import { useQuery } from "react-query";
import CardBlog from "../../components/molecules/Card/CardBlog";
import { IBlog } from "../../entities/Blog/Blog";
import * as React from "react";

export default function Blog() {
    const getPosts = async (): Promise<IBlog[]> => {
        const query = gql`
            query GetArticles {
                articles(where: { categories_every: { name: "blog" } }) {
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
        queryKey: ["getPosts"],
        queryFn: getPosts,
        staleTime: 10000,
    });

    return (
        <Layout>
            <Topic title="Article">
                Add insight by reading the article below.
            </Topic>
            <div className=" grid   grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4  place-items-center">
                {data?.map((blogInformation) => {
                    return (
                        <CardBlog
                            {...blogInformation}
                            key={blogInformation.id}
                        />
                    );
                })}
            </div>
        </Layout>
    );
}
