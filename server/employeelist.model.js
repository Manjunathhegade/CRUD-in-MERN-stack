const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    fullname: {
        type :String
    
    },
    username : {
        type :String
        
    },
    email : {
        type :String
        
    },
    mobile : {
        type :String
    
    },
    designation : {
        type :String
        
    }
});

module.exports = mongoose.model('Employee',Employee);
