const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for storing properly in the database
const FoodSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	rating:{
		type: Number,
		required: true,
        default:0,
        min:0,
        max:5
	},
    veg:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    }
});

module.exports = Food = mongoose.model("FoodItems", FoodSchema);
