import React from "react";
import styled, { css, RuleSet } from "styled-components";

import { useEditorContext } from "context";
import type { PreviewMode } from "context/types";
import { MarkdownContent } from "./MarkdownContent";
import { MetadataContent } from "./MetadataContent";

const PREVIEW_MODE_STYLES: Record<PreviewMode, RuleSet<object>> = {
  off: css`
    display: none;
    flex-basis: 0;
  `,
  "side-by-side": css`
    flex-basis: 50%;
  `,
  fullscreen: css`
    flex-basis: 100%;
  `,
};

const Wrapper = styled.section<{ $previewMode: PreviewMode }>`
  flex: 0 0 50%;
  max-height: calc(100vh - 57px);
  padding: 32px;

  overflow-y: auto;

  ${({ $previewMode }) => PREVIEW_MODE_STYLES[$previewMode]}
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  max-width: 1100px;
  margin-inline: auto;
`;

const Banner = styled.span`
  width: 100%;
  aspect-ratio: 16 / 9;

  background-color: #eaedf0;
`;

export function Preview() {
  const { previewMode } = useEditorContext();

  return (
    <Wrapper $previewMode={previewMode}>
      <PostContent>
        <MetadataContent />
        <Banner />
        <MarkdownContent />
      </PostContent>
    </Wrapper>
  );
}
