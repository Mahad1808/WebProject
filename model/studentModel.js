const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },

    teamlead:{
        type: Boolean,
        default: false
    },
   

});
module.exports = mongoose.model("student", studentSchema);