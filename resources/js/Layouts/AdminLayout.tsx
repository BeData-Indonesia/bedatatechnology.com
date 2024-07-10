import { Link } from "@inertiajs/inertia-react";

const listMenu = [
    { 
        title: "Dashboard", 
        url: "/admin", 
        submenu: [] 
    },
    { 
        title: "Articles", 
        submenu: [
            { title: "Menu Article", url: "/admin/articles" },
            { title: "Category Article", url: "/admin/category_article" }
        ] 
    },
];

export default function AdminLayout({ children }) {
    return (
        <div className="bg-white">
            <div className="flex">
                <div className="drawer lg:drawer-open">
                    <input
                        id="my-drawer-2"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content">
                        <div className="bg-white min-h-screen px-8 py-12">
                            {children}
                        </div>
                        <label
                            htmlFor="my-drawer-2"
                            className="btn drawer-button lg:hidden"
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
                        <div className="min-h-full">
                            <ul className="menu p-4 w-80 flex flex-col gap-4 bg-primary text-white">
                                {listMenu.map((m, i) => (
                                    <li key={m.title + i}>
                                        {m.submenu.length > 0 ? (
                                            <details open>
                                                <summary className="py-3">{m.title}</summary>
                                                <ul className="pl-6 py-3">
                                                    {m.submenu.map((sub, j) => (
                                                        <li key={sub.title + j} className="py-1">
                                                            <Link
                                                                href={sub.url}
                                                                className="hover:bg-secondary hover:bg-opacity-90"
                                                            >
                                                                {sub.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </details>
                                        ) : (
                                            m.url && (
                                                <Link
                                                    href={m.url}
                                                    className="hover:bg-secondary hover:bg-opacity-90"
                                                >
                                                    {m.title}
                                                </Link>
                                            )
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



