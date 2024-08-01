import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import AdminLayout from "resources/js/Layouts/AdminLayout";

interface Contact {
    id: number;
    email: string;
    name: string;
    company: string;
    inquiry: string;
}

interface Props {
    contactUs: Contact;
    errors: any;
}

const EditContactUs: React.FC<Props> = ({ contactUs, errors }) => {
    const [email, setEmail] = useState(contactUs.email);
    const [name, setName] = useState(contactUs.name);
    const [company, setCompany] = useState(contactUs.company);
    const [inquiry, setInquiry] = useState(contactUs.inquiry);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Inertia.put(
            `/admin/contact_us/edit/${contactUs.id}`,
            { email, name, company, inquiry },
            {
                onSuccess: () => {
                    setSuccessMessage("Contact us entry updated successfully");
                    setTimeout(() => setSuccessMessage(""), 3000);
                    Inertia.visit("/admin/contact_us");
                },
                onError: (errors) => {
                    // Handle errors
                    console.log(errors);
                }
            }
        );
    };

    return (
        <AdminLayout>
            <div className="text-xl font-bold my-8">Edit Contact Us Entry</div>
            {successMessage && (
                <div className="text-green-500">{successMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-input mt-1 block w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <div className="text-red-500">{errors.email}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="form-input mt-1 block w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && (
                        <div className="text-red-500">{errors.name}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-700">
                        Company:
                    </label>
                    <input
                        type="text"
                        id="company"
                        className="form-input mt-1 block w-full"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    {errors.company && (
                        <div className="text-red-500">{errors.company}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="inquiry" className="block text-gray-700">
                        Inquiry:
                    </label>
                    <textarea
                        id="inquiry"
                        className="form-input mt-1 block w-full"
                        value={inquiry}
                        onChange={(e) => setInquiry(e.target.value)}
                    />
                    {errors.inquiry && (
                        <div className="text-red-500">{errors.inquiry}</div>
                    )}
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                    <InertiaLink
                        href="/admin/contact_us"
                        className="btn btn-secondary ml-2"
                    >
                        Cancel
                    </InertiaLink>
                </div>
            </form>
        </AdminLayout>
    );
};

export default EditContactUs;
