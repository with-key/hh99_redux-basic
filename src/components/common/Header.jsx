import React from "react";
import styled from "styled-components";

const Header = () => {
  return <StHeader>안녕하세요? 예상기님</StHeader>;
};

export default Header;

const StHeader = styled.header`
  height: 60px;
  border-bottom: #ddd solid 1px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 36px;
`;
