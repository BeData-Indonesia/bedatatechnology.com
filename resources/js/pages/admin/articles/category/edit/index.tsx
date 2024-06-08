import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import AdminLayout from "resources/js/Layouts/AdminLayout";

interface Props {
    category: { id: number; name: string };
    errors: any;
}

const EditCategory: React.FC<Props> = ({ category, errors }) => {
    const { url } = usePage();
    const [name, setName] = useState(category.name);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Inertia.put(
            `/admin/category_article/edit/${category.id}`,
            { name },
            {
                onSuccess: () => {
                    setSuccessMessage("Category updated successfully");
                    setTimeout(() => setSuccessMessage(""), 3000);
                    Inertia.visit("/admin/category_article");
                },
            }
        );
    };

    return (
        <AdminLayout>
            <div className="text-xl font-bold my-8">Edit Category</div>
            {successMessage && (
                <div className="text-green-500">{successMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
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
                <div>
                    <button
                        onClick={() => Inertia.visit("/admin/category_article")}
                        className="btn btn-primary"
                    >
                        Update
                    </button>
                    <InertiaLink
                        href="/admin/category_article"
                        className="btn btn-secondary ml-2"
                    >
                        Cancel
                    </InertiaLink>
                </div>
            </form>
        </AdminLayout>
    );
};

export default EditCategory;
