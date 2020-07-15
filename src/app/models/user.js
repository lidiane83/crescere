const mongoose = require('../../config/db');
const { model } = require('../../config/db');
const UserSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },//especificar as configurações
        pass:{
            type:String,
            required:true,
        },
    },
    {
        timestamp:true,
    }

);
const User = mongoose.model("User",UserSchema);

model.exports = User;