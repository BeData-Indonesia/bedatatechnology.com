import * as React from "react";
import { useState } from "react";
import { cn } from "../../../lib/utils";

interface ICardProps {
    image?: React.ReactNode;
    altImage?: string;
    title?: string;
    description?: string;
}

export default function Card1({
    image,
    altImage,
    title,
    description,
}: ICardProps) {
    const [isCardHover, setIsCardHover] = useState<boolean>(false);
    const handleMouseEnterCard = () => setIsCardHover(true);
    const handleMouseLeaveCard = () => setIsCardHover(false);
    return (
        <div
            onMouseEnter={handleMouseEnterCard}
            onMouseLeave={handleMouseLeaveCard}
            className="  transition-all duration-700 cursor-pointer hover:scale-110 hover:-translate-y-5 hover:tr w-80 h-72 bg-primary bg-opacity-10  rounded-2xl grid grid-rows-5 p-[18px]  gap-4 hover:bg-opacity-100"
        >
            <div className=" bg-white rounded-2xl row-span-3 max-h-[154px]"></div>
            <div className=" text-center flex flex-col gap-2 row-span-2">
                <h1
                    className={cn(
                        "  font-bold ",
                        (isCardHover && " text-black") || " text-primary"
                    )}
                >
                    {title}
                </h1>
                <p
                    className={cn(
                        (isCardHover && " text-white") || " text-gray-400"
                    )}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
