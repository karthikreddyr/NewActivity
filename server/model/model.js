const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    userName: {
        type: String,
    },
    email : {
        type: String,
    },
    password : {
        type: String,
    },
})

const Registrationdb = mongoose.model('registrationdb', schema,);

module.exports = Registrationdb;