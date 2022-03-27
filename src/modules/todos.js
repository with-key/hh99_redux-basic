let id = 4;

// Action :: 이 모듈에서 일어날 수 있는 액션
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

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
  todos: [
    { id: 1, title: "react", desc: "react is so funny" },
    { id: 2, title: "node", desc: "node is good" },
    { id: 3, title: "vue", desc: "vue is nice" },
  ],
};

// Reducer : 액션 받아서 액션에 따라 스토어 값을 바꿔주는 애
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      id++;
      return {
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};

// reducer를 내보낸다
export default todos;
