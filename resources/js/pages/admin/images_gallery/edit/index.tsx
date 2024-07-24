import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import AdminLayout from "resources/js/Layouts/AdminLayout";

interface Props {
    imagesGallery: {
        id: number;
        title: string;
        filename: string;
        path: string;
    };
    errors: any;
}

const EditImageGallery: React.FC<Props> = ({ imagesGallery, errors }) => {
    const [image, setImage] = useState<File | null>(null);
    const [title, setTitle] = useState<string>(imagesGallery.title);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        if (image) {
            formData.append("image", image);
        }
        Inertia.put(
            `/admin/images_gallery/edit/${imagesGallery.id}`,
            formData,
            {
                forceFormData: true,
                onSuccess: () => {
                    setSuccessMessage("Image updated successfully");
                    setTimeout(() => setSuccessMessage(""), 3000);
                    Inertia.visit("/admin/images_gallery");
                },
                onError: (errors) => {
                    console.log(errors);
                },
            }
        );
    };

    return (
        <AdminLayout>
            <div className="text-xl font-bold my-8">Edit Image</div>
            {successMessage && (
                <div className="text-green-500 mb-4">{successMessage}</div>
            )}
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="mt-4"
            >
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="form-input mt-1 block w-full"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && (
                        <div className="text-red-500">{errors.title}</div>
                    )}
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Select Image:
                    </label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                        className="form-input mt-1 block w-full"
                    />
                    {errors.image && (
                        <div className="text-red-500">{errors.image}</div>
                    )}
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

export default EditImageGallery;
