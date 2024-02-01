import * as React from "react";

interface ContentFragment {
    type: string;
    children: any;
    content: any;
}
const ContentArticle = ({ type, children, content }: ContentFragment) => {
    let modifiedText = children[0].text;

    switch (type) {
        case "heading-three":
            return (
                <div className=" my-5 font-semibold text-4xl ">
                    <React.Fragment>{children[0].text}</React.Fragment>
                </div>
            );
        case "heading-four":
            return (
                <div className="my-5 font-semibold text-2xl">
                    <React.Fragment>{children[0].text}</React.Fragment>
                </div>
            );
        case "block-quote":
            return (
                <div
                    style={{ borderLeft: "8px solid white", padding: " 8px" }}
                    className="border-8  bg-black bg-opacity-20"
                >
                    {modifiedText.map((item: any, i: any) => (
                        <p className="text-xl my-2 opacity-80" key={i}>
                            {modifiedText}
                        </p>
                    ))}
                </div>
            );
        case "paragraph":
            return (
                <p className="dark:opacity-60  text-left  text-base my-2 leading-8 tracking-wide">
                    {children[0].text}
                </p>
            );

        case "image":
            return (
                <img
                    alt={content.title}
                    height={content.height}
                    width={content.width}
                    src={content.src}
                    className="mx-auto w-full my-8 rounded-lg"
                />
            );
        default:
            return modifiedText;
    }
};
export default ContentArticle;
