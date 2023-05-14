//make schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const notificationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
    is_Read: {
        type: Boolean,
        required: true
    },
    is_Deleted: {
        type: Boolean,
        required: true
    },
    sent_by: {
        type: String,
        required: true
    },
    sent_to: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model("notification", notificationSchema);