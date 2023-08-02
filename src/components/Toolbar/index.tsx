import React from "react";
import styled from "styled-components";

import { PreviewButton } from "./PreviewButton";

const Wrapper = styled.aside`
  display: flex;
  justify-content: center;
  align-content: center;

  padding: 8px 16px;
  width: 100%;

  border-bottom: 1px solid #666;
`;

export function Toolbar() {
  return (
    <Wrapper>
      <PreviewButton />
    </Wrapper>
  );
}
