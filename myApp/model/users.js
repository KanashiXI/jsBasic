const mongoose = require('mongoose');
const users = new mongoose.Schema({
    username: {type: String},
    password: {type: String},
    user_name: {type: String},
    user_surname: {type: String},
    user_telephone: {type: String}
});

module.exports = mongoose.model("users", users);