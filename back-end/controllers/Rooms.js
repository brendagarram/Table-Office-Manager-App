// const Rooms = require('../models/roomsModel');

// module.exports = {
//     createRoom: async (req, resp, next) => {
//         const {
//         name,
//         seats,
//         status,
//         dateEntry,
//         scheduledTimeStart,
//         scheduledTimeFinish,
//         } = req.body;
//         try {
//             if (!dateEntry || !scheduledTimeFinish || !scheduledTimeStart) {
//                 next(400);
//             }
//             const newRoom = new Rooms({
//                 name,
//                 seats,
//                 status,
//                 dateEntry,
//                 scheduledTimeStart,
//                 scheduledTimeFinish,
//                 reservations,
//             });
//             const roomSaved = await newRoom.save();
//             resp.status(200).send(roomSaved);
//         } catch (err) {
//             return next(404);
//         }
//     },

//     getRooms: async (req, res) => {
//         try {
//             const roomsFounded = await Rooms.find({}).exec()
//             res.status(200).json({roomsFounded});
//         } catch (err) {
//             return next(404);
//         }
//     },

//     // updateRoom: async (req, res) => {
//     //     const _id = req.params.id;
//     //     const body = req.body;
//     //     try {
            
//     //     } catch (error) {
//     //         console.log(error);
//     //     }
//     // },

//     deleteRoom: async (req, res) => {
//         const idRoom = req.params.id
//         try {
//             const roomDeleted = await Rooms.remove({'_id':idRoom}).exec();    
//             return res.status(200).json({roomDeleted});
//         } catch (err) {
//             return next(404);
//         }
//     },

//     findRoom: async (req, res) => {
//         const roomId = req.params.id;
//         try {
//             const roomFounded = await Rooms.findOne({'_id': roomId}).exec();
//             return res.status(200).json({ roomFounded });
//         } catch (err) {
//             return next(400);
//         }
//     },
// }
