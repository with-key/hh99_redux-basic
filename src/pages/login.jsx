import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __login } from "../modules/login";

const Login = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
  });

  const onChangeInputHandler = (event) => {
    const { value, name } = event.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <Container>
      <form
        onSubmit={(event) => {
          event.preventDefault(); // 무지성코드
          dispatch(__login(userInfo));
        }}
      >
        <InputSet>
          <Div>
            <div>아이디</div>
            <input type="text" name="id" onChange={onChangeInputHandler} />
          </Div>
          <Div>
            <div>패스워드</div>
            <input
              type="password"
              name="password"
              onChange={onChangeInputHandler}
            />
          </Div>
          <Div>
            <StButton>로그인</StButton>
          </Div>
        </InputSet>
      </form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const Div = styled.div`
  div {
    margin-bottom: 12px;
  }
`;

const InputSet = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

const StButton = styled.button`
  border: none;
  background-color: moccasin;
  padding: 12px;
  width: 300px;
  border-radius: 12px;
  cursor: pointer;
`;
