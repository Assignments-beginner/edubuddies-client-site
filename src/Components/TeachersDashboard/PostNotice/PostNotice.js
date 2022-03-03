import React, { useState } from "react";
import "./PostNotice.css";
import { useForm } from "react-hook-form";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const PostNotice = () => {
  const { handleSubmit } = useForm();

  const onSubmit = () => {};

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  return (
    <div className="container mx-auto px-4 md:px-11">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg w-full bg-white pb-7">
            <h3 className="text-3xl font-semibold text-center text-red-500 mb-6">
              Post A Notice For Students
            </h3>
            <div>
              <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="editor-container"
                editorClassName="text-area"
                toolbarClassName="toolbar-area"
              />
              <button
                className="bg-red-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:shadow-red-500 hover:bg-transparent hover:text-red-600 duration-150 focus:outline-none mr-1 mb-1 ease-linear transition-all mt-4"
                type="submit"
              >
                Post Notice
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostNotice;
