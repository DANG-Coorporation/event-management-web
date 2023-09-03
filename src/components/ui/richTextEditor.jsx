import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@chakra-ui/react";

export default function RichTextEditor(props) {
  const { onChangeText, defaultText } = props;
  const editorRef = useRef(null);
  const handleEditorChange = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      onChangeText(content); // Call the provided function to dispatch the action
    }
  };
  return (
    <>
      <Editor
        apiKey='lxezcq3kep8iys6wpxrpllmsvoznj9o183sk99ul222heoyk'
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={defaultText ?? "<p>Deskripsi kan eventmu</p>"}
        // onKeyUp={handleEditorChange}
        // onChange={handleEditorChange}
        // onClick={handleEditorChange}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <Button
        onClick={handleEditorChange}
        colorScheme='blue'
        margin={"10px"}
        width={"100%"}
      >
        Simpan
      </Button>
    </>
  );
}
