import BedataLogo from "../../../assets/Logo.png";
import { checkScreen } from "../../../lib/utils";
import { ScreenSize } from "../../../constant/screenSize";

import { Route } from "../../../constant/Route";
import Link from "../Link/Link";
import * as React from "react";

interface ICompanyLogo {
    isLink?: boolean;
    className?: string;
    withCompanyName?: boolean;
}

export default function CompanyLogo({
    withCompanyName,
    isLink,
    ...props
}: ICompanyLogo) {
    const isScreenLg = checkScreen(ScreenSize.lg);

    const sizeLogo = isScreenLg ? 60 : 30;
    if (isLink) {
        return (
            <Link
                href={Route.home}
                className="font-poppins text-[20px] lg:text-[40px] text-5xl leading-normal  text-primary font-extrabold flex items-center"
            >
                <span className=" mr-1 lg:mr-5 ">
                    <img
                        src={BedataLogo}
                        alt="Bedata"
                        height={sizeLogo}
                        width={sizeLogo}
                    />
                </span>
                {withCompanyName && (
                    <>
                        Be<span className=" text-secondary">Data</span>
                    </>
                )}
            </Link>
        );
    }
    return (
        <div
            className="font-poppins text-[20px] lg:text-[40px] text-5xl leading-normal  text-primary font-extrabold flex items-center"
            {...props}
        >
            <span className=" mr-1 lg:mr-5 ">
                <img
                    src={BedataLogo}
                    alt="Bedata"
                    height={sizeLogo}
                    width={sizeLogo}
                />
            </span>
            {withCompanyName && (
                <>
                    Be<span className=" text-secondary">Data</span>
                </>
            )}
        </div>
    );
}
