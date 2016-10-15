/**
 * Created by Паша on 06.10.2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

import {Book} from '../models/book';

@Injectable()
export class BookSearchService{
    constructor(private http: Http){
    }
    
    search(term: string): Observable<Book[]>{
        return this.http
            .get(`app/books/?title=${term}`)
            .map((r: Response) => r.json().data as Book[]);
    }
    
    
}