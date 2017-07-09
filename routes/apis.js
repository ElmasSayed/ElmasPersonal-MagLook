var express = require("express");
var router = express.Router();
var db = require("../models");
var request = require('request');
var fs = require("fs");
var _ = require('underscore');
var helpers = require('handlebars-helpers')();

let NewsAPI = require('newsapi');
let newsapi = new NewsAPI('31a06e480ed04534bc2eda6adfb8fc5f');

module.exports = function(app) {

    newsapi.articles({
        source: 'entertainment-weekly', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        // console.log(articlesResponse);


        articlesResponse.articles.forEach(el => {
            el.image_url = el.urlToImage;
            el.description = el.title;
            el.category = "celebrities";
        })
        db.Article.bulkCreate(
            articlesResponse.articles)


    });

    newsapi.articles({
        source: 'mtv-news', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        // console.log(articlesResponse);


        articlesResponse.articles.forEach(el => {
            el.image_url = el.urlToImage;
            el.description = el.title;
            el.category = "celebrities";
        })
        db.Article.bulkCreate(
            articlesResponse.articles)


    });

    newsapi.articles({
        source: 'cnn', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        // console.log(articlesResponse);


        articlesResponse.articles.forEach(el => {
            el.image_url = el.urlToImage;
            el.description = el.title;
            el.category = "news";
        })
        db.Article.bulkCreate(
            articlesResponse.articles)


    });
    newsapi.articles({
        source: 'the-new-york-times', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        // console.log(articlesResponse);


        articlesResponse.articles.forEach(el => {
            el.image_url = el.urlToImage;
            el.description = el.title;
            el.category = "news";
        })
        db.Article.bulkCreate(
            articlesResponse.articles)


    });
    newsapi.articles({
        source: 'espn', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        // console.log(articlesResponse);


        articlesResponse.articles.forEach(el => {
            el.image_url = el.urlToImage;
            el.description = el.title;
            el.category = "sports";
        })
        db.Article.bulkCreate(
            articlesResponse.articles)

    });
    newsapi.articles({
        source: 'fox-sports', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        // console.log(articlesResponse);


        articlesResponse.articles.forEach(el => {
            el.image_url = el.urlToImage;
            el.description = el.title;
            el.category = "sports";
        })
        db.Article.bulkCreate(
            articlesResponse.articles)

    });
    newsapi.articles({
        source: 'techcrunch', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        // console.log(articlesResponse);


        articlesResponse.articles.forEach(el => {
            el.image_url = el.urlToImage;
            el.description = el.title;
            el.category = "technology";
        })
        db.Article.bulkCreate(
            articlesResponse.articles)

    });

    newsapi.articles({
        source: 'engadget', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        // console.log(articlesResponse);


        articlesResponse.articles.forEach(el => {
            el.image_url = el.urlToImage;
            el.description = el.title;
            el.category = "technology";
        })
        db.Article.bulkCreate(
            articlesResponse.articles)

    });

};