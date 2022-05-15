const mongoose = require('mongoose');

const HospitalSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
   
    contact: {
        type: Number,
        require: true
    },
    warddetails: {
        type: String,
        require: true
    },
    staffcount: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require:true
    },
})

module.exports = mongoose.model('Hospital', HospitalSchema);