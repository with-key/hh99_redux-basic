import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "../../elem";
import { deleteTodo, getDocFB, toggleTodoFB } from "../../modules/todos";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <StContainer>
      <StId>{item.id}</StId>
      <StItemTitle>{item.title}</StItemTitle>
      <div>{item.desc}</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          dispatch(toggleTodoFB(item));
        }}
      >
        {item.done ? "✅" : "❌"}
      </div>
      <StButton>
        <Button
          onClick={() => {
            // dispatch(deleteTodo(item.id));
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
  border: 1px solid red;
  padding: 10px;
`; // html 스타일링

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
