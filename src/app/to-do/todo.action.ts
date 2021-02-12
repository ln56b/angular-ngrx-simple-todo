import { createAction, props } from '@ngrx/store';
import ToDo from './todo.model';

// Create
export const CreateToDoAction = createAction(
  '[ToDo] - Create ToDo',
  props<ToDo>()
);

export const BeginCreateToDoAction = createAction(
  '[ToDo] - Begin Create ToDo',
  props<{ payload: ToDo }>()
);

export const SuccessCreateTodoAction = createAction(
  '[ToDo - Success Create ToDo]',
  props<{ payload: ToDo }>()
);
// Get
export const GetToDoAction = createAction('[ToDo] - Get ToDo');

export const BeginGetToDoAction = createAction('[ToDo] - Begin Get ToDo');

export const SucessGetToDoAction = createAction(
  '[ToDo] - Success Get ToDo',
  props<{ payload: ToDo[] }>()
);

// Error

export const ErrorToDoAction = createAction('[ToDo] - Error', props<Error>());
