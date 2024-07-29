import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { useState } from "react";
import AdminLayout from "resources/js/Layouts/AdminLayout";

const CreateImageGallery: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [title, setTitle] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();
        if (image) {
            formData.append("image", image);
            formData.append("title", title);
            Inertia.post("/admin/images_gallery/create", formData, {
                forceFormData: true,
            });
        }
    };

    return (
        <AdminLayout>
            <div className="text-xl font-bold">Upload New Image</div>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="mt-4"
            >
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="form-input mt-1 block w-full mb-2"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Select Image
                    </label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Upload
                </button>
                <InertiaLink
                    href="/admin/images_gallery"
                    className="btn btn-secondary ml-2"
                >
                    Cancel
                </InertiaLink>
            </form>
        </AdminLayout>
    );
};

export default CreateImageGallery;
