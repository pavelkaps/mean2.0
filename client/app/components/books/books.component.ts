import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'books.component.html',
  styleUrls: [ 'books.component.css' ]
})
export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;

  constructor(
    private router: Router,
    private bookService: BookService) { }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
    console.log(this.selectedBook.title);
    console.log(this.selectedBook._id);
  }

  bookUpdated(book: Book){
    this.books.push(book);
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedBook._id]);
  }

//title: string, year: string, author: string
  add(title: string): void{
    let newBook = new Book;
    console.log(title);
    newBook.title = title;
    newBook.year = 1899;
    newBook.author = "N/A";

    if(!title){return;}

    this.bookService.create(newBook)
        .then(book => {this.books.push(book);
        this.selectedBook = null;});
  }
  
  delete(title: Book): void{
    this.bookService.delete(title._id)
        .then(()=>{
        this.books = this.books.filter(h=>h !== title);
        if(this.selectedBook === title){this.selectedBook = null};
        });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/