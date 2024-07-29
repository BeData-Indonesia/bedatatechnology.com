import AdminLayout from "resources/js/Layouts/AdminLayout";
import Topic from "resources/js/components/molecules/Topic/Topic";
import { EditorState, convertToRaw, convertFromHTML, ContentState } from "draft-js";
import "draft-js/dist/Draft.css";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from "resources/js/components/atoms/Button/Button";
import draftToHtml from "draftjs-to-html";
import { Inertia } from "@inertiajs/inertia";
import { Input } from "resources/js/components/molecules/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { usePage } from "@inertiajs/inertia-react";

interface Article {
    id: number;
    title: string;
    excerpt: string;
    description: string;
    image_url: string;
    small_image_url: string;
    content: string;
  }

interface FormData {
  title: string;
  excerpt: string;
  description: string;
  image_url?: string | null;
  small_image_url?: string | null;
}

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").max(64, "Title must be at most 64 characters"),
  excerpt: yup.string().required("Excerpt is required").max(64, "Excerpt must be at most 64 characters"),
  description: yup.string().required("Description is required").max(64, "Description must be at most 64 characters"),
  image_url: yup.string().max(64, "Image URL must be at most 64 characters").nullable(),
  small_image_url: yup.string().max(64, "Small Image URL must be at most 64 characters").nullable(),
});

const EditArticle: React.FC = () => {
    const pageProps = usePage().props;
  
    const article = (pageProps.article as Article | undefined) || null;
  
    if (!article) {
      return <div>Loading...</div>;
    }
  
  const blocksFromHTML = convertFromHTML(article.content || "");
  const initialContentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);

  const [editorState, setEditorState] = useState(EditorState.createWithContent(initialContentState));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      title: article.title,
      excerpt: article.excerpt,
      description: article.description,
      image_url: article.image_url,
      small_image_url: article.small_image_url,
    }
  });

  const onSubmit = (data: FormData) => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const formData = {
      ...data,
      content,
    };
    Inertia.put(`/admin/articles/${article.id}`, formData, {
      onSuccess: () => alert("Article updated successfully"),
      onError: (formErrors) => console.error("Form submission failed", formErrors),
    });
  };

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  return (
    <AdminLayout>
      <div>
        <Topic>EDIT ARTICLE</Topic>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
          <div className="mb-4">
            <Input
              label="Title"
              name="title"
              type="text"
              placeholder="Title"
              error={errors.title}
              register={register("title")}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Excerpt"
              name="excerpt"
              type="text"
              placeholder="Excerpt"
              error={errors.excerpt}
              register={register("excerpt")}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Description"
              name="description"
              type="text"
              placeholder="Description"
              error={errors.description}
              register={register("description")}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Image URL"
              name="image_url"
              type="text"
              placeholder="Image URL"
              error={errors.image_url}
              register={register("image_url")}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Small Image URL"
              name="small_image_url"
              type="text"
              placeholder="Small Image URL"
              error={errors.small_image_url}
              register={register("small_image_url")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="content">
              Content
            </label>
            <Editor
              editorState={editorState}
              onEditorStateChange={handleEditorChange}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
            />
          </div>
          <Button type="submit" variant="default">
            Update Article
          </Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditArticle;
