import { Link } from "@inertiajs/inertia-react";

const listMenu = [
    { url: "/admin", title: "Dashboard" },
    { url: "/admin/articles", title: "Articles" },
];

export default function AdminLayout({ children }: any) {
    return (
        <>
            <div className=" bg-white">
                <div className=" flex">
                    <div className="drawer lg:drawer-open">
                        <input
                            id="my-drawer-2"
                            type="checkbox"
                            className="drawer-toggle"
                        />
                        <div className="drawer-content">
                            {children}
                            <label
                                htmlFor="my-drawer-2"
                                className="btn   drawer-button lg:hidden"
                            >
                                Open drawer
                            </label>
                        </div>
                        <div className="drawer-side bg-primary">
                            <label
                                htmlFor="my-drawer-2"
                                aria-label="close sidebar"
                                className="drawer-overlay h-6"
                            ></label>
                            <div className=" min-h-full">
                                <ul className="menu p-4 w-80  flex flex-col gap-4 bg-primary  text-white">
                                    {listMenu.map((m, i) => {
                                        return (
                                            <li key={m.title + i} className="">
                                                <Link
                                                    href={m.url}
                                                    className="bg-secondary hover:bg-secondary hover:bg-opacity-90"
                                                >
                                                    {m.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
