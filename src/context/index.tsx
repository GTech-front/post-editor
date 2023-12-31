import React, { useCallback, useContext, useMemo } from "react";
import matter from "gray-matter";
import { useLocalStorage } from "hooks/useLocalStorage";
import type { EditorContext, Metadata, PreviewMode } from "./types";

const INITIAL_VALUES: EditorContext = {
  value: `---
slug: 'todo'
title: 'TODO'
description: 'TODO'
avatar: '/images/avatars/'
author: 'TODO'
created_at: ${Date.now()}
banner: '/images/banners/'
thumbnail: '/images/thumbnails/'
---

# Start writing here
`,
  setValue: () => console.warn("INITIAL STATE"),

  previewMode: "side-by-side",
  togglePreviewMode: () => console.warn("INITIAL STATE"),

  markdown: "# Start writing here",
  metadata: {
    slug: "",
    title: "",
    description: "",
    avatar: "",
    author: "",
    created_at: "",
    banner: "",
    thumbnail: "",
  },
};

const PREVIEW_MODES: PreviewMode[] = ["off", "side-by-side", "fullscreen"];

const Context = React.createContext<EditorContext>(INITIAL_VALUES);

export const useEditorContext = () => useContext(Context);

export function EditorContextProvider({ children }: React.PropsWithChildren) {
  const [value, setValue] = useLocalStorage(
    "editor",
    "value",
    INITIAL_VALUES.value
  );
  const [previewMode, setPreviewMode] = useLocalStorage<PreviewMode>(
    "editor",
    "previewMode",
    INITIAL_VALUES.previewMode
  );

  const { markdown, metadata } = useMemo(() => {
    const { content, data } = matter(value);

    const metadata: Metadata = {
      slug: data?.slug ?? "",
      title: data?.title ?? "",
      description: data?.description ?? "",
      avatar: data?.avatar ?? "",
      author: data?.author ?? "",
      created_at: data?.created_at ?? "",
      banner: data?.banner ?? "",
      thumbnail: data?.thumbnail ?? "",
    };

    return { markdown: content, metadata };
  }, [value]);

  const togglePreviewMode = useCallback(() => {
    setPreviewMode((prevState) => {
      const prevStateIndex = PREVIEW_MODES.indexOf(prevState);

      return PREVIEW_MODES[(prevStateIndex + 1) % PREVIEW_MODES.length];
    });
  }, [setPreviewMode]);

  return (
    <Context.Provider
      value={{
        value,
        setValue,
        previewMode,
        togglePreviewMode,
        metadata,
        markdown,
      }}
    >
      {children}
    </Context.Provider>
  );
}
