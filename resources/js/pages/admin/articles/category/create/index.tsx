import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import AdminLayout from "resources/js/Layouts/AdminLayout";

interface Props {
    errors: any;
}

const CreateCategory: React.FC<Props> = ({ errors }) => {
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Inertia.post("/admin/category_article/create", { name });
    };

    return (
        <AdminLayout>
            <div className="text-xl font-bold ">Create Category</div>
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
                    <button type="submit" className="btn btn-primary">
                        Create
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

export default CreateCategory;
