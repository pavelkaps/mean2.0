/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IBookModel = require('./interfaces/BookModel');

class BookModel {

    private _bookModel: IBookModel;

    constructor(heroModel: IBookModel) {
        this._bookModel = heroModel;
    }
    get title (): string {
        return this._bookModel.title;
    }

    get author (): string {
        return this._bookModel.author;
    }

    get year (): number {
        return this._bookModel.year;
    }
    
}
Object.seal(BookModel);
export =  BookModel;