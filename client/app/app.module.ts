import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { BookDetailComponent }  from './components/book-detail/book-detail.component';
import { BooksComponent }      from './components/books/books.component';
import { BookService }          from './services/book.service';
import { routing } from './app.routing';
import './rxjs-extensions';
import {BookSearchComponent} from "./components/book-search/book-search.component";
import {AddBookComponent} from "./components/add-book/add-book.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    BookDetailComponent,
    BooksComponent,
    BookSearchComponent,
    AddBookComponent,
  ],
  providers: [
    BookService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/