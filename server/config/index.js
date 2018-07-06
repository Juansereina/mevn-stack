const mongoose = require('mongoose');
const url = process.env.DB;
const conecction = mongoose.connect(url, {
    useNewUrlParser: true
});

module.exports = conecction;