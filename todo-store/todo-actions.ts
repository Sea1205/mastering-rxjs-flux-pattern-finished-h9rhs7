import { TodoActionTypes } from './todo-action-types';

export const loadTodoItemsAction = () => {
  return {
    type: TodoActionTypes.LoadTodoItems,
    payload: null
  };
}

export const addTodoItemAction = (payload) => {
  return {
    type: TodoActionTypes.AddTodoItem,
    payload
  }
}

export const toggleTodoItemAction = (payload) => {
  return {
    type:TodoActionTypes.ToggleTodoItem,
    payload
  }
}
