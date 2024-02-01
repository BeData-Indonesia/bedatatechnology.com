import { ReactNode } from "react";
import { Header } from "./Header/Header";
import Footer from "./Footer/Footer";

import * as React from "react";

interface IMetaProps {
    name: string;
    content: string;
}
interface IHelmetProps {
    title?: string;
    metas?: IMetaProps[];
}
interface ILayoutProps {
    children?: ReactNode;
    helmetProps?: IHelmetProps;
}

export default function Layout({ children, helmetProps }: ILayoutProps) {
    return (
        <>
            <div className=" font-poppins">
                <Header />
                <div className="px-5 py-3 lg:px-24 lg:py-16 flex flex-col gap-16 font-poppins">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}
