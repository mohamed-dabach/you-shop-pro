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
mongoose.set("toJSON", {
  virtuals: true,
  transform: (doc, converted) => {
    delete converted._id;
  },
});

module.exports = mongoose.model("product", productSchema);
