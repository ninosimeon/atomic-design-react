import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { theme, ifProp } from "styled-tools";

const hover = ({ disabled, error }) => {
  const color = () => {
    if (disabled) return theme("colors.grayscale.300");
    if (error) return theme("colors.danger.500");

    return theme("colors.primary.500");
  };

  return css`
    border-color: ${color};
  `;
};

const focusActive = ({ disabled, error }) => {
  const color = () => {
    if (disabled) return theme("colors.grayscale.300");
    if (error) return theme("colors.danger.500");

    return theme("colors.primary.500");
  };

  return css`
    border-color: ${color};
  `;
};

const input = css`
  display: inline-flex;
  align-items: center;
  justify-content: start;
  line-height: 32px;
  height: 32px;
  padding: 0 11px;

  background-color: ${ifProp(
    "disabled",
    theme("colors.grayscale.100"),
    "trasparent"
  )};

  border: 1px solid
    ${ifProp(
      "error",
      theme("colors.danger.500"),
      theme("colors.grayscale.300")
    )};
  border-radius: ${theme("borderRadius.4")};

  font-family: ${theme("fonts.text")};
  font-size: ${theme("fonts.size.14")};
  color: ${theme("colors.text.100")};

  &:hover {
    ${hover}
  }

  &:focus,
  &:active {
    ${focusActive}
  }
`;

const StyledInput = styled.input`
  ${input}
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}

Input.propTypes = {
  disabled: PropTypes.bool
};

Input.defaultProps = {
  disabled: false
};
