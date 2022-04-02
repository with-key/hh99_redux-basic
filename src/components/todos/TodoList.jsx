import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { __loadTodos } from "../../modules/todos";
import { flex } from "../style";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }) => todos.todos);
  const history = useHistory();

  const [number, setNumber] = useState(0);

  useEffect(() => {
    dispatch(__loadTodos());
  }, [dispatch]);

  return (
    <StContainer>
      <StTitle>예상기님의 Todo List</StTitle>
      <StMain>
        {todos &&
          todos.map((item) => (
            <StBox
              todo={item}
              key={item.id}
              onClick={() => {
                history.push(`/todos/${item.id}`);
              }}
            >
              {item.title}
            </StBox>
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

const StLink = styled(Link)`
  text-decoration: none;
`;

const StBox = styled.div`
  ${flex()}
  width: 100px;
  height: 100px;
  border: 1px solid purple;
`;
