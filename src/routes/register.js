import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';

export default async function (req, res) {
	const { username, password } = req.body;

	if (!username || !password)
		return res.status(400).json({
			message: 'Username and password are required',
		});

	const newUser = new User({
		username,
		password,
	});

	try {
		const user = await newUser.save();

		const token = user.generateAuthToken();

		res.status(200).json({
			statusCode: 200,
			token,
		});
	} catch (err) {
		return res.status(400).json({
			statusCode: 400,
			message: err.message,
		});
	}
}
