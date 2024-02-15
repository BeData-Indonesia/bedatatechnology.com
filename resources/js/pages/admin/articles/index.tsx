import AdminLayout from "resources/js/Layouts/AdminLayout";

import Topic from "resources/js/components/molecules/Topic/Topic";

import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState } from "react";

export default function Articles() {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    return (
        <AdminLayout>
            <div className=" bg-white min-h-screen px-8 py-12">
                <Topic title="Article" textAlign="left" />
                <Editor editorState={editorState} onChange={setEditorState} />;
            </div>
        </AdminLayout>
    );
}
