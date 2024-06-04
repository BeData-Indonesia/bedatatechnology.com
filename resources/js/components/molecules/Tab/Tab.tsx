import * as React from "react";
import { cn } from "../../../lib/utils";
import { useParams } from "../../../hooks/useParams";

type TTab = {
    title: string;
    param: string;
};
interface ITab {
    tabs: TTab[];
    url: string;
}

const Tab = ({ tabs, url }: ITab) => {
    const { handleSetParam, getSearchParamsObj } = useParams(url);
    let params = getSearchParamsObj();
    let paramMarketing = params["marketing"] || "SEO";
    return (
        <div>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {tabs.map((tab, key) => {
                    return (
                        <li
                            onClick={() => {
                                handleSetParam({ marketing: tab.param });
                            }}
                            className="mr-2"
                            key={key}
                        >
                            <div
                                className={cn(
                                    " cursor-pointer inline-block px-4 py-3  rounded-lg active",
                                    paramMarketing === tab.param
                                        ? "text-white bg-secondary"
                                        : "hover:text-gray-900 hover:bg-secondary dark:hover:text-white"
                                )}
                                aria-current="page"
                            >
                                {tab.title}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Tab;
