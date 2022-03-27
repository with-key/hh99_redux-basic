import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { flex } from "../style";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector(({ todos }) => todos.todos);
  return (
    <StContainer>
      <StTitle>예상기님의 Todo List</StTitle>
      <StMain>
        {todos.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </StMain>
    </StContainer>
  );
};

export default TodoList;

const StContainer = styled.section`
  margin-top: 50px;
`;

const StTitle = styled.div`
  height: 40px;
  font-size: 24px;
  font-weight: 700;
`;

const StMain = styled.main`
  ${flex("start")};
  flex-wrap: wrap;
  gap: 12px;
`;
