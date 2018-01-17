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
	db.Article.create(req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => console.log(err));
});

router.delete("/api/articles/:id", (req, res) => {
	const id = req.params.id
	db.Article.remove({_id: id})
		.then(dbModel => res.json(dbModel))
		.catch(err => console.log(err));
});

// Home Page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./../client/build/index.html"));
});

module.exports = router;