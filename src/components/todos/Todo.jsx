import React from "react";
import styled from "styled-components";

const Item = ({ item }) => {
  return (
    <StContainer>
      <StId>{item.id}</StId>
      <StItemTitle>{item.title}</StItemTitle>
      <div>{item.desc}</div>
    </StContainer>
  );
};

export default Item;

const StContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 25%;
  height: 200px;
  padding: 12px;
`;

const StId = styled.div`
  margin-bottom: 10px;
  color: #ddd;
`;

const StItemTitle = styled.div`
  color: green;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 5px;
`;
