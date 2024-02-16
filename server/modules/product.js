const mongoose = require("../database");

const productSchema = new mongoose.Schema({
  img: String,
  name: String,
  price: Number,
  category: String,
  disc: String,
  features: {
    text: String,
    items: [String],
  },
  care_instruction: {
    text: String,
    items: [String],
  },
});

module.exports = mongoose.model("product", productSchema);
