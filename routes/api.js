const axios = require("axios");
const router = require("express").Router();
const db = require("../models");
const path = require("path");

router.get("/api/articles", (req, res) => {
	db.Article.find()
		.then(dbModel => res.json(dbModel))
		.catch(err => console.log(err));
})

router.post("/api/articles", (req, res) => {
	console.log(req.body);
	db.Article.create(req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => console.log(err));
});

router.delete("/api/articles/:id", (req, res) => {
	const id = req.params.id
	console.log(id);
	db.Article.remove({_id: id})
		.then(dbModel => res.json(dbModel))
		.catch(err => console.log(err));

});


// Home Page
// router.get("*", (req, res) => res.render("../client/build/index.html"));

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;