const mongoose = require("mongoose");

const CookBookSchema = new mongoose.Schema({
    title:
    {
        type: String,
        required: [true, "Title is required"],
        minlength: [4, "Title must be at least 4 Characters"]
    },
    totalTime:
    {
        type: Number,
        required: [true, "You must put in a Total Time!"],
        min: [1, "Time can not be 0"]
    },
    cookTime:
    {
        type: Number,
        required: [true, "You must put in a Cook Time!"],
        min: [1, "Time can not be 0"]
    },
    prepTime:
    {
        type: Number,
        required: [true, "You must put in a Prep Time!"],
        min: [1, "Time can not be 0"]
    },
    servingSize:
    {
        type: Number,
        required: [true, "You must put in a Serving Size!"],
        min: [1, "The serving must be greater than 0"]
    },
    ingredients:
    {
        type: String,
        required: [true, "You must have an ingredient!"],
        minlength: [2, "Your ingredient must be at least 2 Characters"]
    },
    directions:
    {
        type: String,
        required: [true, "You must have an directions on how to make dish!"],
        minlength: [15, "Your directions must be at least 15 Characters"]
    },
    author:
    {
        type: String,
        required: [true, "This recipe must have an author!"],
        minlength: [2, "You must have at least 2 Characters for the author"]
    }
}, {timestamps:true});

module.exports = mongoose.model("CookBook", CookBookSchema);