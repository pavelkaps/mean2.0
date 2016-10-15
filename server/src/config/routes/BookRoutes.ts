/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import BookController = require("./../../controllers/BookController");

var router = express.Router();

class BookRoutes {
    private bookController: BookController;

    constructor () {
        this.bookController = new BookController();
    }
    get routes () {
        var controller = this.bookController;

        router.get("/books", controller.retrieve);
        router.post("/books", controller.create);
        router.put("/books/:_id", controller.update);
        router.get("/books/:_id", controller.findById);
        router.delete("/books/:_id", controller.delete);

        return router;
    }


}

Object.seal(BookRoutes);
export = BookRoutes;