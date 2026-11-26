const express = require("express");

class Application {

    constructor(database) {
        this.database = database;
        this.app = express();
        this.port = process.env.PORT || 3012;

        this.initMiddlewares();
        this.initRoutes();
    }
    
    initMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    initRoutes() {
        this.app.get("/", (req, res) => {
            res.json({
                ok: true,
                connected: this.database.connection.readyState === 1
            });
        });
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(
                `Server is running on port ${this.port}`
            );
        });
    }
}

module.exports = Application;