import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import AdminLayout from "resources/js/Layouts/AdminLayout";
import { useState } from "react";

const ImagesGallery: React.FC = ({ imagesGallery }: any) => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<any>(null);

    const handleOpenModal = (image: any) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

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
                        className="relative bg-gray-400 border border-gray-200 rounded-lg group w-60"
                    >
                        <img
                            src={`/storage/${image.path}`}
                            alt={image.filename}
                            className="w-full h-60 object-cover border border-gray-300 rounded-md"
                        />
                        <div className="absolute inset-0 w-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-4 transition-all duration-300 rounded-md">
                            <div className="text-white text-md mb-3 bg-black bg-opacity-40 p-4 rounded-sm w-full text-center overflow-hidden">
                                <p className="text-ellipsis overflow-hidden whitespace-nowrap">{`Title: ${image.title}`}</p>
                                <p className="text-ellipsis overflow-hidden whitespace-nowrap">{`Image: ${image.filename}`}</p>
                            </div>
                            <button
                                onClick={() => handleOpenModal(image)}
                                className="btn btn-primary text-sm px-4 py-2 mb-3"
                            >
                                View Details
                            </button>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleCopy(image.path)}
                                    className="text-sm mb-2 btn btn-outline border-gray-300 px-2 py-0 rounded-md text-gray-300"
                                    title={`Path: ${image.path}`}
                                >
                                    Copy Path
                                </button>
                                <button
                                    onClick={() => handleDelete(image.id)}
                                    className="btn btn-danger text-md px-4 py-0"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">
                            Image Details
                        </h2>
                        <p>
                            <strong>Title:</strong> {selectedImage.title}
                        </p>
                        <p>
                            <strong>Image:</strong> {selectedImage.filename}
                        </p>
                        <p>
                            <strong>Path:</strong> {selectedImage.path}
                        </p>
                        <button
                            onClick={() => handleCopy(selectedImage.path)}
                            className="text-sm btn btn-outline px-2 py-0 rounded-md mr-2"
                            title={`Path: ${selectedImage.path}`}
                        >
                            Copy Path
                        </button>
                        <button
                            onClick={handleCloseModal}
                            className="btn btn-primary mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default ImagesGallery;
