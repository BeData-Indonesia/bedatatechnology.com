import { Link } from "@inertiajs/inertia-react";
import AdminLayout from "resources/js/Layouts/AdminLayout";
import Topic from "resources/js/components/molecules/Topic/Topic";
import {
    IBaseCollectionResponse,
    IBasePageProps,
} from "resources/js/entities/Page";
import { parseDate } from "resources/js/lib/utils";

const contactUsField = ["No", "Email", "Name", "Company", "Inquiry", "date"];

interface IDashboard extends IBasePageProps {
    contactUsData: TContactUsData;
}

type TContactUsData = IBaseCollectionResponse<IContactUs[]>;

interface IContactUs {
    company: string;
    created_at: string;
    email: string;
    id: number;
    inquiry: string;
    name: string;
    updated_at: string;
}

export default function Dashboard({ contactUsData }: IDashboard) {
    const { data, links, meta } = contactUsData;
    console.log(data);
    return (
        <AdminLayout>
            <div className=" bg-white min-h-screen px-8 py-12">
                <Topic title="Dashboard" textAlign="left" />
                <div className="overflow-x-auto">
                    <table className="table  z-0  border rounded-md">
                        <thead>
                            <tr>
                                {contactUsField.map((field, i) => {
                                    return <th key={i}>{field}</th>;
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d, i) => {
                                return (
                                    <tr key={d.id}>
                                        <th>{i + 1}</th>
                                        <td>{d.email}</td>
                                        <td>{d.name}</td>
                                        <td>{d.company}</td>
                                        <td>{d.inquiry}</td>
                                        <td>{parseDate(d.created_at)}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                {/*  */}
                <div className=" flex justify-center my-8">
                    <div className="join text-white">
                        <Link
                            href={links.first}
                            className="join-item btn btn-primary"
                        >
                            ««
                        </Link>
                        <Link
                            href={links.prev}
                            className="join-item btn btn-primary"
                        >
                            «
                        </Link>
                        <Link href={""} className="join-item btn btn-primary">
                            Page 22
                        </Link>
                        <Link
                            href={links.next}
                            className="join-item btn btn-primary"
                        >
                            »
                        </Link>
                        <Link
                            href={links.last}
                            className="join-item btn btn-primary"
                        >
                            »»
                        </Link>
                    </div>
                </div>
                {/*  */}
            </div>
        </AdminLayout>
    );
}
