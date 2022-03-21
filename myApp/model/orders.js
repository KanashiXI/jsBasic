const mongoose = require('mongoose');
const orders = new mongoose.Schema({
    buyer: {type: String},
    order_name: {type: Array},
    amount: {type: Array},
});

module.exports = mongoose.model("orders", orders);