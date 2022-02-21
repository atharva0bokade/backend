const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    
    reason:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true
    }
});

const Info = mongoose.model("Info",infoSchema);
module.exports = Info;