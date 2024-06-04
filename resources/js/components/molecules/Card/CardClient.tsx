import * as React from "react";
interface CardClientProps {
    clientName?: string;
    clientCompany?: string;
    children?: string;
    clientProfile?: string;
}

export default function CardClient({
    clientCompany,
    clientName,
    children,
    clientProfile,
}: CardClientProps) {
    return (
        <div className=" h-[390px] w-[360px] bg-primary px-7 py-6 bg-opacity-10 rounded-3xl flex flex-col gap-5">
            {/* profile */}
            <div className=" flex  gap-5">
                <div className=" h-[70px] w-[70px] rounded-full  bg-secondary overflow-hidden">
                    <img
                        src={clientProfile}
                        alt="client profile"
                        className=" object-cover w-[100%] h-[100%]"
                    />
                </div>
                <div className=" pt-[5px]">
                    <p className=" text-primary font-bold text-xl leading-normal">
                        {clientName}
                    </p>
                    <p className=" text-primary font-normal text-base leading-normal">
                        {clientCompany}
                    </p>
                </div>
            </div>
            <div className=" text-primary font-normal leading-normal text-base text-justify">
                {children}
            </div>
        </div>
    );
}
