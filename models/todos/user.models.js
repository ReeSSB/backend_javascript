import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: [true, "password is required."],
		},
		isActive: Boolean,
	},
	{ timestamps: true }
);

export const User = mongoose.model("User", userSchema);

// Very Very Important Note: Model "User" name will be changed to "users" in mongodb, after we run the file, it is as per mongodb convention. Mongodb always add 's' at last of name of models.
