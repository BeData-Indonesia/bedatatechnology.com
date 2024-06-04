import { FC } from "react";

import Typography, { EFontWeight } from "../../atoms/Typography/Typography";

import { cn } from "../../../lib/utils";
import * as React from "react";

export type TBreadcrumbsItem = {
    label: string;
    path: string;
};

interface PropsBreadcrumb {
    breadcrumbs: TBreadcrumbsItem[];
    className?: string;
}

const Breadcrumbs: FC<PropsBreadcrumb> = ({ breadcrumbs, className }) => {
    return (
        <div className={cn("flex mb-2 text-primary", className)}>
            {breadcrumbs.map(({ label, path }, index) => {
                const firstIndex = 0;
                const isLast = breadcrumbs.length === index + 1;
                return isLast ? (
                    <div className="flex">
                        {index > firstIndex && (
                            <div>
                                <Typography
                                    variant="l16"
                                    fontWeight={"semibold"}
                                >
                                    /
                                </Typography>
                            </div>
                        )}
                        <div key={label} className=" px-1 ">
                            <Typography
                                variant="l16"
                                fontWeight={EFontWeight.medium}
                            >
                                <div>{label}</div>
                            </Typography>
                        </div>
                    </div>
                ) : (
                    <div className=" flex">
                        {index > firstIndex && (
                            <div>
                                <Typography
                                    variant="l16"
                                    fontWeight={"semibold"}
                                >
                                    /
                                </Typography>
                            </div>
                        )}
                        <div
                            key={label}
                            className=" flex flex-row hover:bg-gray-100 px-1 rounded-sm"
                        >
                            <Typography variant="l16" fontWeight={"semibold"}>
                                <div>
                                    <a href={path}>{label}</a>
                                </div>
                            </Typography>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
