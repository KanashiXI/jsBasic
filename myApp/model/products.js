const mongoose = require('mongoose');
const products = new mongoose.Schema({
    products_name: {type: String},
    price: {type: Number},
    amount: {type: Number},
    detail: {type: Object}
});

module.exports = mongoose.model("products", products);