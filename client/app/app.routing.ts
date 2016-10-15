import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { BooksComponent }      from './components/books/books.component';
import { BookDetailComponent }  from './components/book-detail/book-detail.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'new',
    component: AddBookComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/