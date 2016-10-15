/**
 * Created by Паша on 13.10.2016.
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Book } from '../../models/book'
import {BookService} from "../../services/book.service";

@Component({
    moduleId: module.id,
    selector: 'add-book',
    templateUrl: 'add-book.component.html',
    styleUrls: ['books.component.css'],
})

export class AddBookComponent implements OnInit {
    @Output() bookUpdated = new EventEmitter();
    public addBookForm:FormGroup;

    constructor(
        private bookService: BookService
    ) {}

    save(model:Book) {
        console.log(model);
        this.bookService.create(model).then(book => this.bookUpdated.emit(book));
        this.addBookForm.reset();
    }
    
    ngOnInit():void {
        this.addBookForm = new FormGroup({
            title: new FormControl(''),
            year: new FormControl(''),
            author: new FormControl('')
        })
    }


}
