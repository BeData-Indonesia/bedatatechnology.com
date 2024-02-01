import * as React from "react";

export interface ICardSolutions {
    description?: string;
    image?: string;
    imageAlt?: string;
}

export default function CardSolutions({
    description,
    image,
    imageAlt,
}: ICardSolutions) {
    return (
        <div className=" w-[300px] h-[299px]  lg:h-[399px] lg:w-[400px] bg-primary rounded-3xl overflow-hidden">
            <div className=" h-[166px] lg:h-[220px] w-full bg-gray-400">
                <img src={image} alt={imageAlt} />
            </div>
            <div className=" py-7 px-8 ">
                <p className=" text-xs lg:text-base text-white text-justify">
                    {description}
                </p>
            </div>
        </div>
    );
}
