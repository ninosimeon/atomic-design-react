import React from "react";
import styled, { css } from "styled-components";
import { theme, ifProp } from "styled-tools";

const card = css`
  padding: 15px;
  border-radius: ${theme("borderRadius.4")};
  display: ${ifProp("flex", "flex", "block")};
`;

const StyledCard = styled.div`
  ${card};
`;

export default function Card(props) {
  return <StyledCard {...props} />;
}
