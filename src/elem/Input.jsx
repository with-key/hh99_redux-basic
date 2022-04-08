import React from "react";
import styled from "styled-components";

const Input = ({ size, ...props }) => {
  return <StInput {...props} />;
};

export default Input;

const StInput = styled.input`
  width: 200px;
  height: 35px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0 10px;
`;
