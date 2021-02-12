import { Action, createReducer, on } from '@ngrx/store';
import * as ToDoActions from './todo.action';
import ToDo from './todo.model';
import ToDoState, { initializeState } from './todo.state';

export const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(ToDoActions.GetToDoAction, (state) => state),
  on(ToDoActions.CreateToDoAction, (state: ToDoState, toDo: ToDo) => {
    return { ...state, ToDos: [...state.toDos, toDo], ToDoError: null };
  }),
  on(ToDoActions.SucessGetToDoAction, (state: ToDoState, { payload }) => {
    return { ...state, ToDos: payload };
  }),
  on(ToDoActions.SuccessCreateTodoAction, (state: ToDoState, { payload }) => {
    return { ...state, ToDos: [...state.toDos, payload], ToDoError: null };
  }),
  on(ToDoActions.ErrorToDoAction, (state: ToDoState, error: Error) => {
    return { ...state, ToDoError: error };
  })
);

export function ToDoReducer(state: ToDoState | undefined, action: Action) {
  return reducer(state, action);
}