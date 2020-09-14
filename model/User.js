const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true,
        min:3,
        max:30,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        max:255,
        
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:1024,
    },
    date:{
      type:String,
      default:Date.now,

    }
   
});

module.exports = mongoose.model('User', userSchema);
