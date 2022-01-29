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
        required: true,
        enum:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    canteenclose:{
        type:String,
        required: true,
        enum:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    },
    password:{
		type: String,
		required: true
	}
});

module.exports = Vendor = mongoose.model("Vendor", VendorSchema);
