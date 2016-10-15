/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import express = require('express');
import path = require('path');

import BookRoutes = require('./BookRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new BookRoutes().routes);
        
        return app;
    }
}
export = Routes;