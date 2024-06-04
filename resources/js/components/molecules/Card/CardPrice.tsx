import * as React from "react";
import Button from "../../atoms/Button/Button";

interface ICardPrice {
    title: string;
    description: string;
    customPrice?: string;
    customDenomination?: string;
    price?: number;
    denomination?: string;
    features: string[];
    function?: () => any;
}

export default function CardPrice({
    title,
    description,
    price,
    denomination,
    features,
    customPrice,
    customDenomination,
}: ICardPrice) {
    return (
        <div className="flex flex-col p-6 mx-auto max-w-sm text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  min-h-[535px] justify-between">
            <div>
                <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
                <p className="font-light text-gray-500 sm:text-lg ">
                    {description}
                </p>
                <div className="flex justify-center items-baseline my-8">
                    {customPrice && (
                        <span className="mr-2 text-4xl font-extrabold">
                            {" "}
                            {customPrice}
                        </span>
                    )}
                    {price && (
                        <span className="mr-2 text-4xl font-extrabold">
                            Rp {price?.toLocaleString("id-ID")}
                        </span>
                    )}
                    {denomination && (
                        <span className="text-gray-500 ">/{denomination}</span>
                    )}
                </div>
                <ul className="mb-8 space-y-4 text-left">
                    {features.map((feature, key) => {
                        return (
                            <li
                                key={key}
                                className="flex items-center space-x-3"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>{feature}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Button size="md" variant="default" className="w-full  rounded-md ">
                Pilih Paket
            </Button>
        </div>
    );
}
