const Product = require("../modules/product");
const AppError = require("../utils/AppError");
const productArray = require("../../data/db");

exports.getProducts = async (req, res, next) => {
  try {
    console.log(req.query);
    const fields = req.query.fields?.split(",").join(" ") ?? {};

    const excludeKeys = ["sort", "fields", "limit", "page"];
    let queryString = { ...req.query };
    excludeKeys.map((e) => delete queryString[e]);

    queryString = await JSON.parse(
      JSON.stringify(queryString).replace(
        /\b(gte|gt|lte|lt)\b/g,
        (match) => `$${match}`
      )
    );

    // queryString = queryString;

    let query = Product.find(queryString).select(fields);

    // sort by filed
    if (req.query.sort) {
      const sort = req.query.sort.split(",").join(" ");
      query = query.sort(sort);
    }

    // select the page (from..to...)
    if (req.query.page) {
      query = query.skip(req.query.page - 1 * req.query.limit);
    }

    // limit number of products
    if (req.query.limit) {
      query = query.limit(req.query.limit);
    }

    const products = await query;
    res.json({
      status: "success",
      products,
    });
  } catch (err) {
    next(err);
  }
};

exports.addManyProducts = async (req, res, next) => {
  try {
    if (!Array.isArray(productArray)) {
      throw new Error("Products data is not an array");
    }

    const result = await productArray.map(async (p) => {
      return await Product.create(p);
    });

    res.status(201).json({
      status: "success",
      result,
    });
  } catch (err) {
    next(err);
  }
};

exports.getOneProduct = (req, res) => {
  res.send("get one product");
};
