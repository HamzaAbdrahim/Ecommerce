const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required."],
  },
  description: {
    type: String,
    required: [true, "Product description is required."],
  },
  price: {
    type: Number,
    required: [true, "Product price is required."],
    min: [0, "Product price cannot be negative."],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    // Reference the 'Category' model
    // ref: 'Category',
    required: [true, "Product category is required."],
  },
  imageUrl: {
    type: String,
    required: [true, "Product image URL is required."],
  },
  stockQuantity: {
    type: Number,
    required: [true, "Stock quantity is required."],
    min: [0, "Stock quantity cannot be negative."],
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
