
const express = require("express");
const upload= require("express-fileupload");
const app= express();
const mongoose= require("mongoose");
const cors= require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();

const userRoute = require('./routes/userRoute');
const themeRoute = require('./routes/themeRoute');


const port= process.env.PORT ||  3000;





//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(upload());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/users', userRoute);
app.use('/themes', themeRoute);


// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{

        console.log("connected to mongoDB");

}) .catch((error)=>{

    console.log("error connecting to mongoDB: ", error)
})


app.listen(port, ()=>{

    console.log(`Server listening on port ${port}`)
}); 