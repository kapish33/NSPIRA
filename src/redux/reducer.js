import { DELETE_TODO, TOGGLE_TODO, ADD_TODO } from "./actionTypes";

const init = { todos: [] };
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};
