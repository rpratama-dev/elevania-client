import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const apiKey = 's9qvv7eipw34ld2ajw4fwwjky5vc4pfio18j2joe921pyx6e';
export default function MyTextEditor({ id, title, content, handleEditorChange }) {
  const editorRef = useRef(null);

  return (
    <div className="form-group">
      <label htmlFor="content">{title}</label>
      {/* <textarea id="elm1" name="area"></textarea> */}

      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        apiKey={process.env.REACT_APP_API_KEY_TINY || apiKey}
        name="content"
        id={id || 'content'}
        initialValue=""
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],

          toolbar_mode: 'floating',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help',
          style_formats: [
            { title: 'Bold text', inline: 'b' },
            { title: 'Red text', inline: 'span', styles: { color: '#ff0000' } },
            { title: 'Red header', block: 'h1', styles: { color: '#ff0000' } },
            { title: 'Example 1', inline: 'span', classes: 'example1' },
            { title: 'Example 2', inline: 'span', classes: 'example2' },
            { title: 'Table styles' },
            { title: 'Table row 1', selector: 'tr', classes: 'tablerow1' },
          ],
        }}
        value={content}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
}
