const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    userId: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {

        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    gender: {
        type: String,
        required: true
    },
    profile_picture: {
        type: String,
        required: true
    },
    theme: {

        color:{
            type: String,
            default:"white"
        },
        name:{
            type: String,
            default:"light"
        }
    },
    registerAs:{    

        type: String,
        enum: ['student', 'teacher', 'admin'],
        required: true 
    } 
});

module.exports = mongoose.model("users", UserSchema);