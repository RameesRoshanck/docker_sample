const mongoose = require('mongoose');

const socketDetailsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    socketId: {
        type: String,
        required: true
    },
    isOnline: {
        type: Boolean,
        required: true
    }
});

const SocketDetails = mongoose.model('SocketDetails', socketDetailsSchema);
module.exports = SocketDetails;