import React from "react";
import styled, { css, RuleSet } from "styled-components";
import { useEditorContext } from "context";
import { PreviewMode } from "context/types";

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

const MarkdownWrapper = styled.section<{ $previewMode: PreviewMode }>`
  flex: 0 0 50%;
  max-height: calc(100vh - 57px);
  padding: 16px;

  overflow-y: auto;

  ${({ $previewMode }) => PREVIEW_MODE_STYLES[$previewMode]}
`;

export function Preview() {
  const { markdown, previewMode } = useEditorContext();

  return (
    <MarkdownWrapper
      $previewMode={previewMode}
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  );
}
