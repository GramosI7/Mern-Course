import mongoose from "mongoose";

const Schema = mongoose.Schema;

const coursSchema = new Schema({
    title: {type: String, required: true},
    author : { type: String},
    years: {type : Date, "default": Date.now},
    body: {type: String, required: true},
    img: {type: String}
})

const Cours = mongoose.model("cours", coursSchema)

export { Cours };