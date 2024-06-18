// const MessageDetails = require("../model/messageDetails");
// const SocketDetails = require("../model/socketDetails");


// // Function to store socket details in the database
// async function storeSocketDetails(userId, socketId, isOnline) {
//     await SocketDetails.findOneAndUpdate({ userId }, { socketId, isOnline }, { upsert: true });
// }

// // Function to find socket ID based on user ID
// async function findSocketId(userId) {
//     const socketDetails = await SocketDetails.findOne({ userId });
//     return socketDetails ? socketDetails.socketId : null;
// }

// // Function to save message in the database
// async function saveMessage(senderId, receiverId, message, sendTime) {
//     const newMessage = new MessageDetails({ senderId, receiverId, message, sendTime });
//     await newMessage.save();
// }

// async function updateUserOnlineStatus(userId, isOnline) {
//     await SocketDetails.findOneAndUpdate({ userId }, { isOnline });
// }

// // Export functions
// module.exports = { storeSocketDetails, findSocketId, saveMessage,updateUserOnlineStatus };