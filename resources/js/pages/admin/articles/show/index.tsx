import AdminLayout from "resources/js/Layouts/AdminLayout";
import Topic from "resources/js/components/molecules/Topic/Topic";
import { usePage } from "@inertiajs/inertia-react";
import { Page } from "@inertiajs/inertia";

interface Article {
  title: string;
  excerpt: string;
  description: string;
  image_url: string;
  small_image_url: string;
  content: string;
  categories: { id: number; name: string }[];
}

interface InertiaPageProps {
  article: Article;
  [key: string]: any; 
}

const ShowArticle: React.FC = () => {
  const { article } = usePage<Page<InertiaPageProps>>().props;

  if (!article) {
    return <div>Loading...</div>;
  }

  const baseImageUrl = "/storage/";

  const fullImageUrl = article.image_url ? `${baseImageUrl}${article.image_url}` : null;
  const fullSmallImageUrl = article.small_image_url ? `${baseImageUrl}${article.small_image_url}` : null;

  return (
    <AdminLayout>
      <div className="max-w-2xl mx-auto">
        <Topic><div className="text-xl font-bold">{article.title}</div></Topic>

        <div className="mb-4">
          <p>
            <strong>Excerpt:</strong> {article.excerpt}
          </p>
        </div>

        <div className="mb-4">
          <p>
            <strong>Description:</strong> {article.description}
          </p>
        </div>

        <div className="mb-4">
          <strong>Categories:</strong>
          <ul className="list-disc list-inside">
            {article.categories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <strong>Main Image:</strong>
          {fullImageUrl && (
            <img src={fullImageUrl} alt={article.title} className="mb-4 w-full h-auto" />
          )}
        </div>
        
        <div className="mb-4">
          <strong>Small Image:</strong>
          {fullSmallImageUrl && (
            <img
              src={fullSmallImageUrl}
              alt={`${article.title} Small`}
              className="mb-4 w-full h-auto"
            />
          )}
        </div>

        <div className="mb-4">
          <strong>Content:</strong>
          <div
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default ShowArticle;