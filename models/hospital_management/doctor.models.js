import mongoose from "mongoose";

const hospitalWorkHours = new mongoose.Schema({
	name: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	time: {
		type: Number,
		required: true,
	},
});

const doctorSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		designation: {
			type: String,
			required: true,
		},
		specialist: {
			type: String,
			required: true,
		},
		salary: {
			type: Number,
			required: true,
		},
		qualification: {
			type: String,
			required: true,
		},
		experienceInYears: {
			type: Number,
			required: true,
			default: 0,
		},
		workInHospitals: [hospitalWorkHours],
	},
	{ timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
