import React from "react";
import styled from "styled-components";

const Button = ({ children, ...rest }) => {
  return <StBtn {...rest}>{children}</StBtn>;
};

export default Button;

const StBtn = styled.button`
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 120px;
  height: 40px;
  background-color: #fff;
  cursor: pointer;
  :hover {
    background-color: #eee;
  }
`;
