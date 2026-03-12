const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    
    booktitle:{
        type : String,
        required :true
    },
    isbn:{
        type: String,
        required: true
    },

    author:{
        type:String,
        required:true
    },








    totalCopies: {
        type: Number,
        min: 1
    },

   

    genre: {
        type: String,
        required: true
    },

    publisher: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: "Available"
    },

    

}, { timestamps: true });

module.exports = mongoose.model("Library", bookSchema);