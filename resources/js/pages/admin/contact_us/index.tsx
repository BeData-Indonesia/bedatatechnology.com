import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import AdminLayout from "resources/js/Layouts/AdminLayout";
import Topic from "resources/js/components/molecules/Topic/Topic";

interface Contact {
    id: number;
    email: string;
    name: string;
    company: string;
    inquiry: string;
}

interface ContactUsProps {
    contactUs: {
        data: Contact[];
        links: {
            self: string;
        };
    };
}

const ContactUsAdmin: React.FC<ContactUsProps> = ({ contactUs }) => {
    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this feedback?")) {
            Inertia.delete(`/admin/contact_us/${id}`, {
                onSuccess: () => {
                    alert("Feedback deleted successfully");
                    Inertia.reload();
                },
            });
        }
    };

    return (
        <AdminLayout>
            <div className="text-xl font-bold">Contact Us Management</div>
            <table className="table-auto w-full mt-6">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Company</th>
                        <th className="px-4 py-2">Inquiry</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contactUs.data.map((contact) => (
                        <tr key={contact.id}>
                            <td className="border px-4 py-2">
                                {contact.email}
                            </td>
                            <td className="border px-4 py-2">{contact.name}</td>
                            <td className="border px-4 py-2">
                                {contact.company}
                            </td>
                            <td className="border px-4 py-2">
                                {contact.inquiry}
                            </td>
                            <td className="border px-4 py-2">
                                <InertiaLink
                                    href={`/admin/contact_us/edit/${contact.id}`}
                                    className="btn btn-primary"
                                >
                                    Edit
                                </InertiaLink>
                                <button
                                    onClick={() => handleDelete(contact.id)}
                                    className="btn btn-danger ml-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AdminLayout>
    );
};

export default ContactUsAdmin;
