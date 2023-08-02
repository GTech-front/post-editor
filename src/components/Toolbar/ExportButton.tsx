import { BsFiletypeMdx } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import styled from "styled-components";

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

// TODO implement export feat
export function ExportButton() {
  return (
    <>
      <Button
        data-tooltip-id="preview"
        data-tooltip-content="Eksportuj do pliku MDX"
        onClick={() => {
          throw new Error("Implement it!");
        }}
      >
        <BsFiletypeMdx />
      </Button>
      <Tooltip id="export" />
    </>
  );
}
