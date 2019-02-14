const router = require("express").Router();
const db = require("../models");
const axios = require("axios");
const url = require('url');


// API routes
router.get("/api/query", (req, res) => {
	const q = url.parse(req.url, true);
	const key = process.env.API_KEY || process.env.NEWS_API_KEY;
	const apiUrl = `https://newsapi.org/v2/everything${q.search}&apiKey=${key}`

	axios.get(apiUrl)
    .then(queryRes => {
			res.status(200).send({message: 'ok', articles: queryRes.data.articles});
		})
		.catch(err => res.send());
})

router.get("/api/articles", (req, res) => {
	db.Article.find()
		.then(dbModel => res.json(dbModel))
		.catch(err => console.log(err));
})

router.post("/api/articles", (req, res) => {
	db.Article.create(req.body)
		.then(dbModel => {
			res.send({ article: dbModel });
		})
		.catch(err => console.log(err));
});

router.delete("/api/articles/:id", (req, res) => {
	const id = req.params.id
	db.Article.remove({_id: id})
		.then(dbModel => res.json(dbModel))
		.catch(err => console.log(err));
});

module.exports = router;