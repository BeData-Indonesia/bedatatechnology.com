import AdminLayout from "resources/js/Layouts/AdminLayout";
import Topic from "resources/js/components/molecules/Topic/Topic";
import { EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from "resources/js/components/atoms/Button/Button";
import draftToHtml from "draftjs-to-html";
import { Inertia } from "@inertiajs/inertia";
import { Input } from "resources/js/components/molecules/Input/Input";
import { useForm } from "react-hook-form";
import { usePage } from "@inertiajs/inertia-react";
import { Page } from "@inertiajs/inertia";
import Select, { MultiValue, ActionMeta } from 'react-select';

interface FormData {
  title: string;
  excerpt: string;
  description: string;
  image_url: string | null;
  small_image_url: string | null;
  categories: string[];
}

interface InertiaPageProps {
  categories: { id: number; name: string }[];
  [key: string]: any;
}

const CreateArticle: React.FC = () => {
  const { categories } = usePage<Page<InertiaPageProps>>().props;

  const categoryOptions = categories.map(category => ({
    value: category.id.toString(),
    label: category.name,
  }));

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [selectedCategories, setSelectedCategories] = useState<{ value: string, label: string }[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      image_url: null,
      small_image_url: null,
      categories: [],
    },
  });

  const onSubmit = (data: FormData) => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const categoryIds = selectedCategories.map(category => category.value);
    const formData = {
      ...data,
      content,
      categories: categoryIds,
    };

    Inertia.post("/admin/articles", formData, {
      onSuccess: () => alert("Article created successfully"),
      onError: (formErrors) => console.error("Form submission failed", formErrors),
    });
  };

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  const handleCategoryChange = (
    newValue: MultiValue<{ value: string; label: string }>,
    actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    setSelectedCategories(newValue as { value: string; label: string }[]);
  };

  return (
    <AdminLayout>
      <div>
        <Topic><div className="text-xl font-bold">Create Article</div></Topic>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
          <div className="mb-4">
            <Input
              label="Title"
              name="title"
              type="text"
              placeholder="Title"
              error={errors.title}
              register={register("title", { 
                required: "Title is required",
                maxLength: { value: 64, message: "Title must be at most 64 characters" },
              })}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Excerpt"
              name="excerpt"
              type="text"
              placeholder="Excerpt"
              error={errors.excerpt}
              register={register("excerpt", {
                required: "Excerpt is required",
                maxLength: { value: 64, message: "Excerpt must be at most 64 characters" },
              })}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Description"
              name="description"
              type="text"
              placeholder="Description"
              error={errors.description}
              register={register("description", {
                required: "Description is required",
                maxLength: { value: 64, message: "Description must be at most 64 characters" },
              })}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Image URL"
              name="image_url"
              type="text"
              placeholder="Image URL"
              error={errors.image_url}
              register={register("image_url", {
                maxLength: { value: 64, message: "Image URL must be at most 64 characters" },
              })}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Small Image URL"
              name="small_image_url"
              type="text"
              placeholder="Small Image URL"
              error={errors.small_image_url}
              register={register("small_image_url", {
                maxLength: { value: 64, message: "Small Image URL must be at most 64 characters" },
              })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="categories">
              Categories
            </label>
            <Select
              isMulti
              options={categoryOptions}
              value={selectedCategories}
              onChange={handleCategoryChange}
              classNamePrefix="react-select"
            />
            {errors.categories && <p className="text-red-500 text-xs mt-1">{errors.categories.message}</p>}
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
          <button type="submit" className="btn btn-primary mr-2">
            Create Article
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateArticle;