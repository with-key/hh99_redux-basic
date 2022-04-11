import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { isLogin, userId, name } = useSelector((state) => state.loginReducer);

  if (isLogin) return <div>로그인을 해주세요....!</div>;
  return <div>{name}님 안녕하세요?</div>;
};

export default Home;
