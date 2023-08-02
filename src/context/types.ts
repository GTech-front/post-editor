export interface EditorContext {
  value: string;
  setValue: (value: string) => void;

  previewMode: PreviewMode;
  togglePreviewMode: () => void;
}

export type PreviewMode = "off" | "side-by-side" | "fullscreen";
