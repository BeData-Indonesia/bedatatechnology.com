import CompanyLogo from "../../../atoms/CompanyLogo/CompanyLogo";
import { IGIcon, LinkedinIcon, WAIcon, YoutubeIcon } from "../../../atoms/Icon";
import { checkScreen } from "../../../../lib/utils";
import { ScreenSize } from "../../../../constant/screenSize";
import { Route } from "../../../../constant/Route";
import * as React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Footer() {
    const isScreenLG = checkScreen(ScreenSize.lg);

    return (
        <div className="px-6 py-8 lg:px-24 lg:py-8 bg-secondary bg-opacity-10 text-secondary">
            <CompanyLogo />
            <div className=" flex flex-col gap-3 sm:grid sm:grid-cols-3 lg:grid w-full items-start  lg:grid-cols-6     lg:gap-16  ">
                <section className="sm:col-span-2  lg:col-span-3 text-base leading-normal lg:leading-8">
                    <p className=" text-primary font-bold mt-4">
                        Bedata Indonesia
                    </p>
                    <p>
                        BeData is a provider of marketing services and website
                        creation for those of you who want and are currently
                        growing your business.
                    </p>
                    <p className="text-primary font-bold">Lokasi :</p>
                    <p>Surabaya</p>
                </section>
                <section className="flex flex-col self-start  lg:col-span-2 lg:grid lg:grid-cols-2 text-base mt-2 lg:mt-0 leading-normal lg:leading-8">
                    <div className="  lg:col-span-1">
                        <div className=" text-primary font-bold">
                            About Bedata
                        </div>
                        <div className=" flex flex-col">
                            <Link href={Route.solutions}>About us</Link>
                            <Link href={Route.contactUs}>Contact us</Link>
                            <Link href={"/"}>FAQs</Link>
                        </div>
                    </div>
                    <div className=" lg:col-span-1 hidden lg:flex lg:flex-col">
                        <div className=" text-primary font-bold">
                            Our Sevices
                        </div>
                        <div className=" flex flex-col">
                            <Link href={Route["services-website"]}>
                                Website
                            </Link>
                            <Link href={Route["services-software-dev"]}>
                                Software Development
                            </Link>
                            <Link href={Route["services-marketing"]}>
                                Marketing
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col self-start  lg:col-span-1 text-base leading-normal gap-3">
                    <div className=" text-primary font-bold">
                        Get to know us
                    </div>
                    <div className=" flex gap-3 ">
                        <Link href={"/"}>
                            <WAIcon size={32} />l
                        </Link>
                        <Link
                            href={
                                "https://instagram.com/bedata.id?igshid=MzRlODBiNWFlZA=="
                            }
                        >
                            <IGIcon size={32} />
                        </Link>
                        <Link
                            href={
                                "https://www.youtube.com/channel/UCowTygYUeKIXAsxXg0CuRLQ"
                            }
                        >
                            <YoutubeIcon size={32} />
                        </Link>
                        <Link
                            href={
                                "https://www.linkedin.com/company/bedatatech/"
                            }
                        >
                            <LinkedinIcon size={32} />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
