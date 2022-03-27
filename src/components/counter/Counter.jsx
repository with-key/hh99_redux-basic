import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../elem";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <StContainer>
      <StTitle>예상기님의 Counter</StTitle>
      <StNumber>{number >= 10 ? "10 이상 더 높일 수 없어요" : number}</StNumber>
      <StBtnGroup>
        <Button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +1 더하기
        </Button>
        <Button
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          -1 빼기
        </Button>
      </StBtnGroup>
    </StContainer>
  );
};
export default Counter;

const StContainer = styled.section`
  padding: 50px;
`;

const StNumber = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const StTitle = styled.div`
  height: 40px;
  font-size: 24px;
  font-weight: 700;
`;

const StBtnGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;
