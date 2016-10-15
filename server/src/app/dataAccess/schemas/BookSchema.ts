import DataAccess = require('../DataAccess');
import IBookModel = require("./../../model/interfaces/BookModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BookSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            title : {
                type: String,
                required: true
            },
            author: {
                type: String,
                required: true
            },
            year: {
                type: Number,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IBookModel>("Book", BookSchema.schema);
export = schema;