import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import AdminLayout from "resources/js/Layouts/AdminLayout";
import { useState } from "react";

const ImagesGallery: React.FC = ({ imagesGallery }: any) => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    if (!Array.isArray(imagesGallery)) {
        imagesGallery = [];
    }

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this image?")) {
            Inertia.delete(`/admin/images_gallery/${id}`, {
                onSuccess: () => {
                    setSuccessMessage("Image deleted successfully");
                    setTimeout(() => setSuccessMessage(null), 3000);
                    Inertia.reload();
                },
            });
        }
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setSuccessMessage("Copied to clipboard!");
        setTimeout(() => setSuccessMessage(null), 3000);
    };

    return (
        <AdminLayout>
            <div className="text-xl font-bold mb-4">
                Images Gallery Management
            </div>
            <InertiaLink
                href="/admin/images_gallery/create"
                className="btn btn-primary mb-5"
                >
                Add New Image
            </InertiaLink>
            <div className="flex flex-wrap gap-4">
                {successMessage && (
                    <div className="fixed bottom-0 left-1/2 mb-4 bg-gray-500 text-white py-2 px-4 rounded-lg shadow-lg z-50">
                        {successMessage}
                    </div>
                )}
                {imagesGallery.map((image: any) => (
                    <div
                        key={image.id}
                        className="relative bg-gray-400 border border-gray-200 rounded-lg overflow-hidden group"
                    >
                        <img
                            src={`/storage/${image.path}`}
                            alt={image.filename}
                            className="w-60 h-60 object-cover border border-gray-300"
                        />
                        <div className="absolute inset-0 w-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-4 transition-all duration-300">
                            <div className="text-white text-md mb-5">
                                {`Image: ${image.filename}`}
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleCopy(image.path)}
                                    className="text-sm mb-2 btn btn-outline border-gray-300 ml-2 px-2 py-0 rounded-md text-gray-300"
                                >
                                    Copy Path
                                </button>
                                <button
                                    onClick={() => handleDelete(image.id)}
                                    className="btn btn-danger text-md px-2 py-0"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
};

export default ImagesGallery;
