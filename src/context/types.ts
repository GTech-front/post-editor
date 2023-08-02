export interface EditorContext {
  value: string;
  setValue: (value: string) => void;

  previewMode: PreviewMode;
  togglePreviewMode: () => void;

  markdown: string;
  metadata: Metadata;
}

export type PreviewMode = "off" | "side-by-side" | "fullscreen";

export interface Metadata {
  slug: string;
  title: string;
  description: string;
  avatar: string;
  author: string;
  created_at: Date | string;
  banner: string;
  thumbnail: string;
}
