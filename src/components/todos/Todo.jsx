import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "../../elem";
import { deleteTodo } from "../../modules/todos";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <StContainer>
      <StId>{item.id}</StId>
      <StItemTitle>{item.title}</StItemTitle>
      <div>{item.desc}</div>
      <StButton>
        <Button
          onClick={() => {
            dispatch(deleteTodo(item.id));
          }}
        >
          삭제
        </Button>
      </StButton>
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

const StButton = styled.div`
  margin-top: 80px;
  text-align: right;
`;
