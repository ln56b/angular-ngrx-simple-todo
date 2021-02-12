import ToDo from './todo.model';

export default class ToDoState {
  toDos: ToDo[];
  toDoError: Error;
}

export const initializeState = (): ToDoState => {
  return { toDos: Array<ToDo>(), toDoError: null };
};
