import React from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";

export default function MDEditor() {
  const [value, setValue] = React.useState("");

  return (
    <MarkdownEditor
      width="100%"
      height="60vh"
      value={value}
      visible
      onChange={(value) => setValue(value)}
      readOnly
      hideToolbar={false}
    />
  );
}
