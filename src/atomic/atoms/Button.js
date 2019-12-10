import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ifProp, theme, withProp } from "styled-tools";

const backgroundColor = ({ disabled, type, palette }) => {
  if (disabled) return theme("colors.grayscale.200");
  if (type === "outline" || type === "ghost") return "transparent";

  return theme(`colors.${palette}.500`);
};

const foregroundColor = ({ disabled, type, palette }) => {
  if (disabled) return theme("colors.grayscale.400");
  if (type === "fill") return theme("colors.white.100");

  return theme(`colors.${palette}.500`);
};

const hover = ({ disabled, type, palette }) => {
  const background = () => {
    if (disabled) return theme("colors.grayscale.500");
    if (type === "outline") return "transparent";
    if (type === "ghost") return theme(`colors.${palette}.100`);

    return theme(`colors.${palette}.600`);
  };

  const color = () => {
    if (disabled) return theme("colors.grayscale.500");
    if (type === "outline" || type === "ghost")
      return theme(`colors.${palette}.600`);

    return theme("colors.white.100");
  };

  return css`
    background-color: ${background};
    color: ${color};
  `;
};

const focusActive = ({ disabled, type, palette }) => {
  const background = () => {
    if (disabled) return theme("colors.grayscale.500");
    if (type === "outline") return "transparent";
    if (type === "ghost") return theme(`colors.${palette}.100`);

    return theme(`colors.${palette}.600`);
  };

  const color = () => {
    if (disabled) return theme("colors.grayscale.500");
    if (type === "outline" || type === "ghost")
      return theme(`colors.${palette}.600`);

    return theme("colors.white.100");
  };

  const shadow = () => {
    if (disabled || type === "ghost") return "none";
    return theme(`colors.${palette}.100`);
  };

  return css`
    background-color: ${background};
    color: ${color};
    box-shadow: 0 0 0 2px ${shadow};
  `;
};

const button = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  height: 32px;
  width: ${ifProp("block", "100%", "auto")};
  min-width: 100px;
  padding: 0 16px;

  font-family: ${theme("fonts.text")};
  font-size: ${theme("fonts.size.14")};

  border-radius: ${theme("borderRadius.25")};
  border: 1px solid
    ${withProp(["type", "disabled", "palette"], (type, disabled, palette) =>
      type === "outline" && !disabled
        ? `${theme(`colors.${palette}.500`)}`
        : "transparent"
    )};

  background-color: ${backgroundColor};
  color: ${foregroundColor};

  cursor: ${ifProp("disabled", "default", "pointer")};
  pointer-events: ${ifProp("disabled", "none", "auto")};
  transition: background-color 150ms ease-out, color 150ms ease-out,
    border-color 150ms ease-out;

  &:hover {
    ${hover};
  }

  &:focus,
  &:active {
    ${focusActive};
  }

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  ${button}
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}

Button.propTypes = {
  palette: PropTypes.oneOf(["primary", "success", "danger", "warning", "info"]),
  type: PropTypes.oneOf(["fill", "outline", "ghost"]),
  disabled: PropTypes.bool,
  height: PropTypes.number,
  block: PropTypes.bool
};

Button.defaultProps = {
  palette: "primary",
  type: "fill",
  disabled: false,
  block: false
};
