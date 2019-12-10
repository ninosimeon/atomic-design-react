import React from "react";
import styled, { css } from "styled-components";
import { theme } from "styled-tools";

const label = css`
  font-family: ${theme("fonts.primary")};
  font-size: ${theme("fonts.size.14")};
  color: ${theme("colors.text.100")};
`;

const StyledLabel = styled.label`
  ${label}
`;

export default function Label(props) {
  return <StyledLabel {...props} />;
}
