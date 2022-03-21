const mongoose = require('mongoose');
const orders = new mongoose.Schema({
    buyer: {type: String},
    order: {type: Object},
    amount: {type: Object},
});

module.exports = mongoose.model("orders", orders);