import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ToDo from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoHttpService {
  private apiURL: string = 'https://localhost:3000/api/todo';

  constructor(private httpClient: HttpClient) {}

  getToDos(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(this.apiURL);
  }

  createToDos(payload: ToDo): Observable<ToDo> {
    return this.httpClient.post<ToDo>(this.apiURL, JSON.stringify(payload), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
