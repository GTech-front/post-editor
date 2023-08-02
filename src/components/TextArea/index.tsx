import React from "react";
import styled, { css, type RuleSet } from "styled-components";
import { useEditorContext } from "context";
import type { PreviewMode } from "context/types";

type Props = Omit<
  React.HTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange"
>;

const PREVIEW_MODE_STYLES: Record<PreviewMode, RuleSet<object>> = {
  off: css`
    flex-basis: 100%;
    border: none;
  `,
  "side-by-side": css`
    flex-basis: 50%;
  `,
  fullscreen: css`
    flex-basis: 0;
    display: none;
  `,
};

const StyledTextArea = styled.textarea<{ $previewMode: PreviewMode }>`
  // styles resets
  outline: none;
  border: none;
  border-radius: 0;
  resize: none;

  flex: 0 0 50%;
  max-height: calc(100vh - 57px);
  padding: 16px;

  border-right: 1px solid #666;
  font-size: 16px;
  color: #888;

  transition: color 200ms ease-in-out;
  overflow-y: auto;

  &:focus {
    color: #0a0a0a;
  }

  ${({ $previewMode }) => PREVIEW_MODE_STYLES[$previewMode]}
`;

export function TextArea(props: Props) {
  const { value, setValue, previewMode } = useEditorContext();

  return (
    <StyledTextArea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      $previewMode={previewMode}
      {...props}
    />
  );
}
