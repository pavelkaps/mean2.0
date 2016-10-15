/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");

interface BookModel extends mongoose.Document {
    title: string,
    year: number,
    author: string
}

export = BookModel;