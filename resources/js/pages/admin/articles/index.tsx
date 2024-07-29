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
import { Input, TextArea } from "resources/js/components/molecules/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Pagination from "resources/js/components/molecules/Pagination/Pagination";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  image_url: string;
  small_image_url: string;
  content: string;
}

const ArticleIndex: React.FC = () => {
  const { articles } = usePage().props as { articles?: Article[] };

  const searchParams = new URLSearchParams(window.location.search);
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [articlesPerPage] = useState(10);
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);

  const totalPages = Math.ceil((articles?.length || 0) / articlesPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const slicedArticles = (articles || []).slice(startIndex, endIndex);
    setDisplayedArticles(slicedArticles);
  }, [articles, currentPage, articlesPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Update URL without reloading the page
    Inertia.visit(window.location.pathname + `?page=${page}`, { replace: true });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this article?")) {
      Inertia.delete(`/admin/articles/${id}`, {
        onSuccess: () => {
          alert("Article deleted successfully");
          Inertia.reload();
        },
      });
    }
  };

  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <AdminLayout>
      <div>
        <div className="text-xl font-bold">Article Management</div>
        <InertiaLink 
          href="/admin/articles/create"
          className="btn btn-primary mb-4"
        >
          Create New Article
        </InertiaLink>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedArticles.map((article) => (
              <tr key={article.id}>
                <td className="border px-4 py-2">
                  <InertiaLink 
                    href={`/admin/articles/${article.id}`} 
                    className="text-blue-600"
                  >
                    {article.title}
                  </InertiaLink>
                </td>
                <td className="border px-4 py-2">
                  <InertiaLink
                    href={`/admin/articles/edit/${article.id}`}
                    className="btn btn-primary mr-2"
                  >
                    Edit
                  </InertiaLink>
                  <button 
                    onClick={() => handleDelete(article.id)}
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

export default ArticleIndex;
