const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for storing properly in the database
const OrdersSchema = new Schema({
	bemail: {
		type: String,
		required: true
	},
	vemail: {
		type: String,
		required: true
	},
	item:{
		type:String,
		required: true
	},
	qty:{
		type:Number,
		required:true,
		min:0,
		max:5
	},
	shop:
	{
		type:String,
		required:true
	},	
	status:{
		type: String,
		required: true,
	}
});

module.exports = Order = mongoose.model("OrderItems",OrdersSchema);
