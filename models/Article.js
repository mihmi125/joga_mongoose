const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    body: { type: String, required: true },
    published: { type: Date, required: true },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    }
}, { collection: "articles", versionKey: false });

module.exports = mongoose.model("Article", articleSchema);
