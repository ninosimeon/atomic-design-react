import React from "react";
import styled, { css } from "styled-components";
import { theme } from "styled-tools";
import { Label, Input } from "../atoms";

const label = css`
  font-family: ${theme("fonts.text")};
  font-size: ${theme("fonts.size.12")};
  text-transform: uppercase;
  color: ${theme("colors.text.100")};

  margin-bottom: 5px;
`;

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-bottom: 15px;

  label {
    ${label}
  }

  .error {
    ${label}

    margin-top: 5px;
    color: ${theme("colors.danger.500")};
  }
`;

export default function Field(props) {
  return (
    <StyledField>
      {props.label && <Label>{props.label}</Label>}
      <Input {...props} error={props.error} />
      {props.error && <Label className="error">{props.error}</Label>}
    </StyledField>
  );
}
