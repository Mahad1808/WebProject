const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },

    
    // registeredAs:{

    //     type: String,
    //     required: true 
    // } ,
   

});
const admin = mongoose.model("admin", adminSchema);