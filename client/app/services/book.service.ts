import { Book } from '../models/book';
import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
  private booksUrl = 'store/books';
  private headers = new Headers({'Content-Type' : 'application/json'});

  constructor(private http: Http){}
  
  getBooks(): Promise<Book[]> {
    return this.http.get(this.booksUrl)
        .toPromise()
        .then(responce => responce.json())
        .catch(this.handleError);
  }

  getBooksSlowly(): Promise<Book[]> {
    return new Promise<Book[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getBooks());
  }

  getBook(id: string): Promise<Book> {
    return this.getBooks()
               .then(books => books.find(book => book._id === id));
  }

  update(book: Book): Promise<Book>{
    const url = `${this.booksUrl}/${book._id}`;
    return this.http
        .put(url, JSON.stringify(book), {headers: this.headers})
        .toPromise()
        .then(()=>book)
        .catch(this.handleError);
  }

  create(book: Book): Promise<Book>{
    return this.http
        .post(this.booksUrl, JSON.stringify(book), {headers: this.headers})
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
  }

  delete(id: string): Promise<void>{
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(()=>null)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }
}
