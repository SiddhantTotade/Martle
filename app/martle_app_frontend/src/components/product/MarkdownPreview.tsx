import MarkdownEditor from "@uiw/react-markdown-editor";
import AppContainer from "../common/Container";
import { Typography } from "@mui/material";

const markdownVal = `<img src="https://pixlr.com/images/index/ai-image-generator-one.webp" width="200px" height="200px" style={{object-fit:cover}} />
`;

export default function MarkDownPreview() {
  return (
    <AppContainer sx={{ mt: 0, p: 0.5 }}>
      <Typography fontSize={20} fontWeight={"bold"}>
        Product Description
      </Typography>
      <AppContainer sx={{ mt: 2 }}>
        <MarkdownEditor.Markdown
          style={{
            listStyleType: "unset",
            background: "#fff",
            color: "#000",
            textAlign: "justify",
            fontSize: 13,
            fontWeight: 500,
            fontFamily: "Noto Serif, serif",
          }}
          source={markdownVal}
        />
      </AppContainer>
    </AppContainer>
  );
}
