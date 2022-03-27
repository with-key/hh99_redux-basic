import React from "react";
import styled from "styled-components";

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
