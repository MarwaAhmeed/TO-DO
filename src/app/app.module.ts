import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentTodoComponent } from './parent-todo/parent-todo.component';
import { Child1TodoComponent } from './child1-todo/child1-todo.component';
import { Child2TodoComponent } from './child2-todo/child2-todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentTodoComponent,
    Child1TodoComponent,
    Child2TodoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
