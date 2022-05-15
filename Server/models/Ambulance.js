const mongoose = require('mongoose');

const AmbulanceSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    since: {
        type: Number,
        require: true
    },
    numberofambulance: {
        type: Number,
        require: true
    },
    contact: {
        type: Number,
        require: true
    },
    dutyhours: {
        type: Number,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    hospitals: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require:true
    },
})

module.exports = mongoose.model('Ambulance', AmbulanceSchema);