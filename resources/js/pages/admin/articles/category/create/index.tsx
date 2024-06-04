import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";

interface Props {
    errors: any;
}

const CreateCategory: React.FC<Props> = ({ errors }) => {
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Inertia.post("/category/create", { name });
    };

    return (
        <div>
            <div className="text-xl font-bold my-8">Create Category</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-input mt-1 block w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Create</button>
                    <InertiaLink href="/category" className="btn btn-secondary ml-2">Cancel</InertiaLink>
                </div>
            </form>
        </div>
    );
};

export default CreateCategory;
