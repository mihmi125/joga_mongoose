const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
}, { 
    collection: "authors", versionKey: false 
});

module.exports = mongoose.model("Author", authorSchema);