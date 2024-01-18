import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
	address_1: {
		type: String,
		required: true,
	},
	address_2: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	dist: {
		type: String,
		required: true,
	},
	pincode: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
});

const hospitalSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		address: [addressSchema],
		contactNo: {
			type: Number,
			required: treue,
		},
		specialisedIn: {
			type: String,
		},
	},
	{ timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
