import * as React from "react";
import { Route } from "../../../constant/Route";
import { IBlog } from "../../../entities/Blog/Blog";
import { parseDate } from "../../../lib/utils";

import Link from "../../atoms/Link/Link";

export default function CardBlog({
    display,
    excerpt,
    id,
    slug,
    title,
    createdBy,
    updatedAt,
}: IBlog) {
    return (
        <div className=" h-[466px] min-w-[360px] max-w-[396px] border-[2px] border-black   rounded-xl flex flex-col overflow-hidden">
            <div className=" w-full h-[191px] bg-black">
                <img
                    src={display.url}
                    alt={display.fileName}
                    className=" object-cover w-full h-[191px]"
                />
            </div>
            <div className=" grow px-4 py-2 flex flex-col">
                <div className=" flex text-black opacity-50  text-xs gap-2 mt-3 ">
                    <div className="">{createdBy?.name}</div>
                    <div>|</div>
                    <div>{updatedAt && parseDate(updatedAt)}</div>
                </div>
                <div className=" flex flex-col  grow  relative mt-2">
                    <p className=" text-base font-bold leading-8">{title}</p>
                    <p className=" text-base  font-normal">{excerpt}</p>
                    <div className=" absolute w-full bottom-2 ">
                        <Link
                            size="md"
                            className=" w-full rounded-2xl"
                            href={Route.blog + "/" + slug}
                        >
                            Baca Selengkapnya
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
