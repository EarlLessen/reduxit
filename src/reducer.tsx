import {CREATE_NAME, CLEAR} from './action';

// @ts-ignore
export const allNames = (state = [], action) => {
  const {type, payload} = action;

  switch (type) {
    case CREATE_NAME: {
      const {text} = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      // @ts-ignore
      return state.concat(newTodo);
    }
    case CLEAR: {
      return [];
    }
    default:
      return state;
  }
};
