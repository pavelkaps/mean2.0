import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Book }         from '../../models/book';
import { BookService }  from '../../services/book.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: [ 'book-detail.component.css' ]
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      console.log(id);
      this.bookService.getBook(id.toString())
        .then(book => this.book = book);
    });
  }

  goBack(): void {
    this.location.back();
  }
  
  save(): void{
    this.bookService.update(this.book)
        .then(() => this.goBack());
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/