// 3. Inside the `burgers_controller.js` file, import the following:
//    * Express
var express = require("express");

var router = express.Router();
//    * `burger.js`
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var burger_object = {
            burger: data
        };

        console.log(burger_object);
        res.render("index", burger_object)
    })
})

router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        [
            "name", "devoured"
        ], [
            req.body.name, false
        ], function (result) {
            res.json({ id: result.insertID });
        });
});
module.exports = router;