const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  id: Schema.Types.ObjectId,
  quantity: Number,
});

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  companyName: String,
  country: String,
  address: String,
  apartment: String,
  city: String,
  zip: String,
  phone: String,
  notes: String,
});

const OrderSchema = new Schema({
  user: UserSchema,
  products: [ProductSchema],
  status: String,
  created: Date,
});

module.exports = mongoose.model("Order", OrderSchema);
