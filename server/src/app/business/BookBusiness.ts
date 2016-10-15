/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BookRepository = require("./../repository/BookRepository");
import IBookBusiness = require("./interfaces/BookBusiness");
import IBookModel = require("./../model/interfaces/BookModel");
import BookModel = require("./../model/BookModel");


class BookBusiness implements IBookBusiness {
    private bookRepository: BookRepository;

    constructor () {
        this.bookRepository = new BookRepository();
    }

    create (item: IBookModel, callback: (error: any, result: any) => void) {
        this.bookRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this.bookRepository.retrieve(callback);
    }

    update (_id: string, item: IBookModel, callback: (error: any, result: any) => void) {

        this.bookRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this.bookRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this.bookRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IBookModel) => void) {
        this.bookRepository.findById(_id, callback);
    }

}


Object.seal(BookBusiness);
export = BookBusiness;