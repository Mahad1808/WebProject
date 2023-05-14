const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const teacher = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    designation: {

        type: String,
        required: true
    },
   


});
module.exports = mongoose.model("teacher", teacher);