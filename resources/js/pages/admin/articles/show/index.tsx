import { usePage } from "@inertiajs/inertia-react";
import AdminLayout from "resources/js/Layouts/AdminLayout";
import { InertiaLink } from "@inertiajs/inertia-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  image_url: string;
  small_image_url: string;
  content: string;
}

const ShowArticle: React.FC = () => {
  const pageProps = usePage().props;
  
  const article = (pageProps.article as Article | undefined) || null;

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <AdminLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <img src={article.image_url} alt={article.title} className="mb-4" />
        <div className="mb-4">
          <p><strong>Excerpt:</strong> {article.excerpt}</p>
        </div>
        <div className="mb-4">
          <p><strong>Description:</strong> {article.description}</p>
        </div>
        <div className="mb-4">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
        <InertiaLink href="/admin/articles" className="btn btn-primary">
          Back to Articles
        </InertiaLink>
      </div>
    </AdminLayout>
  );
};

export default ShowArticle;

