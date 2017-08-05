var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/", function (req, res) {
    console.log(req.body.name);
    console.log(req.body.devoured);

    burger.create(req.body.name, req.body.devoured, function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {

    burger.update("devoured", 1, "id", req.params.id, function () {
        res.redirect("/");
    });
});

router.delete("/:id", function (req, res) {

    burger.delete("id", req.params.id, function () {
        res.redirect("/");
    });


});


module.exports = router;
