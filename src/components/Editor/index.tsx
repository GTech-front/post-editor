import { Preview } from "../Preview";
import { TextArea } from "../TextArea";
import { Toolbar } from "../Toolbar";

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
