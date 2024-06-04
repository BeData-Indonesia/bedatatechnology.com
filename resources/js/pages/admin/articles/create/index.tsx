import AdminLayout from "resources/js/Layouts/AdminLayout";

import Topic from "resources/js/components/molecules/Topic/Topic";

import { EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from "resources/js/components/atoms/Button/Button";
import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";
import htmlToDraft from "html-to-draftjs";
import { parseDate } from "resources/js/lib/utils";
import { Inertia } from "@inertiajs/inertia";
import Input from "resources/js/components/molecules/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function CreateArticle(props: any) {
    type TDataArticle = {
        title: string;
        slug: string;
        featured: boolean;
        description: string;
        category: string;
        created_at: string;
        updated_at: string;
        content: string;
    };
    const schema = yup.object().shape({
        title: yup.string().email().required(),
        slug: yup.string().required(),
        featured: yup.string().required(),
        description: yup.string().required(),
        category: yup.string().required(),
        created_at: yup.string().required(),
        updated_at: yup.string().required(),
        content: yup.string().required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
        getFieldState,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const [rawHTML, setRawHTML] = useState("");

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        const getRawHTML = () => {
            return draftToHtml(convertToRaw(editorState.getCurrentContent()));
        };
        setRawHTML(getRawHTML());
    };

    const ViewHTML = () => {
        return parse(rawHTML);
    };

    const data = [
        {
            No: 1,
            Title: "Suscipit Voluptatem Maxime",
            slug: "suscipit-voluptatem-maxime",
            featured: true,
            Desc: "Cupiditate ullam aliquid vel ut id dolores voluptatum. Necessitatibus asperiores aut dolor consectetur nulla ut. Qui quia magnam autem itaque numquam quam dolor.",
            cateogry: "Technology",
            "Created At": "2023-11-26T04:48:07.778Z",
            "Updated At": "2024-03-05T16:12:45.575Z",
        },
        {
            No: 2,
            Title: "Quas Qui Facilis",
            slug: "quas-qui-facilis",
            featured: false,
            Desc: "Incidunt rerum ut enim expedita. Dolor cumque aperiam repellat eius voluptatem.",
            cateogry: "Art",
            "Created At": "2023-11-29T08:35:09.810Z",
            "Updated At": "2024-03-05T18:33:31.527Z",
        },
        {
            No: 3,
            Title: "Corrupti Aut Nihil",
            slug: "corrupti-aut-nihil",
            featured: true,
            Desc: "Voluptatum est repellendus distinctio voluptatem. Natus a eum vel quaerat laborum ut.",
            cateogry: "Sports",
            "Created At": "2023-12-11T02:12:26.017Z",
            "Updated At": "2024-03-06T02:07:50.330Z",
        },
        {
            No: 4,
            Title: "Expedita Est Recusandae",
            slug: "expedita-est-recusandae",
            featured: true,
            Desc: "Cupiditate autem voluptates repellendus unde qui. Aperiam aut voluptatem molestiae eius.",
            cateogry: "Science",
            "Created At": "2023-11-20T19:32:12.140Z",
            "Updated At": "2024-03-05T05:19:38.568Z",
        },
        {
            No: 5,
            Title: "Natus Non Ut",
            slug: "natus-non-ut",
            featured: false,
            Desc: "Voluptatem fugiat ratione placeat accusamus expedita. Aliquid maiores in nisi aliquam quae.",
            cateogry: "Health",
            "Created At": "2023-12-20T07:50:59.789Z",
            "Updated At": "2024-03-05T11:28:16.793Z",
        },
        {
            No: 6,
            Title: "Asperiores Quia Ut",
            slug: "asperiores-quia-ut",
            featured: false,
            Desc: "Corporis facilis unde et illum error. Consequatur odio nostrum molestiae accusantium odio.",
            cateogry: "Health",
            "Created At": "2023-12-17T10:57:47.666Z",
            "Updated At": "2024-03-05T07:02:14.979Z",
        },
        {
            No: 7,
            Title: "Dolorum Autem Tempore",
            slug: "dolorum-autem-tempore",
            featured: true,
            Desc: "Nihil perspiciatis natus in sapiente minima libero et. Numquam accusamus quo nemo atque voluptas.",
            cateogry: "Technology",
            "Created At": "2023-11-30T03:24:49.447Z",
            "Updated At": "2024-03-06T00:49:29.568Z",
        },
        {
            No: 8,
            Title: "Voluptatem Soluta Tempora",
            slug: "voluptatem-soluta-tempora",
            featured: false,
            Desc: "Officiis id consequatur nobis molestiae repellendus eum. Repudiandae velit unde ipsa distinctio.",
            cateogry: "Technology",
            "Created At": "2023-11-27T17:24:38.080Z",
            "Updated At": "2024-03-05T23:32:52.947Z",
        },
        {
            No: 9,
            Title: "Et Reprehenderit Voluptas",
            slug: "et-reprehenderit-voluptas",
            featured: true,
            Desc: "Recusandae in dolorum id velit. Nesciunt veniam et autem veniam consequuntur.",
            cateogry: "Science",
            "Created At": "2023-12-04T13:38:02.943Z",
            "Updated At": "2024-03-06T03:22:13.520Z",
        },
        {
            No: 10,
            Title: "Aut Soluta Nihil",
            slug: "aut-soluta-nihil",
            featured: true,
            Desc: "Eum illum ratione alias impedit. Quia quam qui quia libero.",
            cateogry: "Sports",
            "Created At": "2023-12-01T16:52:58.615Z",
            "Updated At": "2024-03-05T15:59:21.078Z",
        },
    ];
    const onSubmitHandler = async () => {
        await Inertia.post("contact-us", getValues());
    };
    return (
        <AdminLayout>
            <div className=" bg-white min-h-screen px-8 py-12">
                <Topic title="Article" textAlign="left" />
                <form className="" onSubmit={onSubmitHandler}>
                    <div className=" mb-4 flex flex-col gap-2 ">
                        <Input
                            error={errors.title}
                            label="Title"
                            register={register}
                            type="text"
                            name="title"
                        />
                        <Input
                            error={errors.category}
                            label="Category"
                            register={register}
                            type="text"
                            name="category"
                        />
                        <Input
                            error={errors.description}
                            label="Description"
                            register={register}
                            type="text"
                            name="description"
                        />
                        <Input
                            error={errors.featured}
                            label="Featured"
                            register={register}
                            type="text"
                            name="featured"
                        />
                        <Input
                            error={errors.content}
                            label="Content"
                            register={register}
                            type="text"
                            name="content"
                        />
                        <Input
                            error={errors.featured}
                            label="Featured"
                            register={register}
                            type="text"
                            name="featured"
                        />
                    </div>
                    <div className=" flex justify-end">
                        <Button type="submit" size="md" className=" rounded-md">
                            Send
                        </Button>
                    </div>
                </form>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                />
                <ViewHTML></ViewHTML>
            </div>
        </AdminLayout>
    );
}
