import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {boxoneComponent} from "./box_one/box_one.component";
import {todoComponent} from "./to_do/todo.component";
import {doneComponent} from "./done/done.componet";


const appRouters: Routes = [
  {path: '', component: todoComponent},
  {path: 'done', component: doneComponent},


  ]

@NgModule({
  declarations: [
    AppComponent,
    boxoneComponent,
    todoComponent,
    doneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
