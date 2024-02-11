

const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({

    name: { 
        type: String,
        required: [true,"* Name of player is required"],
        minlength: [3, "* Name must be at least 3 characters in length"]
    },
    position: { 
        type: String
    },
    status: { 
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('team', teamSchema)