require('dotenv').config()
const mongoose = require('mongoose');

// mongpdb atlas database name : db_media
const mongodb_url = "mongodb+srv://mahimajain:Mahi@8860@cluster0.ldd8loy.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( mongodb_url, 
    { useNewUrlParser: true }).then(()=>{
        console.log("Connected to Database")
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    })

