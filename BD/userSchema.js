const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        Firstname:String,
        Lastname:String,
        Email:{type: String, unique : true},
        Password:String 
    },
    {
        collection: "userInfo"
    }
)

mongoose.model("userInfo", userSchema);