const Product = require('../models/product.model');

//Simple version, without validation or sanitaion
exports.test = function (req, res) {
  res.send('<b>Greetings from the Test constroller !</b>');
};

// controller/products.js
exports.product_create = function (req, res) {
  let product = new Product(
    {
      name: req.body.name,
      price: req.body.price
    }
  );

  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Product Created Successfully')
  })
};