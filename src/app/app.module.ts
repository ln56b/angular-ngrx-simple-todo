import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/component/to-do.component';
import { ToDoReducer } from './to-do/todo.reducer';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ToDoEffects } from './to-do/todo.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ToDoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: ToDoReducer }),
    EffectsModule.forRoot([ToDoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
