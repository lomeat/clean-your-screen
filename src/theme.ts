import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

export const theme = {
  white: "#fff",
  black: "#000",
};
