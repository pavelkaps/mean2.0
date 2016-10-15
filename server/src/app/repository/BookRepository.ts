/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BookModel = require("./../model/BookModel");
import IBookModel = require("./../model/interfaces/BookModel");
import BookSchema = require("./../dataAccess/schemas/BookSchema");
import RepositoryBase = require("./BaseRepository");

class BookRepository  extends RepositoryBase<IBookModel> {
    constructor () {
        super(BookSchema);
    }
}

Object.seal(BookRepository);
export = BookRepository;