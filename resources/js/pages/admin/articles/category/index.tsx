import AdminLayout from "resources/js/Layouts/AdminLayout";
import Topic from "resources/js/components/molecules/Topic/Topic";
import { EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { Editor } from "react-draft-wysiwyg";
import { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from "resources/js/components/atoms/Button/Button";
import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";
import htmlToDraft from "html-to-draftjs";
import { parseDate } from "resources/js/lib/utils";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Input from "resources/js/components/molecules/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Category {
    id: number;
    name: string;
}

interface Props {
    categories: Category[];
    errors: any;
}

const CategoryIndex: React.FC<Props> = ({ categories }) => {
    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this category?")) {
            Inertia.delete(`/admin/category/${id}`, {
                onSuccess: () => {
                    alert("Category deleted successfully");
                    Inertia.reload();
                },
            });
        }
    };

    return (
        <AdminLayout>
            <div className="text-xl font-bold my-8">Category Management</div>
            <InertiaLink
                href="/admin/category/create"
                className="btn btn-primary mb-4"
            >
                Create New Category
            </InertiaLink>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        {/* <th className="px-4 py-2">ID</th> */}
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            {/* <td className="border px-4 py-2">{category.id}</td> */}
                            <td className="border px-4 py-2">
                                {category.name}
                            </td>
                            <td className="border px-4 py-2">
                                <InertiaLink
                                    href={`/admin/category/edit/${category.id}`}
                                    className="btn btn-primary mr-2"
                                >
                                    Edit
                                </InertiaLink>
                                <button
                                    onClick={() => handleDelete(category.id)}
                                    className="btn btn-danger"
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

export default CategoryIndex;
