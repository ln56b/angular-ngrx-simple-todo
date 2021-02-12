import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as ToDoActions from '../todo.action';
import ToDo from '../todo.model';
import ToDoState from '../todo.state';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  toDo$: Observable<ToDoState>;
  ToDoSubscription: Subscription;
  ToDoList: ToDo[] = [];

  Title: string = '';
  IsCompleted: boolean = false;

  ToDoError: Error = null;

  constructor(private store: Store<{ toDos: ToDoState }>) {
    this.toDo$ = store.pipe(select('toDos'));
  }

  ngOnInit(): void {
    this.ToDoSubscription = this.toDo$
      .pipe(
        map((x) => {
          this.ToDoList = x.ToDos;
          this.ToDoError = x.ToDoError;
        })
      )
      .subscribe();

    this.store.dispatch(ToDoActions.BeginGetToDoAction());
  }

  createToDo() {
    const toDo: ToDo = {
      Title: this.Title,
      IsCompleted: this.IsCompleted,
    };
    this.store.dispatch(ToDoActions.BeginCreateToDoAction({ payload: toDo }));
    this.Title = '';
    this.IsCompleted = false;
  }

  ngOnDestroy() {
    if (this.ToDoSubscription) {
      this.ToDoSubscription.unsubscribe();
    }
  }
}
