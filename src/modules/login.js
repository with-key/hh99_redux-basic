import axios from "axios";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import { toBeEnabled } from "@testing-library/jest-dom/dist/matchers";

const cookies = new Cookies();

// action
const LOGIN = "login/LOGIN";
const LOG_OUT = "login/LOG_OUT";

// action creator
function login(payload) {
  console.log(payload);
  return { type: LOGIN, payload: payload };
}

function logOut() {
  return {
    type: LOG_OUT,
  };
}

// Thunk
export const __login =
  (paylaod) =>
  async (dispatch, getState, { history }) => {
    // payload === { id: "######", password: "@@@@@@@" };
    console.log(paylaod);
    // 네트워크 요청
    const {
      data: { token },
    } = await axios.get("http://localhost:3001/user");

    // 웹 스토리지에 넣는다. (쿠키 / 로컬 / 세션)
    cookies.set("myJwt", token, { path: "/" });
    const { userId, name } = jwt_decode(token);
    cookies.set("userId", userId, { path: "/" });
    cookies.set("name", name, { path: "/" });

    // 메인페이지로 이동시킴
    history.push("/");

    // 리덕스로 2차 dispatch
    dispatch(login({ userId: userId, name: name }));
  };

// initialState
const initialState = {
  isLogin: false,
  userId: "",
  name: "",
};

// reducer
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        userId: action.payload.userId,
        name: action.payload.name,
      };
    case LOG_OUT:
      return {};
    default:
      return state;
  }
};

export default loginReducer;
