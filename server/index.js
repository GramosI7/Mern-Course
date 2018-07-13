const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const URI = require("./config/keys").mongoURI;


const app = express();
const PORT = 4000;

mongoose.connect(URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connecté a MongoDB !')
});

app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express());
app.use(cors());

require("./config/passport")(passport);

const coursRouter = require("./routes/cours");
const userRouter = require("./routes/user");
const profilRouter = require("./routes/profil");
const postRouter = require("./routes/post");


app.use('/cours', coursRouter);
app.use('/users', userRouter);
app.use('/profil', profilRouter);
app.use('/post', postRouter);



app.get("/", (req, res) => {
    res.send('Hi')
});


app.listen(PORT, () => {
    console.log(`Le serveur ${PORT} toune !`);
})