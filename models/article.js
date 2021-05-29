const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const Category = require("./category");

const articleSchema = new Schema({
  model: String,
  type: String,
  mileage: Number,
  price: Number,
  categ: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Article", articleSchema);
