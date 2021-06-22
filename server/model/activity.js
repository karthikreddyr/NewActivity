
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    username : {
        type : String,
    },
    name : {
        type : String,
    },
    createdDate: {type: Date, default: Date.now}
})

const Activitydb = mongoose.model('Activitydb', schema,);

module.exports = Activitydb;