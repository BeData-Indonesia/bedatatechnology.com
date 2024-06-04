import * as React from "react";
import ImageLoader from "../../atoms/ImageLoader/ImageLoader";
import Link from "../../atoms/Link/Link";

export interface ICardService {
    description?: string;
    title?: string;
    onClick?: () => any;
    href: string;
    imageUrl: string;
    imageSmallUrl: string;
    altImage: string;
}

export default function CardService({
    description,
    href,
    title,
    imageSmallUrl,
    imageUrl,
    altImage,
}: ICardService) {
    return (
        <div className=" flex flex-col gap-5 w-full sm:w-[400px] h-[535px]  bg-primary rounded-3xl px-7 py-6">
            <div className="h-[187px] sm:h-[240px] overflow-hidden ">
                <ImageLoader
                    imageUrl={imageUrl}
                    imageSmallUrl={imageSmallUrl}
                    alt={altImage}
                />
            </div>
            <div className=" flex flex-col  gap-5 justify-around grow ">
                <h1 className=" text-white font-semibold text-xl text-center leading-relaxed">
                    {title}
                </h1>
                <p className="  text-white text-base text-center leading-relaxed">
                    {description}
                </p>
                <Link
                    variant="reverse_default"
                    size="md"
                    className=" w-full flex justify-center"
                    href={href}
                    button
                >
                    Pricing
                </Link>
            </div>
        </div>
    );
}
