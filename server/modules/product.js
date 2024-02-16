const mongoose = require("mongoose");

const productScheem = mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  features: {
    text: String,
    items: [String],
  },
});

module.exports = mongoose.model("product", productScheem);
