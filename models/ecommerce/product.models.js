import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		available: {
			type: Boolean,
			default: true,
		},
		productImage: {},
		price: {
			type: Number,
			default: 0,
			required: true,
		},
		stock: {
			type: Number,
			default: 0,
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category",
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
