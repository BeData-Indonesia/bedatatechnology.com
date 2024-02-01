import Menu, { TMenu } from "../../../molecules/Menu/Menu";
import * as React from "react";
import { Route } from "../../../../constant/Route";
import CompanyLogo from "../../../atoms/CompanyLogo/CompanyLogo";

const listMenu: TMenu[] = [
    { label: "Home", value: Route.home },
    { label: "Service", value: Route.services },
    { label: "About Us", value: Route.solutions },
    { label: "Blog", value: Route.blog },
    { label: "Contact Us", value: Route.contactUs, highlight: true },
];

export const Header = () => {
    return (
        <>
            <div className=" mb-14 lg:mb-28"></div>
            <header className="h-14 lg:h-28 lg:px-24 px-5 flex justify-between items-center fixed top-0 w-full bg-white  z-20">
                <CompanyLogo isLink={true} />
                <Menu
                    className="hidden lg:flex"
                    listMenu={listMenu}
                    route="home"
                />
            </header>
        </>
    );
};
