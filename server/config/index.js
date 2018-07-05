const mongoose = require('mongoose');
const conecction = mongoose.connect('mongodb://localhost:27017/mevn', {
    useNewUrlParser: true
});

module.exports = conecction;