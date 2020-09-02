const express = require('express');
const newsApi = require('newsapi');
const news = new newsApi(`ab794a83285f4ba5bcdb7e8c7b04dc14`);
const router = express.Router();

router.get('/news', (req, res) => {
    news.v2.topHeadlines({
        q: req.query.q,
        country: 'id'
    }).then(result => {
        if(result.status === "ok") {
            let articles = result.articles;
            res.render('news', {
                articles
            })
        } else {
            res.send('Cannot Fetch News.')
        }
    });
})

router.get('/covid-19', (req, res) => {
    news.v2.everything({
        q: 'covid-19',
    }).then(result => {
        if(result.status === "ok") {
            let articles = result.articles;
            res.render('news', {
                articles
            })
        } else {
            res.send('Cannot Fetch News.')
        }
    });
})

module.exports = router;