import React from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import GlobalStyle from "./globalstyle";
import theme from "./theme";

export default function ThemeProvider({ children }) {
  return (
    <ThemeProviderStyled theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        {children}
      </React.Fragment>
    </ThemeProviderStyled>
  );
}
