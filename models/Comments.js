// import mongoose from "mongoose";
//
// const CommentsSchema = new mongoose.Schema({
//     text: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref:'User',
//         required: true,
//     },
//     post: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref:'Post',
//         required: true,
//     }
// }, {
//     timestamps: true
// })
//
// export default mongoose.model('Comments',CommentsSchema)