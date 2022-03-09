import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import config from '../config';

const UserModel = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: [true, 'Username already exists'],
	},
	password: {
		type: String,
		required: true,
	},
	debts: [
		{
			user: String,
			amount: Number,
			date: String,
		},
	],
});

UserModel.methods.generateAuthToken = function () {
	return jwt.sign(
		{
			id: this._id,
			username: this.username,
		},
		config.JWT_SECRET
	);
};

UserModel.methods.comparePassword = async function (userPassword) {
	return await bcrypt.compare(userPassword, this.password);
};

UserModel.pre('save', async function (next) {
	if (!this.isModified('password')) return next();

	this.password = await bcrypt.hash(this.password, 12);
	next();
});

UserModel.post('save', function (error, doc, next) {
	if (
		(error.keyValue?.username != null) & (error.name === 'MongoServerError') &&
		error.code === 11000
	) {
		return next(new Error('User with this email already exists'));
	}
});

export default mongoose.model('User', UserModel);
