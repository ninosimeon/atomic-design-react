import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { theme } from "styled-tools";

const packIcon = {
  remix: "remixicon-"
};

const size = ({ size }) => {
  return theme(`fonts.size.${size}`);
};

const color = ({ color }) => {
  return theme(`colors.${color}.500`);
};

const icon = css`
  font-size: ${size};
  color: ${color};
`;

const StyledIcon = styled.i`
  ${icon}
`;

export default function Icon(props) {
  return (
    <StyledIcon
      className={`${packIcon[props.pack]}${[props.type]}`}
      {...props}
    />
  );
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  pack: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
};

Icon.defaultProps = {
  pack: "remix",
  size: 14,
  color: null
};
