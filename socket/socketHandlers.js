// const chatController = require('./chatHandler');


// function getUserIdFromSocket(socket) {
//     const userId = socket.handshake.query.userId;
//     return userId;
// }

// async function handleChatMessage(io, socket) {
//     try {
//         const userId = getUserIdFromSocket(socket);
//         const socketId = socket.id;
//         const isOnline = true;
//         await chatController.storeSocketDetails(userId, socketId, isOnline);
//         console.log('Socket details stored successfully.');
//     } catch (error) {
//         console.error('Error storing socket details:', error);
//     }

//     // Handle 'chat message' event
//     socket.on('chat-message', async (payload) => {
//         const { senderId, receiverId, message,sendTime } = payload;
//         try {
//             const receiverSocketId = await chatController.findSocketId(receiverId);

//             if (!receiverSocketId) {
//                 console.error('Socket ID not found for receiver:', receiverId);
//                 return;
//             }

//             // Emit message to the correct receiver client
//             io.to(receiverSocketId).emit('chat-message', {
//                 message: message,
//                 senderId: senderId,
//                 receiverId: receiverId
//             });

//             console.log('Message emitted to the correct receiver.');


//             await chatController.saveMessage(senderId, receiverId, message, sendTime);
//             console.log('Message saved successfully.');
//         } catch (error) {
//             console.error('Error handling chat message:', error);
//         }
//     });
// }


// async function handleUserDisconnect(userId) {
//     try {
//         const isOnline = false;
//         await chatController.updateUserOnlineStatus(userId, isOnline);
//         console.log('User offline status updated.');
//     } catch (error) {
//         console.error('Error updating user offline status:', error);
//     }
// }

// module.exports = { handleChatMessage ,handleUserDisconnect};