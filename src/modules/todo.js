import axios from "axios";

// 조회하기
const LOAD_TODO_REQ = "todos/LOAD_TODO_REQ";
const LOAD_TODO_ERROR = "todos/LOAD_TODO_FAIL";
const LOAD_TODO_SUCCESS = "todos/LOAD_TODO_SUCCESS";

const CLEAR_TODO = "todos/CLEAR_TODO";

// 추가하기
const ADD_TODO_REQ = "todos/ADD_TODO_REQ";
const ADD_TODO_ERROR = "todos/ADD_TODO_ERROR";
const ADD_TODO_SUCCESS = "todos/ADD_TODO_SUCCESS";

// 삭제하기
const DELETE_TODO_REQ = "todos/DELETE_TODO_REQ";
const DELETE_TODO_ERROR = "todos/DELETE_TODO_ERROR";
const DELETE_TODO_SUCCESS = "todos/DELETE_TODO_SUCCESS";

// Action Creator
const loadTodoReq = (paylod) => {
  return { type: LOAD_TODO_REQ, paylod };
};

const loadTodoError = (paylod) => {
  return { type: LOAD_TODO_ERROR, paylod };
};

const loadTodoSuccess = (payload) => {
  return {
    type: LOAD_TODO_SUCCESS,
    payload,
  };
};

export const clearTodo = () => {
  return {
    type: CLEAR_TODO,
  };
};

// Thunk Fn
export const __loadTodo = (id) => async (dispatch, getState) => {
  try {
    dispatch(loadTodoReq());
    const { data } = await axios.get(
      // `${process.env.REACT_APP_API_URL}/todos/${id}
      `http://localhost:3001/todos/${id}`
    );
    dispatch(loadTodoSuccess(data));
  } catch (error) {
    alert("에러가 발생했습니다. 잠시후에 다시 접속해주세요.");
    dispatch(loadTodoError(error));
  }
};

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

// Reducer
const todo = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODO_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_TODO_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case LOAD_TODO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case CLEAR_TODO:
      return initialState;

    default:
      return state;
  }
};

export default todo;
