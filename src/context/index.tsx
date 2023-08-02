import React, { useCallback, useContext, useState } from "react";
import type { EditorContext, PreviewMode } from "./types";

const INITIAL_VALUES: EditorContext = {
  value: `---
slug: ''
title: ''
description: ''
avatar: '/images/avatars/'
author: ''
created_at: '2023-06-15 08:00:00'
banner: ''
thumbnail: '/images/thumbnails/'

---

# Start writing here
`,
  setValue: () => console.warn("INITIAL STATE"),

  previewMode: "side-by-side",
  togglePreviewMode: () => console.warn("INITIAL STATE"),
};

const PREVIEW_MODES: PreviewMode[] = ["off", "side-by-side", "fullscreen"];

const Context = React.createContext<EditorContext>(INITIAL_VALUES);

export const useEditorContext = () => useContext(Context);

export function EditorContextProvider({ children }: React.PropsWithChildren) {
  const [value, setValue] = useState(INITIAL_VALUES.value);
  const [previewMode, setPreviewMode] = useState<PreviewMode>(
    INITIAL_VALUES.previewMode
  );

  const togglePreviewMode = useCallback(() => {
    setPreviewMode((prevState) => {
      const prevStateIndex = PREVIEW_MODES.indexOf(prevState);

      return PREVIEW_MODES[(prevStateIndex + 1) % PREVIEW_MODES.length];
    });
  }, []);

  return (
    <Context.Provider
      value={{ value, setValue, previewMode, togglePreviewMode }}
    >
      {children}
    </Context.Provider>
  );
}
