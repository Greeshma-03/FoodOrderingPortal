const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VendorSchema = new Schema({
	name: {
		type: String,
		required: true
	},
    shop:{
        type: String,
        required: true
    },
	email: {
		type: String,
		required: true
	},
	contactno:{
        type: String,
        required: true
    },
    canteenopen:{
        type: String,
        required: true
    },
    canteenclose:{
        type:String,
        required: true
    },
    password:{
		type: String,
		required: true
	}
});

module.exports = Vendor = mongoose.model("Vendor", VendorSchema);
