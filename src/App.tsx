import React from "react";
import { createGlobalStyle } from "styled-components";
import { Editor } from "./components/Editor";
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
