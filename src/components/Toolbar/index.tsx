import React from "react";
import styled from "styled-components";

import { ExportButton } from "./ExportButton";
import { PreviewButton } from "./PreviewButton";

const Wrapper = styled.aside`
  display: flex;
  gap: 10px;
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
      <ExportButton />
    </Wrapper>
  );
}
