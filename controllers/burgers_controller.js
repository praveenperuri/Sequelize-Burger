var express = require("express");

var router = express.Router();

var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    db.burger.findAll({}).then(function(result){
        var burgerObject = {
            burgers: result
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });

});

router.post("/", function (req, res) {
    console.log(req.body.name);
    console.log(req.body.devoured);

    db.burger.create({
        burger_name: req.body.name,
        devoured: req.body.devoured
      }).then(function(result){
        res.redirect("/");
      });
        
});

router.put("/:id", function (req, res) {

    db.burger.update({
        devoured: 1
      }, {
        where: {
          id: req.params.id
        }
      }).then(function(result){
        res.redirect("/");
    });
    

});

router.delete("/:id", function (req, res) {

    db.burger.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(result) {
        res.redirect("/");
      });

});


module.exports = router;
