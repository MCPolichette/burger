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
            req.body.burger_name, false
        ], function (result) {
            res.json({ id: result.insertID });
        });
});
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("conditions?", condition);
    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;