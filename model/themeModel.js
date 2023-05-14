//create schema for themes
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const themeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {  
        type: String,
        required: true
    },
    themeId: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model("theme", themeSchema);