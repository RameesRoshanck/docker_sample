const mongoose = require('mongoose');


const messageDetailsSchema = new mongoose.Schema({
    senderId: {
        type: String,
        required: true
    },
    receiverId: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    sendTime: {
        type: Date,
        required: true
    }
});

const MessageDetails = mongoose.model('MessageDetails', messageDetailsSchema);
module.exports = MessageDetails;
