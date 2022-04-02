import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "../../elem";
import { flex } from "../style";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  const onChangeDescHandler = (event) => {
    const { value } = event.target;
    setTodo({ ...todo, desc: value });
  };

  const onChangeTitleHandler = (event) => {
    const { value } = event.target;
    setTodo({ ...todo, title: value });
  };

  return (
    <>
      <StTitle>예상기님의 Todo 입력창</StTitle>
      <StField>
        <div>제목</div>
        <Input name="title" type="text" onChange={onChangeTitleHandler} />
        <div>내용</div>
        <Input name="desc" type="text" onChange={onChangeDescHandler} />
      </StField>
      <StSubmit>
        <Button onClick={() => {}}>추가하기</Button>
      </StSubmit>
    </>
  );
};

export default TodoForm;

const StTitle = styled.div`
  height: 40px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const StField = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const StSubmit = styled.div`
  ${flex("end")};
  height: 100px;
`;
