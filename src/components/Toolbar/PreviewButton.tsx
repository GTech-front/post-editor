import React from "react";
import { Tooltip } from "react-tooltip";
import { VscOpenPreview } from "react-icons/vsc";
import styled, { css, RuleSet } from "styled-components";

import { useEditorContext } from "context";
import type { PreviewMode } from "context/types";

const PREVIEW_MODE_STYLES: Record<PreviewMode, RuleSet<object>> = {
  off: css`
    background-color: transparent;

    &:hover {
      background-color: rgba(255, 165, 0, 0.25);
    }
  `,
  "side-by-side": css`
    background-color: rgba(255, 165, 0, 0.5);

    &:hover {
      background-color: rgba(255, 165, 0, 0.6);
    }
  `,
  fullscreen: css`
    background-color: rgba(255, 165, 0, 0.75);

    &:hover {
      background-color: rgba(255, 165, 0, 0.85);
    }
  `,
};

const Button = styled.button<{ $previewMode: PreviewMode }>`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;

  border: none;
  border-radius: 8px;
  background-color: transparent;

  cursor: pointer;
  font-size: 30px;

  transition: background-color 200ms ease-in-out;

  ${({ $previewMode }) => PREVIEW_MODE_STYLES[$previewMode]}
`;

const TOOLTIP_CONTENT: Record<PreviewMode, string> = {
  off: "Podgląd wyłączony",
  "side-by-side": "Podgląd side-by-side",
  fullscreen: "Podgląd pełnoekranowy",
};

export function PreviewButton() {
  const { previewMode, togglePreviewMode } = useEditorContext();

  return (
    <>
      <Button
        data-tooltip-id="preview"
        data-tooltip-content={TOOLTIP_CONTENT[previewMode]}
        onClick={togglePreviewMode}
        $previewMode={previewMode}
      >
        <VscOpenPreview />
      </Button>
      <Tooltip id="preview" />
    </>
  );
}
