import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { Button } from "../../elem";
import { clearTodo, __loadTodo } from "../../modules/todo";
import { deleteTodo, getDocFB, toggleTodoFB } from "../../modules/todos";

const Todo = ({ onClick }) => {
  const { data: todo, isLoading, error } = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(__loadTodo(id));

    // 클린업
    return () => {
      dispatch(clearTodo());
    };
  }, [dispatch, id]);

  // if (isLoading) return <StContainer>로딩 중...</StContainer>;
  return (
    <StContainer onClick={onClick}>
      {todo && (
        <>
          <StId>{todo.id}</StId>
          <StItemTitle>{todo.title}</StItemTitle>
          <div>{todo.desc}</div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(toggleTodoFB(todo));
            }}
          >
            {todo.done ? "✅" : "❌"}
          </div>
          <StButton>
            <Button
              onClick={() => {
                // dispatch(deleteTodo(todo.id));
              }}
            >
              삭제
            </Button>
          </StButton>
        </>
      )}
    </StContainer>
  );
};

export default Todo;

const StContainer = styled.div`
  border: 1px solid #ddd;
  padding: 50px;
  width: 300px;
  margin: 100px auto;
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
