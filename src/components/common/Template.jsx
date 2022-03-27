import React from "react";
import styled from "styled-components";

// Layout은 Template 컴포넌트로 컨트롤 한다.
const Template = ({ title, child }) => {
  return (
    <StContainer>
      <div>{title}</div>
      <div>{child}</div>
    </StContainer>
  );
};

export default Template;

const StContainer = styled.div;
