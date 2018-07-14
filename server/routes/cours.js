const express = require("express");
const multer = require("multer");
const Cours = require("../models/Cours")


const coursRouter = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname )
    }
  });
  
  var upload = multer({ storage: storage });


// All Cours
coursRouter.get("/", (req, res) => {
    Cours.find({}, (err, cours) => {
        if(err) console.log(err);
        res.json(cours)
    })
});


// Add Cours
coursRouter.post('/add', upload.single('img'),(req, res) => {
    const newFilm = new Cours(req.body)
    newFilm.img = req.file.filename
    newFilm.save((err, film) => {
        if (err) return console.log(err)
        res.redirect("http://localhost:3000/cours")
    });
});

// Edit Cours 
coursRouter.post('/edit/:id', upload.single('img'), (req, res) => {
    let body = {
        title: req.body.title,
        author: req.body.author,
        body : req.body.body,
        img: req.file.filename
    };
    Cours.findByIdAndUpdate(req.params.id ,body ,(err, film) => {
        if (err) return console.log(err)
        res.redirect("http://localhost:3000/cours")
    });
});

// Delete Cours
coursRouter.get("/delete/:id", (req, res) => {
    let idParams = {_id: req.params.id};
    Cours.findByIdAndRemove(idParams, (err) => {
        if (err) console.log(err)
        res.redirect("http://localhost:3000/cours");
    })
})

// Single Cours
coursRouter.get("/:id", (req, res) => {
    Cours.findById({_id: req.params.id}, (err, cour) => {
        if(err) return console.log(err);
        res.json(cour)
    })
});

module.exports = coursRouter;