import { Preview } from "components/Preview";
import { TextArea } from "components/TextArea";
import { Toolbar } from "components/Toolbar";

import { Wrapper, EditorWrapper } from "./styles";

export function Editor() {
  return (
    <Wrapper>
      <Toolbar />
      <EditorWrapper>
        <TextArea />
        <Preview />
      </EditorWrapper>
    </Wrapper>
  );
}
