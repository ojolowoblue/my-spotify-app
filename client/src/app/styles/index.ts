import { css } from "@emotion/react";

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
  }
  body,
  button {
    margin: 0;
    font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    background: #000;
  }
  button {
    cursor: pointer;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
export default GlobalStyles;
