import { useCallback, useState } from "react";
import { BsFiletypeMdx } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import { useEditorContext } from "context";

const Button = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;

  border-radius: 8px;
  font-size: 30px;

  &:not(:disabled):hover {
    background-color: rgba(255, 165, 0, 0.25);
  }
`;

function getMdxFileOrBlob(data: string[], fileName: string) {
  let file: File | Blob;

  try {
    file = new File(data, fileName, { type: "text/mdx" });
  } catch (e) {
    file = new Blob(data, { type: "text/mdx" });
  }

  return file;
}

export function ExportButton() {
  const [loading, setLoading] = useState(false);

  const { value, metadata } = useEditorContext();

  const handleMDXExport = useCallback(() => {
    try {
      setLoading(true);
      const fileName = `${metadata.slug}.mdx`;
      const file = getMdxFileOrBlob(value.split(""), fileName);

      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(file);
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [metadata.slug, value]);

  return (
    <>
      <Button
        disabled={loading}
        data-tooltip-id="preview"
        data-tooltip-content="Eksportuj do pliku MDX"
        onClick={handleMDXExport}
      >
        <BsFiletypeMdx />
      </Button>
      <Tooltip id="export" />
    </>
  );
}
