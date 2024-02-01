import { useState } from "react";

import { MenuIcon } from "../../atoms/Icon";
import { checkScreen, cn } from "../../../lib/utils";
import { ScreenSize } from "../../../constant/screenSize";
import Link from "../../atoms/Link/Link";
import * as React from "react";

export type TMenu = {
    label: string;
    value: string;
    highlight?: boolean;
};

export interface IMenuProps {
    listMenu: TMenu[];
    className?: string;
    route: string;
}

const Menu: React.FC<IMenuProps> = ({ listMenu, className, route }) => {
    const [menuMobileVisible, setMenuMobileVisible] = useState<boolean>(false);

    const handleClickMenu = () => {
        menuMobileVisible
            ? setMenuMobileVisible(false)
            : setMenuMobileVisible(true);
    };

    const isScreenLg = checkScreen(ScreenSize.lg);

    if (isScreenLg) {
        return (
            <div
                className={cn(
                    "text-[20px] leading-[60px] text-secondary flex  gap-10 font-bold ",
                    className
                )}
            >
                {listMenu.map((item, index) => {
                    if (item.highlight) {
                        return (
                            <Link
                                href={item.value}
                                key={index}
                                className={cn(
                                    " text-secondary border-secondary border-2  px-4 rounded-md hover:bg-primary hover:text-white",
                                    route === item.value &&
                                        "bg-primary text-white"
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    }
                    return (
                        <Link
                            href={item.value}
                            key={index}
                            className={cn(
                                "hover:text-primary",
                                location.pathname === item.value &&
                                    "text-primary"
                            )}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        );
    }

    return (
        <div className={cn("lg:hidden")} onClick={handleClickMenu}>
            <MenuIcon />
            {menuMobileVisible && (
                <div className=" rounded-b-3xl shadow-lg lg:hidden fixed top-14 left-0 w-full pl-5 py-6 bg-white  flex flex-col gap-2">
                    {listMenu.map((item, index) => {
                        return (
                            <Link
                                href={item.value}
                                key={index}
                                className=" text-primary font-medium text-base leading-normal"
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Menu;
