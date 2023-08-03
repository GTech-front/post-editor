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

  a {
    width: max-content;
    position: relative;
    color: #6f6f6f;
    text-decoration: none;
    transition: color 150ms ease-in-out;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 1px;
      pointer-events: none;
      background-color: #1ca8bb;
      transform-origin: 100% 50%;
      transform: scaleX(0);
      transition: transform 200ms ease-in-out;
    }

    &:hover {
      color: #0d0d0d;
      
      &::after {
        transform-origin: 0 50%;
        transform: scaleX(1);
      }
    }
  }
  
  button {
    display: block;
    border: none;
    background-color: transparent;
    transition: background-color 200ms ease-in-out, opacity 200ms ease-in-out;

    
    &:disabled {
      opacity: .5;
    }
    
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
