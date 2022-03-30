import { toBeInvalid } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";

let id = 4;

// Action :: 이 모듈에서 일어날 수 있는 액션
const LOAD_TODO = "todos/LOAD_TODO";
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLEE_TODO = "todos/TOGGLEE_TODO";

const loadCards = (todos) => {
  return {
    type: LOAD_TODO,
    todos,
  };
};

const toggleTodo = (data) => {
  return {
    type: TOGGLEE_TODO,
    data,
  };
};

export const loadCardsFB = () => async (dispatch, getState) => {
  // 파이어베이스에서 꺼내오기
  const { data } = await axios.get("http://localhost:3001/todos");
  // 내 스토어에 넣기
  dispatch(loadCards(data));
  return data;
};

// 성크함수
export const toggleTodoFB = (todo) => async (dispatch, getState) => {
  // done을 거꾸로 바꾸는 가공
  const updatedTodo = {
    ...todo,
    done: !todo.done,
  };

  // 파이어베이스로 get, add, edit
  const { data } = await axios.put(
    `http://localhost:3001/todos/${todo.id}`,
    updatedTodo
  );

  // 내 스토어에 상태 일치시켜주기
  dispatch(toggleTodo(data));
};

// Action Creator :: 액션을 만들어 주는 애 (액션은 반드시 'type'과 'payload'를 가진 객체다.)
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: { ...payload, id }, // 밖에 나가서 정보를 받아올 주머니 (직역하면, '탑재 화물')
});

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Initial State :: 이 모듈의 스토어 초기 값을 설정해주는 애
const initialState = {
  todos: [],
};

// Reducer : 액션 받아서 액션에 따라 스토어 값을 바꿔주는 애
const todos = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODO:
      return {
        todos: action.todos,
      };
    case ADD_TODO:
      id++;
      return {
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLEE_TODO:
      const index = state.todos.findIndex((todo) => todo.id === action.data.id);
      const newArr = state.todos.slice();
      newArr[index].done = !state.todos[index].done;

      return {
        todos: newArr,
      };

    default:
      return state;
  }
};

// reducer를 내보낸다
export default todos;
