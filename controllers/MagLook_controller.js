var express = require("express");
var router = express.Router();
var db = require("../models");
var request = require('request');
var fs = require("fs");
var _ = require('underscore');
let NewsAPI = require('newsapi');

let newsapi = new NewsAPI('31a06e480ed04534bc2eda6adfb8fc5f');


var helpers = require('handlebars-helpers')();




// Create all our routes and set up logic within those routes where required.
router.get("/celebrities", function(req, res) {
    // console.log(req);
    // console.log(res);

    db.Article.findAll({
        where: {
            category: "celebrities"
        }
    }).then(function(dbArticle) {
        // console.log(dbArticle)
        var hbsObject = {
            pageTitle: "Celebrities",
            articles: dbArticle
        };
        // We have access to the todos as an argument inside of the callback function
        // res.send("<h1> Celebrities </h1>");
        res.render("index", hbsObject);
    });

});

// Create all our routes and set up logic within those routes where required.
router.get("/news", function(req, res) {
    // console.log(req);
    // console.log(res);

    db.Article.findAll({
        where: {
            category: "news"
        }
    }).then(function(dbArticle) {
        // console.log(dbArticle)
        var hbsObject = {
            pageTitle: "News",
            articles: dbArticle
        };
        // We have access to the todos as an argument inside of the callback function
        // res.send("<h1> News </h1>");
        res.render("index", hbsObject);
    });

});


// Create all our routes and set up logic within those routes where required.
router.get("/sports", function(req, res) {
    // console.log(req);
    // console.log(res);

    db.Article.findAll({
        where: {
            category: "sports"
        }
    }).then(function(dbArticle) {
        // console.log(dbArticle)
        var hbsObject = {
            pageTitle: "Sports",
            articles: dbArticle
        };
        // We have access to the todos as an argument inside of the callback function
        //res.send("<h1> Sports </h1>");
        res.render("index", hbsObject);
    });

});


// Create all our routes and set up logic within those routes where required.
router.get("/tech", function(req, res) {
    // console.log(req);
    // console.log(res);

    db.Article.findAll({
        where: {
            category: "technology"
        }
    }).then(function(dbArticle) {
        // console.log(dbArticle)
        var hbsObject = {
            pageTitle: "Technology",
            articles: dbArticle
        };
        // We have access to the todos as an argument inside of the callback function
        // res.send("<h1> Technology </h1>");
        res.render("index", hbsObject);

    });

});

// Create all our routes and set up logic within those routes where required.
router.post("/", function(req, res) {
    // console.log(req);
    // console.log(res);
    db.User.create({
        email_address: req.body.email_address,
        password: req.body.password,
        picture: req.body.picture
    }).then(function(dbUser) {

        res.redirect("/");

    });


});

// Elmas
// create homepage with its data .
router.get("/", function(req, res) {
    // console.log(req);
    // console.log(res);
    var hbsObject = { techArticles: [], newsArticles: [], celebArticles: [], sportArticles: [] };
    db.Article.findAll({
        where: {
            category: "technology"
        },
        limit: 2
    }).then(function(data1) {

        hbsObject.techArticles = data1;

        db.Article.findAll({
            where: {
                category: "news"
            },
            limit: 2
        }).then(function(data2) {

            hbsObject.newsArticles = data2

            db.Article.findAll({
                where: {
                    category: "celebrities"
                },
                limit: 2
            }).then(function(data3) {

                hbsObject.celebArticles = data3

                db.Article.findAll({
                    where: {
                        category: "sports"
                    },
                    limit: 2
                }).then(function(data4) {

                    hbsObject.sportArticles = data4

                    // We have access to the todos as an argument inside of the callback function
                    // console.log("loding home - technology");
                    // console.log(hbsObject);
                    res.render("home", hbsObject);
                })

            })

        })
    })
}); //Elmas end

router.get("/users/:id", function(req, res) {
       //console.log(req.params.id); 
   db.User.findOne({
       where: {
           id: req.params.id
       }
   }).then(function(dbUser) {
     console.log(dbUser)
       // var likes = [
       //     { id: 2, url: "http://ew.com/movies/2017/05/29/robert-de-niro-us-tragic-dumbass-comedy/", description: "Robert De Niro says U.S. has become a ‘tragic dumbass comedy’" },
       //     { id: 3, url: "http://ew.com/music/2017/05/29/john-legend-message-manchester-attack-parents/", description: "John Legend sends emotional message to Manchester victim’s parents" },
       //     { id: 4, url: "http://www.si.com/tech-media/2017/05/29/frank-deford-death-legendary-sports-writer", description: "Frank Deford, legendary sports writer, dies at 78" },
       //     { id: 5, url: "http://ew.com/movies/2017/05/29/clueless-reunion-alicia-silverstone-breckin-meyer/", description: "Alicia Silverstone, Breckin Meyer hold mini Clueless reunion" },
       // ]        
       var hbsObject = {
           id: req.params.id,
           // name: " Beyonce",
           name: req.params.name,
           email_address: req.params.email_address,
           picture: req.params.picture,
           users: dbUser.dataValues
               // likes: likes,
               // likesCount: likes.length
       }
       res.render("profile", hbsObject);
   });
});

router.get("/users/", function(req, res) {
    db.User.findAll({
    }).then(function(dbUser) {
        res.json(dbUser);


}); 
});


router.get("/articles/", function(req, res) {
    // console.log(req);
    // console.log(res);

    db.Article.findAll({

    }).then(function(dbArticle) {
        // console.log(dbArticle)
        // var hbsObject = {
        //     pageTitle: "AllArticles",
        //     articles: dbArticle
        // };
        // // We have access to the todos as an argument inside of the callback function
        // //res.send("<h1> Sports </h1>");
        // res.render("index", hbsObject);
         res.send(dbArticle);

    });

});

module.exports = router;