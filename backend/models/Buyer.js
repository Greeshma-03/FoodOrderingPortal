const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for storing properly in the database
const BuyerSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	contact:{
		type: String,
		required: true
	},
    age:{
        type: Number,
        required: true
    },
    batch:{
        type: Number,
        required: true
    }
});

module.exports = Buyer = mongoose.model("Buyers", BuyerSchema);
