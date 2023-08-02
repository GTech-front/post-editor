import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
  padding: 32px;

  overflow-y: auto;

  ${({ $previewMode }) => PREVIEW_MODE_STYLES[$previewMode]}
`;

const MarkdownContent = styled.div`
  --color-primary: #1ca8bb;
  --color-primary-faded: #15808f;
  --color-neutral-800: #202020;
  --color-neutral-300: #d7d7d7;

  --main-font: "Roboto", sans-serif;

  --bold: 700;

  --font-size-xxl4: 2.5rem;
  --font-size-xxl3: 2rem;
  --font-size-xxl2: 1.75rem;
  --font-size-xxl: 1.375rem;
  --font-size-xl: 1.25rem;
  --font-size-lg: 1.125rem;

  --main-spacing: 10px;

  max-width: 1100px;
  margin-inline: auto;

  color: var(--color-neutral-800);
  font-family: var(--main-font);
  line-height: 1.55em;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-neutral-800);
    margin-bottom: 0.75em;
    line-height: 1.25;
    font-weight: var(--bold);

    &:not(:first-child) {
      margin-block: 1.75em 0.75em;
    }
  }

  h1 {
    font-size: var(--font-size-xxl4);
  }
  h2 {
    font-size: var(--font-size-xxl3);
  }
  h3 {
    font-size: var(--font-size-xxl2);
  }
  h4 {
    font-size: var(--font-size-xxl);
  }
  h5 {
    font-size: var(--font-size-xl);
  }
  h6 {
    font-size: var(--font-size-lg);
  }

  p:not(:last-child) {
    margin-bottom: 0.5em;
  }

  strong {
    color: var(--color-primary-faded);
  }

  a {
    font-style: italic;
  }

  ul,
  ol {
    padding-left: 2.5em;
    padding-right: 1em;

    li {
      margin-block: 0.75em;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  hr {
    margin-block: 2em;
    border: 0;
    border-bottom: 1px solid var(--color-neutral-300);
  }

  blockquote {
    border-left: 3px solid var(--color-primary);
    margin-block: 1em;
    padding-left: var(--main-spacing);
    font-style: italic;
  }

  table {
    width: 100%;
    margin-block: 1.5em;
    border: 1px solid var(--color-neutral-300);
    border-collapse: collapse;

    &:last-child {
      margin-bottom: 0;
    }
  }

  td,
  tr,
  th {
    border: 1px solid var(--color-neutral-300);
    padding: var(--main-spacing) * 0.5 var(--main-spacing);
  }

  th {
    text-align: center;
  }
`;

export function Preview() {
  const { markdown, previewMode } = useEditorContext();

  return (
    <MarkdownWrapper $previewMode={previewMode}>
      <MarkdownContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </MarkdownContent>
    </MarkdownWrapper>
  );
}
