import React from "react";
import { createGlobalStyle } from "styled-components";

import { Editor } from "components/Editor";
import { EditorContextProvider } from "context";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  svg, img {
    display: block;
  }
  
  button {
    display: block;
    border: none;
    background-color: transparent;
    transition: background-color 200ms ease-in-out;

    
    &:not(:disabled) {
      cursor: pointer;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <EditorContextProvider>
        <Editor />
      </EditorContextProvider>
    </>
  );
}

export default App;
