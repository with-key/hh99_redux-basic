import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 리덕스 관련 코드
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// 루트 리듀서
import rootReducer from "./modules";

// 스토어 만들기
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  // Provider로 감싸고 스토어 넣어주기
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
