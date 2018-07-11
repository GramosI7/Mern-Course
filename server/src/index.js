import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = process.env.PORT || 4000;
const app = express();

mongoose.connect('mongodb://localhost/mern_lvl1');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connecté a MongoDB !')
});

app.get("/", (req, res) => {
    res.send('Hi')
});

app.use(express());
app.use(express.urlencoded({extended: false}))
app.use(cors());

// Route
import coursRouter from "./routes/cours"
app.use('/cours', coursRouter)

app.listen(PORT, () => {
    console.log(`Le serveur ${PORT} tourne !`)
})