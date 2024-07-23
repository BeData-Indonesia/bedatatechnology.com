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

import Pagination from "resources/js/components/molecules/Pagination/Pagination";
import { useLocation } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
}

const CategoryIndex: React.FC = () => {
  const { categories } = usePage().props as { categories?: Category[] };
  
  const searchParams = new URLSearchParams(window.location.search);
  const initialPage = parseInt(searchParams.get('page') || '1', 10);

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [categoriesPerPage, setCategoriesPerPage] = useState(10);
  const [displayedCategories, setDisplayedCategories] = useState<Category[]>([]);

  const totalPages = Math.ceil((categories?.length || 0) / categoriesPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * categoriesPerPage;
    const endIndex = startIndex + categoriesPerPage;
    const slicedCategories = (categories || []).slice(startIndex, endIndex);
    setDisplayedCategories(slicedCategories);
  }, [categories, currentPage, categoriesPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Update URL without reloading the page
    Inertia.visit(window.location.pathname + `?page=${page}`, { replace: true });
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this category?')) {
      Inertia.delete(`/admin/category_article/${id}`, {
        onSuccess: () => {
          alert('Category deleted successfully');
          Inertia.reload();
        },
      });
    }
  };

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <AdminLayout>
      <div className="">
        <div className="text-xl font-bold">Category Management</div>
        <InertiaLink
          href="/admin/category_article/create"
          className="btn btn-primary mb-4"
        >
          Create New Category
        </InertiaLink>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedCategories.map((category) => (
              <tr key={category.id}>
                <td className="border px-4 py-2">{category.name}</td>
                <td className="border px-4 py-2">
                  <InertiaLink
                    href={`/admin/category_article/edit/${category.id}`}
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

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </AdminLayout>
  );
};

export default CategoryIndex;